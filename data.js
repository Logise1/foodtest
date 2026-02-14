const foods = [
    {
        id: 1,
        name: "Pizza de Pepperoni",
        category: "Comida Rápida/Salado",
        tags: ["unhealthy", "savory", "main"],
        dislikeOptions: ["Pepperoni", "Queso Mozzarella", "Salsa de Tomate", "Masa de Harina", "Orégano"],
        emoji: "🍕",
        color: "#FF8A65"
    },
    {
        id: 2,
        name: "Ensalada César",
        category: "Saludable/Entrada",
        tags: ["healthy", "light", "starter"],
        dislikeOptions: ["Lechuga Romana", "Aderezo César", "Crutones (Pan)", "Queso Parmesano", "Anchoas"],
        emoji: "🥗",
        color: "#AED581"
    },
    {
        id: 3,
        name: "Sushi (Nigiri de Salmón)",
        category: "Asiática/Salado",
        tags: ["healthy", "savory", "main"],
        dislikeOptions: ["Salmón Crudo", "Arroz de Sushi", "Vinagre de Arroz", "Wasabi", "Alga Nori"],
        emoji: "🍣",
        color: "#FFB74D"
    },
    {
        id: 4,
        name: "Hamburguesa Doble con Queso",
        category: "Comida Rápida/Carne",
        tags: ["unhealthy", "savory", "main"],
        dislikeOptions: ["Carne de Res", "Queso Cheddar", "Pan de Hamburguesa", "Cebolla", "Pepinillos"],
        emoji: "🍔",
        color: "#E57373"
    },
    {
        id: 5,
        name: "Helado de Chocolate",
        category: "Postre/Dulce",
        tags: ["unhealthy", "sweet", "dessert"],
        dislikeOptions: ["Leche/Crema", "Cacao en Polvo", "Azúcar", "Huevos", "Vainilla"],
        emoji: "🍦",
        color: "#D7CCC8"
    },
    {
        id: 6,
        name: "Brócoli al Vapor",
        category: "Saludable/Vegetales",
        tags: ["healthy", "light", "side"],
        dislikeOptions: ["Brócoli", "Tallo del Brócoli", "Sal", "Aceite de Oliva", "Pimienta"],
        emoji: "🥦",
        color: "#81C784"
    },
    {
        id: 7,
        name: "Tacos al Pastor",
        category: "Mexicana/Salado",
        tags: ["savory", "main", "street_food"],
        dislikeOptions: ["Carne de Cerdo", "Piña", "Tortilla de Maíz", "Cilantro", "Cebolla"],
        emoji: "🌮",
        color: "#FFF176"
    },
    {
        id: 8,
        name: "Paella Valenciana",
        category: "Española/Arroz",
        tags: ["savory", "main", "complex"],
        dislikeOptions: ["Arroz Bomba", "Azafrán", "Conejo/Pollo", "Judías Verdes", "Garrofón (Frijol)"],
        emoji: "🥘",
        color: "#FFD54F"
    },
    {
        id: 9,
        name: "Donas Glaseadas",
        category: "Bollería/Dulce",
        tags: ["unhealthy", "sweet", "snack"],
        dislikeOptions: ["Harina de Trigo", "Azúcar Glaseado", "Aceite Frito", "Levadura", "Leche"],
        emoji: "🍩",
        color: "#F48FB1"
    },
    {
        id: 10,
        name: "Salmón a la Parrilla",
        category: "Saludable/Pescado",
        tags: ["healthy", "savory", "main"],
        dislikeOptions: ["Filete de Salmón", "Piel de Salmón", "Limón", "Eneldo", "Aceite de Oliva"],
        emoji: "🐟",
        color: "#FFAB91"
    },
    {
        id: 11,
        name: "Papas Fritas",
        category: "Comida Rápida/Salado",
        tags: ["unhealthy", "savory", "side"],
        dislikeOptions: ["Papas (Patatas)", "Aceite Vegetal", "Sal", "Ketchup (Opcional)", "Aditivos"],
        emoji: "🍟",
        color: "#FFEB3B"
    },
    {
        id: 12,
        name: "Manzana Roja",
        category: "Fruta/Saludable",
        tags: ["healthy", "sweet", "snack"],
        dislikeOptions: ["Cáscara de Manzana", "Pulpa de Manzana", "Semillas", "Tallo", "Cera Comestible"],
        emoji: "🍎",
        color: "#EF5350"
    },
    {
        id: 13,
        name: "Espagueti a la Boloñesa",
        category: "Italiana/Pasta",
        tags: ["savory", "main", "comfort"],
        dislikeOptions: ["Pasta de Trigo", "Carne Molida", "Tomate", "Cebolla/Ajo", "Queso Parmesano"],
        emoji: "🍝",
        color: "#FFCC80"
    },
    {
        id: 14,
        name: "Pastel de Zanahoria",
        category: "Postre/Dulce",
        tags: ["sweet", "dessert", "cake"],
        dislikeOptions: ["Zanahoria Rallada", "Nueces", "Canela", "Queso Crema", "Pasas"],
        emoji: "🍰",
        color: "#FFE0B2"
    },
    {
        id: 15,
        name: "Aguacate (Palta)",
        category: "Saludable/Vegetal",
        tags: ["healthy", "savory", "side"],
        dislikeOptions: ["Aguacate Maduro", "Fibra del Aguacate", "Piel (por error)", "Hueso (Semilla)", "Limón"],
        emoji: "🥑",
        color: "#C5E1A5"
    },
    {
        id: 16,
        name: "Pollo Frito (Estilo KFC)",
        category: "Comida Rápida/Ave",
        tags: ["unhealthy", "savory", "main"],
        dislikeOptions: ["Pollo (Muslo/Pechuga)", "Empanizado (Harina)", "Piel Frita", "Especias Picantes", "Aceite"],
        emoji: "🍗",
        color: "#FFAB40"
    },
    {
        id: 17,
        name: "Curry de Verduras",
        category: "Vegetariano/Especiado",
        tags: ["healthy", "savory", "main"],
        dislikeOptions: ["Leche de Coco", "Pasta de Curry", "Garbanzos", "Coliflor/Papas", "Cilantro"],
        emoji: "🍛",
        color: "#FFD180"
    },
    {
        id: 18,
        name: "Hot Dog (Perrito Caliente)",
        category: "Comida Rápida/Carne",
        tags: ["unhealthy", "savory", "snack"],
        dislikeOptions: ["Salchicha (Cerdo/Pavo)", "Pan de Hot Dog", "Mostaza", "Ketchup", "Cebolla Picada"],
        emoji: "🌭",
        color: "#FF8A80"
    },
    {
        id: 19,
        name: "Gazpacho",
        category: "Sopa Fría/Saludable",
        tags: ["healthy", "light", "starter"],
        dislikeOptions: ["Tomate Crudo", "Pepino", "Pimiento Verde", "Ajo Crudo", "Vinagre"],
        emoji: "🥣",
        color: "#FFCDD2"
    },
    {
        id: 20,
        name: "Brownie de Chocolate",
        category: "Postre/Dulce",
        tags: ["unhealthy", "sweet", "dessert"],
        dislikeOptions: ["Chocolate Oscuro", "Nueces", "Harina", "Azúcar", "Mantequilla"],
        emoji: "🍫",
        color: "#BCAAA4"
    },
    {
        id: 21,
        name: "Filete de Res (Bistec)",
        category: "Carne/Proteína",
        tags: ["savory", "main", "heavy"],
        dislikeOptions: ["Carne Roja", "Grasa del Borde", "Sangre/Jugos", "Pimienta", "Mantequilla/Aceite"],
        emoji: "🥩",
        color: "#EF9A9A"
    },
    {
        id: 22,
        name: "Quinoa con Verduras",
        category: "Saludable/Cereales",
        tags: ["healthy", "light", "main"],
        dislikeOptions: ["Granos de Quinoa", "Pimiento", "Calabacín", "Cebolla Morada", "Aderezo de Limón"],
        emoji: "🥗",
        color: "#E6EE9C"
    },
    {
        id: 23,
        name: "Croissant de Mantequilla",
        category: "Bollería/Salado",
        tags: ["unhealthy", "savory", "breakfast"],
        dislikeOptions: ["Masa Hojaldrada", "Mantequilla", "Huevo (Barniz)", "Azúcar (Poca)", "Harina Refinada"],
        emoji: "🥐",
        color: "#FFE082"
    },
    {
        id: 24,
        name: "Lentejas Guisadas",
        category: "Legumbres/Tradicional",
        tags: ["healthy", "savory", "main"],
        dislikeOptions: ["Lentejas", "Chorizo", "Zanahoria Cocida", "Papa Cocida", "Laurel"],
        emoji: "🍲",
        color: "#BCAAA4"
    },
    {
        id: 25,
        name: "Nachos con Queso",
        category: "Botana/Salado",
        tags: ["unhealthy", "savory", "snack"],
        dislikeOptions: ["Totopos (Maíz)", "Queso Líquido", "Jalapeños", "Frijoles", "Crema Ácida"],
        emoji: "🧀",
        color: "#FFF59D"
    },
    {
        id: 26,
        name: "Tarta de Queso (Cheesecake)",
        category: "Postre/Dulce",
        tags: ["sweet", "dessert", "rich"],
        dislikeOptions: ["Queso Crema", "Base de Galleta", "Mermelada de Fresa", "Azúcar", "Nata/Crema"],
        emoji: "🍰",
        color: "#F8BBD0"
    },
    {
        id: 27,
        name: "Espinacas a la Crema",
        category: "Vegetales/Guarnición",
        tags: ["healthy", "savory", "side"],
        dislikeOptions: ["Espinacas", "Crema de Leche", "Queso Parmesano", "Nuez Moscada", "Mantequilla"],
        emoji: "🥬",
        color: "#A5D6A7"
    },
    {
        id: 28,
        name: "Costillas BBQ",
        category: "Carne/Ahumado",
        tags: ["unhealthy", "savory", "main"],
        dislikeOptions: ["Costilla de Cerdo", "Salsa BBQ (Dulce)", "Hueso", "Grasa", "Especias Ahumadas"],
        emoji: "🍖",
        color: "#EF5350"
    },
    {
        id: 29,
        name: "Yogur Griego con Miel",
        category: "Saludable/Lácteo",
        tags: ["healthy", "sweet", "breakfast"],
        dislikeOptions: ["Yogur Ácido", "Miel de Abeja", "Nueces (Opcional)", "Suero del Yogur", "Textura Espesa"],
        emoji: "🥣",
        color: "#E1F5FE"
    },
    {
        id: 30,
        name: "Churros con Chocolate",
        category: "Postre/Frito",
        tags: ["unhealthy", "sweet", "snack"],
        dislikeOptions: ["Masa Frita", "Azúcar", "Canela", "Chocolate Caliente", "Aceite"],
        emoji: "🍫",
        color: "#D7CCC8"
    },
    {
        id: 31,
        name: "Sandwich Club",
        category: "Cafetería/Salado",
        tags: ["savory", "main", "bread"],
        dislikeOptions: ["Pan Tostado", "Pollo/Pavo", "Tocino", "Lechuga/Tomate", "Mayonesa"],
        emoji: "🥪",
        color: "#E6EE9C"
    },
    {
        id: 32,
        name: "Sopa de Pollo",
        category: "Reconfortante/Líquido",
        tags: ["healthy", "savory", "starter"],
        dislikeOptions: ["Caldo de Pollo", "Piezas de Pollo", "Fideos", "Zanahoria/Apio", "Cebolla"],
        emoji: "🍜",
        color: "#FFF9C4"
    },
    {
        id: 33,
        name: "Tiramisú",
        category: "Postre/Café",
        tags: ["sweet", "dessert", "rich"],
        dislikeOptions: ["Café Expreso", "Queso Mascarpone", "Bizcocho Soletilla", "Cacao en Polvo", "Licor (Amaretto)"],
        emoji: "🍰",
        color: "#D7CCC8"
    },
    {
        id: 34,
        name: "Huevos Revueltos con Tocino",
        category: "Desayuno/Proteína",
        tags: ["savory", "breakfast", "heavy"],
        dislikeOptions: ["Huevo", "Tocino Frito", "Sal/Pimienta", "Aceite/Mantequilla", "Cebollín"],
        emoji: "🍳",
        color: "#FFF59D"
    },
    {
        id: 35,
        name: "Pan Tostado con Mermelada",
        category: "Desayuno/Dulce",
        tags: ["sweet", "breakfast", "light"],
        dislikeOptions: ["Pan de Caja", "Mermelada de Fruta", "Mantequilla", "Cortezas del Pan", "Semillas del Pan"],
        emoji: "🍞",
        color: "#FFE0B2"
    },
    {
        id: 36,
        name: "Ceviche de Pescado",
        category: "Mariscos/Ácido",
        tags: ["healthy", "savory", "starter"],
        dislikeOptions: ["Pescado Crudo/Curado", "Jugo de Limón", "Cebolla Morada", "Cilantro", "Chile/Picante"],
        emoji: "🍋",
        color: "#E0F7FA"
    },
    {
        id: 37,
        name: "Lasagna de Carne",
        category: "Pasta/Horno",
        tags: ["savory", "main", "heavy"],
        dislikeOptions: ["Láminas de Pasta", "Salsa Boloñesa", "Salsa Bechamel", "Queso Gratinado", "Orégano"],
        emoji: "🍝",
        color: "#FFCC80"
    },
    {
        id: 38,
        name: "Frutos Secos (Nueces/Almendras)",
        category: "Snack/Saludable",
        tags: ["healthy", "savory", "snack"],
        dislikeOptions: ["Nueces", "Almendras", "Sal Añadida", "Piel de Almendra", "Textura Seca"],
        emoji: "🥜",
        color: "#D7CCC8"
    },
    {
        id: 39,
        name: "Batido de Proteínas",
        category: "Suplemento/Líquido",
        tags: ["healthy", "sweet", "drink"],
        dislikeOptions: ["Proteína en Polvo", "Leche/Agua", "Saborizante Artificial", "Edulcorante", "Espesantes"],
        emoji: "🥤",
        color: "#CFD8DC"
    },
    {
        id: 40,
        name: "Gomitas de Fruta",
        category: "Dulces/Azúcar",
        tags: ["unhealthy", "sweet", "snack"],
        dislikeOptions: ["Gelatina", "Azúcar", "Saborizantes", "Colorantes", "Ácido Cítrico"],
        emoji: "🍬",
        color: "#F48FB1"
    }
];

export default foods;
