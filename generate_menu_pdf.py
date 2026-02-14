import calendar
from datetime import date
import os
import random
import json
from collections import defaultdict

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter, landscape
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

# ------------------------------------------------------------------
# DATA LOADING & PROCESSING
# ------------------------------------------------------------------

def load_user_data(userdata_path):
    all_data = []
    users = ['ariel', 'mia', 'rosa', 'david']
    for user in users:
        file_path = os.path.join(userdata_path, f"{user}.json")
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                for item in data:
                    item['user'] = user
                all_data.extend(data)
        except Exception:
            pass
    return all_data

def get_food_stats(all_data):
    stats = defaultdict(lambda: {
        'name': '', 
        'category': '', 
        'ratings': [], 
        'min_rating': 5
    })
    
    for item in all_data:
        fid = item['foodId']
        stats[fid]['name'] = item['foodName']
        stats[fid]['category'] = item['category']
        stats[fid]['ratings'].append(item['rating'])
        if item['rating'] < stats[fid]['min_rating']:
            stats[fid]['min_rating'] = item['rating']
            
    results = []
    for fid, data in stats.items():
        avg = sum(data['ratings']) / len(data['ratings'])
        results.append({
            'name': data['name'],
            'category': data['category'],
            'avg_rating': avg,
            'min_rating': data['min_rating']
        })
    return results

def select_option_with_least_repetition(candidates, history_list):
    acceptable = [c for c in candidates if c['min_rating'] >= 2]
    if not acceptable: acceptable = candidates
    acceptable.sort(key=lambda x: x['avg_rating'], reverse=True)
    
    candidates_with_score = []
    for cand in acceptable:
        name = cand['name']
        try:
            last_idx = history_list.index(name)
            days_ago = last_idx
        except ValueError:
            days_ago = 999 
        candidates_with_score.append((cand, days_ago))
        
    # Sort by how long ago it was used (desc) then rating (desc)
    candidates_with_score.sort(key=lambda x: (x[1] > 14, x[0]['avg_rating']), reverse=True)
    
    top_n = candidates_with_score[:5] # Increase pool slightly
    if not top_n: return acceptable[0]
    
    selection = random.choice(top_n)[0]
    history_list.insert(0, selection['name'])
    return selection

    
def get_nutritional_note(name, cat):
    name = name.lower()
    cat = cat.lower()
    
    if 'pescado' in name or 'atún' in name or 'mar' in cat:
        return "<font color='blue' size='6'>🐟 Omega-3</font>"
    elif 'huevo' in name or 'frijol' in name or 'legumbre' in name or 'lentej' in name:
        return "<font color='green' size='6'>🌱 Ligero/Fibra</font>"
    elif 'pollo' in name or 'pavo' in name:
        return "<font color='orange' size='6'>🍗 Magra</font>"
    elif 'res' in name or 'cerdo' in name or 'estofado' in name:
        return "<font color='red' size='6'>🥩 Proteína/Hierro</font>"
    elif 'sopa' in name or 'crema' in name:
        return "<font color='purple' size='6'>🥣 Reconfortante</font>"
    return ""

def create_meal(proteins, carbs, vegetables, specials, h_main, h_carb, h_veg, h_special):
    # Chance for a "Special Whole Dish" (Lentils, Soup, Stew) - e.g. 15% chance
    # But only if available
    is_special = False
    if specials and random.random() < 0.15:
        main = select_option_with_least_repetition(specials, h_special)
        dish_text = f"<b>{main['name']}</b>"
        note = get_nutritional_note(main['name'], main['category'])
        is_special = True
    else:
        # Standard: Protein + Carb + Veggie
        main = select_option_with_least_repetition(proteins, h_main)
        carb = select_option_with_least_repetition(carbs, h_carb)
        veggie = select_option_with_least_repetition(vegetables, h_veg)
        
        dish_text = f"{main['name']}<br/>+ {carb['name']}<br/>+ {veggie['name']}"
        note = get_nutritional_note(main['name'], main['category'])
    
    return {
        'dish': dish_text,
        'note': note
    }

def generate_month_schedule(food_stats):
    # Set seed for reproducibility
    random.seed(42)
    
    # Categorize with more detail
    # Proteins
    proteins = [f for f in food_stats if any(x in f['category'].lower() or x in f['name'].lower() for x in ['proteína','carne','pollo','pescado','huevo','tofu','atún','cerdo','camarones','pavo'])]
    
    # Vegetables
    vegetables = [f for f in food_stats if any(x in f['category'].lower() or x in f['name'].lower() for x in ['vegetal','verdura','brócoli','espinacas','zanahoria','tomate','pepino','champiñones','ensalada'])]
    
    # Carbs
    carbs = [f for f in food_stats if any(x in f['category'].lower() or x in f['name'].lower() for x in ['cereal','arroz','pasta','pan','papa','patata','tubérculo'])]

    # NEW: "Special Dishes" / "Whole Meals"
    # These might be defined in the JSONs under specific categories or manually added here for variety if not present in files
    # Since we rely on userdata, we look for things that sound like whole meals or specific requests (Lentils, Soups)
    # If not in JSON, we can inject a few generic ones that everyone likes (assuming standard family favorites)
    
    # Let's see if we have them in stats, otherwise add mock entries suitable for the month
    specials = [f for f in food_stats if any(x in f['name'].lower() for x in ['lentejas', 'sopa', 'crema', 'estofado', 'guiso'])]
    
    # If the user JSON doesn't have these, we might want to inject a few generic "High Rated" placeholders
    # ONLY if we assume they exist. The user asked for "Rarely (lentils, soup...)"
    # We will simulate them if they aren't abundant, with high starting rating
    if len(specials) < 3:
        specials.append({'name': 'Lentejas Estofadas', 'category': 'Legumbre/Plato', 'avg_rating': 4.5, 'min_rating': 3})
        specials.append({'name': 'Sopa de Pollo', 'category': 'Sopa', 'avg_rating': 4.0, 'min_rating': 3})
        specials.append({'name': 'Crema de Verduras', 'category': 'Vegetal/Plato', 'avg_rating': 4.0, 'min_rating': 3})

    hist_main, hist_carb, hist_veg, hist_special = [], [], [], []
    
    year, month = 2026, 2
    cal = calendar.monthcalendar(year, month)
    
    schedule_map = {} 
    
    for week in cal:
        for day_num, weekday in zip(week, range(7)):
            if day_num == 0: continue
            
            content = ""
            bg_color = colors.white
            
            # Fri/Sat
            if weekday == 4 or weekday == 5:
                content = "<b>GLOVO 🛵</b><br/><font size='8' color='grey'>Ticket Libre</font>"
                bg_color = colors.HexColor('#FFF9C4')
            
            # Sun
            elif weekday == 6:
                meal_l = create_meal(proteins, carbs, vegetables, specials, hist_main, hist_carb, hist_veg, hist_special)
                meal_d = create_meal(proteins, carbs, vegetables, specials, hist_main, hist_carb, hist_veg, hist_special)
                content = f"<b>Comida:</b><br/>{meal_l['dish']}<br/>{meal_l['note']}<br/><br/><b>Cena:</b><br/>{meal_d['dish']}<br/>{meal_d['note']}"
                bg_color = colors.HexColor('#E3F2FD')
                
            # Mon-Thu
            else:
                meal = create_meal(proteins, carbs, vegetables, specials, hist_main, hist_carb, hist_veg, hist_special)
                content = f"<b>Cena:</b><br/>{meal['dish']}<br/>{meal['note']}"
                
            schedule_map[day_num] = {'text': content, 'bg': bg_color}
            
    return schedule_map

def create_calendar_pdf(schedule_map, filename):
    doc = SimpleDocTemplate(filename, pagesize=landscape(letter), leftMargin=20, rightMargin=20, topMargin=20, bottomMargin=20)
    elements = []
    
    # Styles
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#1A237E'), # Dark Indigo
        alignment=1, # Center
        spaceAfter=10
    )
    
    # Custom Styles
    cell_style = ParagraphStyle(
        'CellStyle',
        parent=styles['Normal'],
        fontSize=9,
        leading=11,
        alignment=0, # Left
        textColor=colors.HexColor('#37474F')
    )
    
    day_num_style = ParagraphStyle(
        'DayNum',
        parent=styles['Normal'],
        fontSize=14,
        fontName='Helvetica-Bold',
        textColor=colors.HexColor('#1A237E'),
        alignment=2, # Right
        spaceAfter=2
    )

    # Title
    elements.append(Paragraph("📅 Menú Mensual - Febrero 2026", title_style))
    
    # Legend
    legend_text = """
    <font color='blue' size='10'><b>🐟 Pescado</b></font> &nbsp;&nbsp; 
    <font color='green' size='10'><b>🌱 Ligero</b></font> &nbsp;&nbsp; 
    <font color='orange' size='10'><b>🍗 Ave</b></font> &nbsp;&nbsp; 
    <font color='red' size='10'><b>🥩 Carne Roja</b></font>
    """
    elements.append(Paragraph(legend_text, ParagraphStyle('Legend', parent=styles['Normal'], alignment=1)))
    elements.append(Spacer(1, 10))

    # Calendar Headers
    days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    # Create header cells with background
    header_data = [Paragraph(f"<b>{d}</b>", styles['Normal']) for d in days]
    
    table_data = [header_data]
    
    # Table Styling
    ts = [
        ('GRID', (0,0), (-1,-1), 1, colors.HexColor('#B0BEC5')),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#CFD8DC')), # Header bg
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 4),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('TEXTCOLOR', (0,0), (-1,0), colors.HexColor('#263238')),
    ]
    
    # Generate Rows
    cal_matrix = calendar.monthcalendar(2026, 2)
    
    row_idx = 1
    for week in cal_matrix:
        row_cells = []
        for col_idx, day_num in enumerate(week):
            if day_num == 0:
                row_cells.append("")
                ts.append(('BACKGROUND', (col_idx, row_idx), (col_idx, row_idx), colors.HexColor('#ECEFF1'))) # Grey empty
            else:
                day_info = schedule_map.get(day_num)
                
                # Combine Day Number + Content into list of Paragraphs for cell
                # Note: Table cells can take a list of flowables
                cell_content = [
                    Paragraph(str(day_num), day_num_style),
                    Paragraph(day_info['text'], cell_style)
                ]
                row_cells.append(cell_content)
                
                # Apply background
                if day_info['bg'] != colors.white:
                    ts.append(('BACKGROUND', (col_idx, row_idx), (col_idx, row_idx), day_info['bg']))
        
        table_data.append(row_cells)
        row_idx += 1
        
    # Calculate widths
    # Landscape Letter width is 11 inch. Margins 20pt ~ 0.3 inch. 
    # Usable width approx 10.4 inch. 10.4 / 7 = 1.48 inch.
    col_width = 1.45 * inch
    
    # Row Heights? ReportLab Table calculates automatically, but we want minimum for calendar look
    # We can set rowHeights argument in Table constructor
    
    t = Table(table_data, colWidths=[col_width]*7)
    t.setStyle(TableStyle(ts))
    
    elements.append(t)
    
    doc.build(elements)
    print(f"PDF con diseño mejorado generado en: {filename}")

def main():
    base_path = os.path.dirname(os.path.abspath(__file__))
    userdata_path = os.path.join(base_path, 'userdata')
    pdf_path = os.path.join(base_path, "Menu_Febrero_2026_Diseno.pdf")
    
    data = load_user_data(userdata_path)
    if not data:
        print("No se encontraron datos.")
        return
        
    stats = get_food_stats(data)
    schedule = generate_month_schedule(stats)
    
    create_calendar_pdf(schedule, pdf_path)

if __name__ == "__main__":
    main()
