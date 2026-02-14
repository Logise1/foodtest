# Evaluador Gastronómico Premium

Este es un test interactivo de preferencias culinarias construido con HTML5, CSS3 moderno y Vanilla JavaScript.

## Características

- **Diseño Premium**: Interfaz moderna con efectos de cristal (Glassmorphism), animaciones fluidas y modo oscuro.
- **40 Platillos**: Una lista diversa de comidas para evaluar.
- **Imágenes Dinámicas**: Se generan imágenes de alta calidad automáticamente para cada platillo.
- **Lógica Condicional**: Si la calificación es baja (< 3 estrellas), se solicita retroalimentación específica.
- **Exportación de Datos**: Al finalizar, puedes descargar tus resultados en formato JSON.

## Cómo ejecutar

Debido a que este proyecto utiliza Módulos de JavaScript (ES Modules) para una mejor estructura de código, **necesitas ejecutarlo en un servidor local**. Los navegadores bloquean la carga de módulos directamente desde el sistema de archivos (`file://`) por seguridad.

### Opción 1: Visual Studio Code (Recomendado)
1. Instala la extensión **Live Server**.
2. Abre `index.html`.
3. Haz clic derecho y selecciona "Open with Live Server".

### Opción 2: Python
Si tienes Python instalado, abre una terminal en esta carpeta y ejecuta:
```bash
python -m http.server
```
Luego abre `http://localhost:8000` en tu navegador.

### Opción 3: Node.js
Si tienes Node.js, puedes usar `serve` o `http-server`:
```bash
npx serve .
```

¡Disfruta evaluando tu comida!
