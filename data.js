const foods = [
    {
        id: 1,
        name: "Arroz Blanco",
        category: "Cereal/Básico",
        tags: ["neutral", "basic", "side"],
        dislikeOptions: ["Textura", "Sabor Soso", "Muy Seco", "Muy Pastoso", "Olor"],
        emoji: "🍚",
        color: "#EEEEEE"
    },
    {
        id: 2,
        name: "Pollo (Pechuga/Muslo)",
        category: "Proteína/Ave",
        tags: ["protein", "meat", "basic"],
        dislikeOptions: ["Textura Seca", "Piel", "Huesos", "Cartílagos", "Sabor"],
        emoji: "🍗",
        color: "#F5F5DC"
    },
    {
        id: 3,
        name: "Carne de Res",
        category: "Proteína/Roja",
        tags: ["protein", "meat", "heavy"],
        dislikeOptions: ["Grasa Visible", "Nervios", "Textura Dura", "Sabor Fuerte", "Sangre/Jugo"],
        emoji: "🥩",
        color: "#E57373"
    },
    {
        id: 4,
        name: "Carne de Cerdo",
        category: "Proteína/Carne",
        tags: ["protein", "meat", "heavy"],
        dislikeOptions: ["Grasa", "Olor", "Textura Seca", "Sabor Fuerte", "Color"],
        emoji: "🥓",
        color: "#FFAB91"
    },
    {
        id: 5,
        name: "Pescado Blanco",
        category: "Proteína/Mar",
        tags: ["protein", "fish", "light"],
        dislikeOptions: ["Espinas", "Olor a Mar", "Textura Blanda", "Piel", "Sabor"],
        emoji: "🐟",
        color: "#B3E5FC"
    },
    {
        id: 6,
        name: "Huevo",
        category: "Proteína/Básico",
        tags: ["protein", "basic", "versatile"],
        dislikeOptions: ["Yema", "Clara", "Olor (Sulfuro)", "Textura", "Sabor"],
        emoji: "🥚",
        color: "#FFF59D"
    },
    {
        id: 7,
        name: "Leche de Vaca",
        category: "Lácteo",
        tags: ["dairy", "drink", "basic"],
        dislikeOptions: ["Lactosa (Digestión)", "Nata", "Olor", "Sabor", "Temperatura"],
        emoji: "🥛",
        color: "#E3F2FD"
    },
    {
        id: 8,
        name: "Queso Curado",
        category: "Lácteo",
        tags: ["dairy", "savory", "strong"],
        dislikeOptions: ["Olor Fuerte", "Sabor Intenso", "Corteza", "Textura Dura", "Salado"],
        emoji: "🧀",
        color: "#FFD54F"
    },
    {
        id: 9,
        name: "Tomate",
        category: "Vegetal/Fruta",
        tags: ["vegetable", "fresh", "acidic"],
        dislikeOptions: ["Semillas", "Piel", "Acidez", "Textura Harinosa", "Jugo"],
        emoji: "🍅",
        color: "#EF5350"
    },
    {
        id: 10,
        name: "Cebolla",
        category: "Vegetal/Condimento",
        tags: ["vegetable", "spicy", "aromatic"],
        dislikeOptions: ["Olor Persistente", "Picor", "Textura Crujiente", "Sabor Cocido", "Sabor Crudo"],
        emoji: "🧅",
        color: "#E6EE9C"
    },
    {
        id: 11,
        name: "Brócoli",
        category: "Vegetal",
        tags: ["vegetable", "green", "healthy"],
        dislikeOptions: ["Olor al Cocinar", "Tallo Duro", "Textura Flor", "Sabor Amargo", "Color"],
        emoji: "🥦",
        color: "#66BB6A"
    },
    {
        id: 12,
        name: "Espinacas",
        category: "Vegetal/Hoja",
        tags: ["vegetable", "green", "healthy"],
        dislikeOptions: ["Textura Viscosa (Cocida)", "Sensación en Dientes", "Sabor Amargo", "Tierra", "Aspecto"],
        emoji: "🥬",
        color: "#4CAF50"
    },
    {
        id: 13,
        name: "Zanahoria",
        category: "Vegetal",
        tags: ["vegetable", "root", "sweet"],
        dislikeOptions: ["Sabor Dulce", "Dureza", "Textura Cocida", "Piel", "Centro Duro"],
        emoji: "🥕",
        color: "#FF7043"
    },
    {
        id: 14,
        name: "Papas (Patatas)",
        category: "Tubérculo",
        tags: ["starch", "vegetable", "basic"],
        dislikeOptions: ["Textura Harinosa", "Sabor Tierra", "Piel", "Ojos/Brotes", "Blandura"],
        emoji: "🥔",
        color: "#D7CCC8"
    },
    {
        id: 15,
        name: "Frijoles (Judías)",
        category: "Legumbre",
        tags: ["legume", "protein", "fiber"],
        dislikeOptions: ["Piel/Cáscara", "Textura Pastosa", "Gases/Digestión", "Sabor", "Caldo"],
        emoji: "🫘",
        color: "#8D6E63"
    },
    {
        id: 16,
        name: "Pasta de Trigo",
        category: "Cereal",
        tags: ["starch", "gluten", "basic"],
        dislikeOptions: ["Textura Blanda", "Sabor Harina", "Pegajosa", "Integral (Sabor)", "Forma"],
        emoji: "🍝",
        color: "#FFE0B2"
    },
    {
        id: 17,
        name: "Pan",
        category: "Cereal",
        tags: ["starch", "gluten", "basic"],
        dislikeOptions: ["Corteza", "Miga", "Seco/Duro", "Semillas", "Sabor Levadura"],
        emoji: "🍞",
        color: "#FFE082"
    },
    {
        id: 18,
        name: "Mermelada",
        category: "Dulce/Conserva",
        tags: ["sweet", "spread", "fruit"],
        dislikeOptions: ["Muy Dulce", "Trozos de Fruta", "Textura Pegajosa", "Semillas", "Sabor Artificial"],
        emoji: "🍓",
        color: "#EF5350"
    },
    {
        id: 19,
        name: "Chocolate",
        category: "Dulce",
        tags: ["sweet", "fat", "treat"],
        dislikeOptions: ["Muy Dulce", "Amargo (Cacao Puro)", "Textura", "Leche", "Frutos Secos Añadidos"],
        emoji: "🍫",
        color: "#795548"
    },
    {
        id: 20,
        name: "Café",
        category: "Bebida/Estimulante",
        tags: ["drink", "bitter", "strong"],
        dislikeOptions: ["Sabor Amargo", "Acidez", "Cafeína", "Olor Fuerte", "Manchas"],
        emoji: "☕",
        color: "#4E342E"
    },
    {
        id: 21,
        name: "Manzana",
        category: "Fruta",
        tags: ["fruit", "fresh", "sweet"],
        dislikeOptions: ["Piel/Cáscara", "Textura Arenosa", "Acidez", "Semillas", "Oxidación (Color)"],
        emoji: "🍎",
        color: "#E57373"
    },
    {
        id: 22,
        name: "Plátano (Banana)",
        category: "Fruta",
        tags: ["fruit", "sweet", "soft"],
        dislikeOptions: ["Textura Blanda", "Sabor", "Hilos/Hebras", "Manchas Negras", "Olor"],
        emoji: "🍌",
        color: "#FFF176"
    },
    {
        id: 23,
        name: "Naranja/Cítricos",
        category: "Fruta",
        tags: ["fruit", "acidic", "juicy"],
        dislikeOptions: ["Acidez", "Hilos Blancos", "Semillas", "Aroma Fuerte", "Textura Pulpa"],
        emoji: "🍊",
        color: "#FFB74D"
    },
    {
        id: 24,
        name: "Aguacate",
        category: "Fruta/Grasa",
        tags: ["fruit", "fat", "creamy"],
        dislikeOptions: ["Textura Grasosa", "Sabor Plano", "Hilos Negros", "Aspecto", "Oxidación"],
        emoji: "🥑",
        color: "#C5E1A5"
    },
    {
        id: 25,
        name: "Champiñones (Setas)",
        category: "Hongo",
        tags: ["fungi", "earthy", "savory"],
        dislikeOptions: ["Textura Gomosa", "Sabor a Tierra", "Color Oscuro", "Laminas", "Aspecto"],
        emoji: "🍄",
        color: "#BCAAA4"
    },
    {
        id: 26,
        name: "Camarones/Gambas",
        category: "Marisco",
        tags: ["seafood", "protein", "strong"],
        dislikeOptions: ["Olor Fuerte", "Textura", "Intestino (Vena)", "Cáscara", "Alergia/Miedo"],
        emoji: "🦐",
        color: "#FF8A65"
    },
    {
        id: 27,
        name: "Atún (Lata)",
        category: "Pescado/Conserva",
        tags: ["fish", "pantry", "protein"],
        dislikeOptions: ["Olor Fuerte", "Textura Seca", "Aceite", "Sabor Metálico", "Apariencia"],
        emoji: "🐟",
        color: "#90A4AE"
    },
    {
        id: 28,
        name: "Mayonesa",
        category: "Salsa/Grasa",
        tags: ["condiment", "fat", "creamy"],
        dislikeOptions: ["Textura Grasosa", "Sabor Vinagre", "Olor a Huevo", "Color", "Gelatinosa"],
        emoji: "🥣",
        color: "#FFF9C4"
    },
    {
        id: 29,
        name: "Mostaza",
        category: "Salsa/Condimento",
        tags: ["condiment", "spicy", "strong"],
        dislikeOptions: ["Picor Nasal", "Sabor Vinagre", "Color Amarillo", "Granos", "Olor"],
        emoji: "🌭",
        color: "#FFEB3B"
    },
    {
        id: 30,
        name: "Picante (Chile/Ají)",
        category: "Condimento",
        tags: ["spicy", "hot", "strong"],
        dislikeOptions: ["Ardor", "Dolor Físico", "Sabor", "Semillas", "Piel"],
        emoji: "🌶️",
        color: "#F44336"
    },
    {
        id: 31,
        name: "Cilantro",
        category: "Hierba",
        tags: ["herb", "green", "aromatic"],
        dislikeOptions: ["Sabor a Jabón", "Olor Fuerte", "Textura Hoja", "Tallo", "Color"],
        emoji: "🌿",
        color: "#81C784"
    },
    {
        id: 32,
        name: "Ajo",
        category: "Condimento",
        tags: ["aromatic", "spicy", "strong"],
        dislikeOptions: ["Olor Persistente", "Picor", "Sabor Fuerte", "Textura", "Repitencia"],
        emoji: "🧄",
        color: "#EEEEEE"
    },
    {
        id: 33,
        name: "Miel",
        category: "Dulce/Natural",
        tags: ["sweet", "sticky", "natural"],
        dislikeOptions: ["Muy Dulce", "Textura Pegajosa", "Sabor Floral", "Cristalización", "Origen"],
        emoji: "🍯",
        color: "#FFC107"
    },
    {
        id: 34,
        name: "Yogur",
        category: "Lácteo",
        tags: ["dairy", "probiotic", "acidic"],
        dislikeOptions: ["Acidez", "Textura Espesa", "Suero", "Sabor Lácteo", "Grumos"],
        emoji: "🥣",
        color: "#F5F5F5"
    },
    {
        id: 35,
        name: "Frutos Secos (Nueces)",
        category: "Fruto Seco",
        tags: ["nut", "fat", "crunchy"],
        dislikeOptions: ["Dureza", "Piel Amarga", "Textura Seca", "Sabor Rancio", "Alergia"],
        emoji: "🥜",
        color: "#D7CCC8"
    },
    {
        id: 36,
        name: "Aceitunas",
        category: "Encurtido/Grasa",
        tags: ["salty", "bitter", "snack"],
        dislikeOptions: ["Sabor Amargo", "Salinidad", "Textura", "Hueso", "Relleno"],
        emoji: "🫒",
        color: "#C5E1A5"
    },
    {
        id: 37,
        name: "Coco",
        category: "Fruta/Grasa",
        tags: ["fruit", "tropical", "sweet"],
        dislikeOptions: ["Textura Fibrosa", "Sabor Dulce", "Olor Intenso", "Agua de Coco", "Dureza"],
        emoji: "🥥",
        color: "#E0E0E0"
    },
    {
        id: 38,
        name: "Pepino",
        category: "Vegetal",
        tags: ["vegetable", "watery", "fresh"],
        dislikeOptions: ["Sabor Amargo", "Repitencia", "Semillas", "Piel", "Aguado"],
        emoji: "🥒",
        color: "#C8E6C9"
    },
    {
        id: 39,
        name: "Sandía/Melón",
        category: "Fruta",
        tags: ["fruit", "watery", "sweet"],
        dislikeOptions: ["Textura Arenosa", "Semillas", "Sabor Pepino", "Muy Dulce", "Aguado"],
        emoji: "🍉",
        color: "#FFCDD2"
    },
    {
        id: 40,
        name: "Tofu",
        category: "Proteína/Vegetal",
        tags: ["protein", "vegan", "bland"],
        dislikeOptions: ["Textura Blanda", "Sabor Soso", "Olor Soja", "Aspecto", "Consistencia"],
        emoji: "🧊",
        color: "#F5F5F5"
    }
];

export default foods;
