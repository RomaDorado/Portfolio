# Portfolio · José Dorado

Web estática (HTML + CSS + JS, sin dependencias ni proceso de build), lista para GitHub Pages.

## Estructura

```
index.html          Esqueleto de la página (no hace falta tocarlo)
css/styles.css      Diseño: colores, tipografías, layout
js/content.js       ← TODO EL CONTENIDO. Es lo único que editas normalmente.
js/app.js           Pinta el contenido en la página (no hace falta tocarlo)
assets/img/         Imágenes (retrato, capturas, creatividades)
docs/               PDFs (CV-Jose-Dorado-2027.pdf)
.nojekyll           Evita que GitHub Pages procese el sitio
```

## Cómo actualizar el contenido

Abre `js/content.js` con cualquier editor de texto.

- **Añadir** una experiencia, proyecto o curso: copia un bloque `{ ... },` de la lista correspondiente, pégalo donde quieras que aparezca y cambia los textos. El orden del archivo es el orden en la web.
- **Quitar**: borra el bloque completo, incluida su coma.
- **Placeholders**: todo texto con `[AGREGAR: ...]` o `[IMAGEN: ...]` sale en la web como aviso amarillo. Sustitúyelo por el dato real y el aviso desaparece.
- **Imágenes**: guarda el archivo en `assets/img/` (JPG o WebP, unos 1600 px de ancho, menos de 300 KB) y pon su ruta, por ejemplo `image: "assets/img/app-artesiete.jpg"`. Usa `fit: "contain"` para capturas de pantalla y `fit: "cover"` para fotos.
- **Proyecto destacado o breve**: `featured: true` lo muestra grande con imagen; `false` lo muestra como tarjeta.
- **Enlazar experiencia y proyectos**: en cada experiencia, `projects: ["id-del-proyecto"]`; en cada proyecto, `experience: "id-de-la-experiencia"`.
- **CV**: sube el PDF a `docs/` con el nombre `CV-Jose-Dorado-2027.pdf` (o cambia `cv:` en `person`) y deja `cvNote: ""`.

## Publicar en GitHub Pages

1. Crea un repositorio (por ejemplo `josedorado.github.io` o `portfolio`).
2. Sube todo el contenido de esta carpeta a la rama `main`.
3. En *Settings → Pages*, elige *Deploy from a branch*, rama `main`, carpeta `/ (root)`.
4. En uno o dos minutos la web estará en `https://<usuario>.github.io/<repo>/`.

Para probarla en local basta con abrir `index.html` en el navegador.
