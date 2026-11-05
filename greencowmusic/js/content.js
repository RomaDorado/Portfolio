/* =====================================================================
   CONTENIDO DEL PORTFOLIO — José Dorado
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas tocar para actualizar la web.
   - Para añadir un ítem: copia un bloque { ... } de la lista y cambia los textos.
   - Para quitarlo: borra su bloque completo (incluida la coma final).
   - Los textos entre corchetes que empiezan por [AGREGAR o [IMAGEN
     se muestran en la web como avisos amarillos. Sustitúyelos por
     el dato real y el aviso desaparece solo.
   - Imágenes: guárdalas en assets/img/ y escribe la ruta, p. ej.
     image: "assets/img/app-artesiete.jpg"
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- Identidad y contacto ---------- */
  person: {
    name: "José Dorado",
    valueProp: "Cada semana convierto los estrenos de una cadena de cines en campañas que venden entradas. Quiero hacer lo mismo con cada concierto.",
    headline: "Marketing digital para ocio y eventos: redes, contenido, email, web y Meta Ads.",
    eyebrow: "Marketing digital · Sevilla",
    intro:
      "Llevo casi 15 años haciendo marketing para el ocio y el entretenimiento: de una tienda a 11 franquicias de gaming por España, y hoy todo el marketing de una cadena de 11 cines. Diseño las piezas, preparo las redes, envío las newsletters, actualizo la web y lanzo las campañas en Meta. Lo hago yo, y lo mido.",
    availability: "Incorporación inmediata · Presencial o remoto",
    seeking:
      "Quiero sumarme al equipo de Green Cow Music en marketing digital: redes, contenido, email, web y campañas para que cada concierto llegue a su público. Vivo en Sevilla y puedo incorporarme de inmediato.",
    photo: "assets/img/jose-dorado.jpg",
    photoAlt: "Retrato de José Dorado",
    photoCutout: "assets/img/jose-dorado-recorte.webp",  /* retrato sin fondo para el efecto al pasar el ratón */
    email: "doradoroma@gmail.com",
    phone: "657 597 958",
    whatsapp: "34657597958",
    whatsappText: "Hola José, he visto tu portfolio y me gustaría hablar contigo.",
    linkedin: "https://www.linkedin.com/in/jose-dorado/",
    cv: "docs/CV-Jose-Dorado-2027.pdf",
    cvNote: "",
    updated: "septiembre 2026",
    version: "V16 · Green Cow Music"
  },

  /* ---------- Versión personalizada para una empresa ----------
     Si borras este bloque (o lo dejas en null), la sección desaparece. */
  company: {
    name: "Green Cow Music",
    navLabel: "Lo que aporto",
    logo: "assets/img/logo-green-cow-music.png",
    eyebrow: "Por qué Green Cow Music",
    title: "Lo que puedo aportar",
    intro:
      "Green Cow Music es la promotora sevillana de Javier Esteban, el equipo detrás de Icónica Santalucía Sevilla Fest y de Insólito. En 2026 Icónica vendió 369.192 entradas en la Plaza de España y se convirtió en el festival de música con más asistentes de España. Insólito reunió casi 40.000 personas y 14 sold outs en sus primeros siete meses. Muchas fechas, mucho contenido y un público que hay que cuidar todo el año: cuatro frentes que ya trabajo cada semana.",
    cards: [
      {
        theirs: "Cada fecha, una campaña",
        context: "De Aitana a Sting, con siete noches sin entradas, en Icónica, y 27 citas en siete meses en salas como Pandora, Cartuja Center o Sala Custom con Insólito: un calendario que no para.",
        mine: "Cada semana lanzo la cartelera de 11 cines, y tengo un flujo con Make e IA que convierte un título en un post listo para programar: más de 15 horas ahorradas a la semana. Ese método sirve igual para un artista y su fecha. Más de 25 campañas en Meta y Google con más de 10M de impresiones y menos de 5.000 €."
      },
      {
        theirs: "Redes y contenido al ritmo de la música",
        context: "Anuncios de cartel, artistas, cuentas atrás, sold outs y la crónica de cada noche: piezas gráficas y audiovisuales para Instagram, Facebook y TikTok, casi a diario.",
        mine: "Diseño las piezas en Canva y Adobe y genero imagen y vídeo con IA generativa para cada campaña. Planifico, creo y programo el contenido de una marca con 11 centros, y en Elite Gaming Center supervisé las redes de la central y de toda la red de franquicias."
      },
      {
        theirs: "Un público que vuelve, concierto tras concierto",
        context: "Casi siete de cada diez asistentes de Insólito son de Sevilla, y en Icónica el público de la provincia creció cerca de un 70 % en 2026: una comunidad local a la que escribirle bien y a tiempo.",
        mine: "Uso Brevo casi a diario: secuencias y newsletters para inauguraciones y lanzamientos, con seguimiento de aperturas y clics. Diseñé la app de Cines Artesiete y su programa de fidelización: +17 % de uso y +0,75 € de ticket medio en app. Mantengo y actualizo la web en WordPress."
      },
      {
        theirs: "Eventos de principio a fin",
        context: "Un concierto se vende antes, se vive durante y se cuenta después. Prensa, patrocinadores, marcas y redes, todos a la vez y con plazos ajustados.",
        mine: "Organicé y comuniqué la apertura del centro de alto rendimiento de Elite Gaming Center en Madrid: tres días de evento con medios, ligas y marcas y un presupuesto de 80.000–100.000 €. En Artesiete preparo notas de prensa, patrocinios con centros comerciales y acciones en sala."
      }
    ]
  },

  /* ---------- Ficha técnica (bloque lateral del inicio) ---------- */
  facts: [
    { label: "Ahora", value: "Responsable de Marketing en Cines Artesiete, cadena nacional de 11 cines" },
    { label: "Trayectoria", value: "Casi 15 años en marketing de ocio y entretenimiento" },
    { label: "Base", value: "Sevilla" },
    { label: "Disponible", value: "Inmediata · presencial o remoto" },
    { label: "Formación", value: "Máster ESIC en Dirección de Marketing y Gestión Comercial" },
    { label: "Idiomas", value: "Español · Inglés B2" }
  ],

  /* ---------- Cifras clave (solo datos reales) ---------- */
  numbers: [
    { value: "+10M", label: "Impresiones en más de 25 campañas de paid media con menos de 5.000 €: menos de 0,50 € por cada mil" },
    { value: "+15 h", label: "Semanales ahorradas automatizando el contenido de la cartelera con Make e IA" },
    { value: "+17 %", label: "De uso de la app de Cines Artesiete tras su lanzamiento, con +0,75 € de ticket medio en app" },
    { value: "1 → 11", label: "De una tienda a 11 franquicias por España con Elite Gaming Center" }
  ],

  /* ---------- Créditos: lo que cubro como departamento de una persona ---------- */
  credits: {
    intro:
      "En Cines Artesiete soy el departamento de marketing completo. Cada tarjeta es uno de los puestos que cubro, y todas llevan la misma firma.",
    signature: "J. Dorado",
    /* Cada tarjeta: role (título), text (qué hago), tools (opcional) */
    roles: [
      {
        role: "Redes sociales",
        text: "Planificación, creación y programación del contenido de la cartelera semanal de 11 cines, con el copy automatizado con Make e IA.",
        tools: ["Meta Business Suite", "Make"]
      },
      {
        role: "Diseño e IA generativa",
        text: "Piezas gráficas para redes, web, email y sala, e imagen y vídeo con IA generativa para cada campaña.",
        tools: ["Canva", "Adobe", "Claude Design", "ChatGPT", "Higgsfield"]
      },
      {
        role: "Paid media",
        text: "Más de 25 campañas con menos de 5.000 € de inversión y más de 10M de impresiones.",
        tools: ["Meta Business Suite", "Google Ads"]
      },
      {
        role: "Email marketing",
        text: "Secuencias y newsletters para inauguraciones y lanzamientos, incluido el de la app, con seguimiento de resultados.",
        tools: ["Brevo", "Mailchimp"]
      },
      {
        role: "Web",
        text: "Actualización y mantenimiento de la web corporativa y de sus contenidos.",
        tools: ["WordPress"]
      },
      {
        role: "Campañas multicanal",
        text: "Lanzamientos para inauguraciones y estrenos que combinan email, paid media y acciones offline en sala.",
        tools: []
      },
      {
        role: "Producto digital",
        text: "Diseño y lanzamiento de la app corporativa y de su programa de fidelización: +17 % de uso y +0,75 € de ticket medio en app.",
        tools: ["Figma", "Lovable", "Miro"]
      },
      {
        role: "Automatización",
        text: "Procesos de copy y newsletters automatizados con Make y APIs: más de 15 horas ahorradas a la semana.",
        tools: ["Make", "APIs"]
      },
      {
        role: "Prensa y patrocinios",
        text: "Notas de prensa, relación con medios y acuerdos de patrocinio con centros comerciales.",
        tools: []
      }
    ]
  },

  /* ---------- Trayectoria (experiencia profesional) ----------
     projects: ids de proyectos relacionados (ver lista "projects" más abajo) */
  experience: [
    {
      id: "artesiete",
      org: "Cines Artesiete",
      role: "Responsable de Marketing",
      period: "Oct 2023 — actualidad",
      context: "Único responsable de marketing de una cadena nacional de 11 cines.",
      bullets: [
        "Redes sociales: planificación, creación y programación del contenido de la cartelera semanal, con copy automatizado con Make e IA.",
        "Más de 25 campañas de paid media en Meta y Google con menos de 5.000 € de inversión y más de 10M de impresiones.",
        "Email marketing con Brevo y Mailchimp: newsletters y secuencias para inauguraciones y lanzamientos.",
        "Diseño gráfico en Canva y Adobe, e imagen y vídeo con IA generativa para las campañas.",
        "Actualización y mantenimiento de la web en WordPress.",
        "Diseño y lanzamiento de la app corporativa y de su programa de fidelización: +17 % de uso y +0,75 € de ticket medio en app.",
        "Campañas multicanal para inauguraciones y estrenos: email, paid media y acciones en sala; notas de prensa y patrocinios."
      ],
      tools: ["Meta Business Suite", "Google Ads", "Make", "Canva", "Adobe", "WordPress", "Zoho CRM"],
      projects: ["app-artesiete", "paid-artesiete", "automatizacion", "margenes"]
    },
    {
      id: "freelance",
      org: "Freelance · Roma Gold Marketing",
      role: "Marketing y Comunicación",
      period: "2020 — 2023",
      context: "Marketing y comunicación para distintos clientes, entre ellos Delem Ocio S.L. (como CMO) y GBEST Gaming Formula.",
      bullets: [
        "Redes sociales, SEO/SEM y email marketing para impulsar la visibilidad de cada cliente.",
        "Contenido de marca y relación con medios."
      ],
      tools: [],
      projects: []
    },
    {
      id: "egc",
      org: "Elite Gaming Center",
      role: "CMO · Dirección de Marketing y Comunicación",
      period: "2014 — 2020",
      context: "Progresión interna: Técnico de Marketing → COO / Project Manager → CMO.",
      highlight: "Hito: de 15.000 € al año a 2,1M€, y de una tienda a 11 franquicias por España.",
      bullets: [
        "Organización y comunicación de la apertura del centro de alto rendimiento de Madrid: tres días de evento con medios, ligas y marcas y un presupuesto de 80.000–100.000 €.",
        "Plan estratégico de marketing (posicionamiento, precios y mensajes) junto a producto y ventas.",
        "Liderazgo de equipos de hasta 50 personas.",
        "Storytelling de marca y comunicación interna; supervisión de redes sociales de central y franquicias.",
        "Portavoz ante medios y gestión de crisis.",
        "Vigilancia de tendencias de marketing digital y offline."
      ],
      tools: [],
      projects: ["egc-escalado", "margenes"]
    }
  ],

  /* ---------- Proyectos ----------
     type: "Proyecto profesional" | "Proyecto personal" | "Proyecto académico"
     featured: true = formato grande con imagen; false = tarjeta compacta
     image: ruta en assets/img/ o un placeholder [IMAGEN: ...]
     fit: "cover" para fotos, "contain" para capturas de pantalla */
  projects: [
    {
      id: "paid-artesiete",
      featured: true,
      type: "Proyecto profesional",
      client: "Cines Artesiete",
      experience: "artesiete",
      year: "2023 — actualidad",
      title: "Paid media con presupuesto contenido",
      summary:
        "Más de 25 campañas en Meta y Google para una cadena de 11 cines, con menos de 5.000 € de inversión.",
      role: "Planificación, creatividad y gestión de las campañas.",
      did: [
        "Campañas para inauguraciones, lanzamientos de producto y el lanzamiento de la app.",
        "Coordinación con email y acciones en sala dentro de campañas multicanal."
      ],
      tools: ["Meta Business Suite", "Google Ads", "Canva", "Adobe"],
      result: "Más de 10M de impresiones con menos de 5.000 € de inversión: menos de 0,50 € por cada mil impresiones.",
      image: "assets/img/paid-sorteo.webp",
      imageAlt: "Creatividad de sorteo: 2 entradas de cine, ramo de rosas y foto profesional, con la colaboración de El Galeón flores y plantas",
      caption: "Creatividad de sorteo en colaboración con El Galeón flores y plantas.",
      ratio: "1 / 1",
      fit: "cover",
      links: []
    },
    {
      id: "automatizacion",
      featured: true,
      type: "Proyecto profesional",
      client: "Cines Artesiete",
      experience: "artesiete",
      year: "En uso",
      title: "Del título al post, en automático",
      summary:
        "Un escenario de Make que convierte el título de una película en una publicación de redes lista y programada. Basta con escribirlo en Google Sheets.",
      role: "Diseño y construcción del flujo completo.",
      /* flow: pasos del proceso. Se muestran como diagrama en lugar de imagen */
      flow: [
        { step: "Google Sheets", text: "Escribo el título de la película" },
        { step: "ICAA", text: "Comprueba la calificación por edades" },
        { step: "FilmAffinity", text: "Localiza la ficha y extrae la sinopsis" },
        { step: "Agente de IA", text: "Identifica el género y redacta el copy con el ángulo y el tono de ese género" },
        { step: "Hashtags", text: "Selecciona los hashtags adecuados" },
        { step: "Programación", text: "Deja la publicación programada" }
      ],
      did: [
        "Disparador en Google Sheets: una fila nueva con el título arranca todo el escenario.",
        "Consulta de la calificación por edades en el catálogo del ICAA.",
        "Búsqueda de la película en FilmAffinity y extracción de la sinopsis.",
        "Agente de IA que clasifica el género y adapta ángulo y tono del copy a cada uno.",
        "Búsqueda de hashtags y programación automática de la publicación.",
        "Formación interna en Make con APIs y CRM a partir de este tipo de flujos."
      ],
      tools: ["Make", "Google Sheets", "ICAA", "FilmAffinity", "IA generativa"],
      result: "Más de 15 horas ahorradas a la semana: una tarea que podía llevar horas por película ahora se completa al instante, solo con escribir el título.",
      image: "",
      links: []
    },
    {
      id: "app-artesiete",
      featured: true,
      type: "Proyecto profesional",
      client: "Cines Artesiete",
      experience: "artesiete",
      year: "2026",
      title: "App corporativa y programa de fidelización",
      summary:
        "La app de la cadena y un programa de puntos propio, pensados y lanzados por mí: del flujo de usuario a la campaña de descargas.",
      role: "Diseño del producto y de su lanzamiento, de principio a fin.",
      did: [
        "Userflow, UX, arquitectura y diseño frontend de la app.",
        "Programa de fidelización en tres niveles (Base, Fan y Cinéfilo) con el claim «Acumula, disfruta, repite».",
        "Benchmark de programas de referencia, como IKEA Family y Harkins Theatres.",
        "Campaña de lanzamiento: secuencias de email, creatividades de paid media, sorteo de un iPhone y acciones offline en las salas.",
        "Planificación completa del lanzamiento con diagrama de Gantt y presentación de las mecánicas a dirección."
      ],
      tools: ["Figma", "Lovable", "Miro"],
      result: "+17 % de uso de la app y +0,75 € de ticket medio en las compras hechas desde la app.",
      /* compare: dos imágenes lado a lado (antes / después) */
      compare: [
        { label: "Antes", src: "assets/img/app-antes.webp", alt: "App anterior de Cines Artesiete: cartelera en lista sobre fondo blanco", fit: "cover", position: "top" },
        { label: "Ahora", src: "assets/img/app-ahora.webp", alt: "Nueva app de Cines Artesiete: menús del ambigú y cartelera con promoción de la Fiesta del Cine", fit: "contain" }
      ],
      image: "",
      links: []
    },
    {
      id: "egc-escalado",
      featured: true,
      type: "Proyecto profesional",
      client: "Elite Gaming Center",
      experience: "egc",
      year: "2014 — 2020",
      title: "De una tienda a 11 franquicias",
      summary:
        "El marketing detrás de la expansión de Elite Gaming Center por España, desde el primer local hasta la red de franquicias.",
      role: "Técnico de Marketing, después COO / Project Manager y finalmente CMO.",
      did: [
        "Plan estratégico de marketing con producto y ventas: posicionamiento, precios y mensajes.",
        "Storytelling de marca y comunicación interna para central y franquicias.",
        "Supervisión de las redes sociales de toda la red.",
        "Portavoz ante medios y gestión de crisis.",
        "Liderazgo de equipos de hasta 50 personas."
      ],
      tools: [],
      result: "De 15.000 € al año a 2,1M€ de facturación, y de una tienda a 11 franquicias.",
      image: "assets/img/elite-gaming-center.webp",
      imageAlt: "Puesto de juego de Elite Gaming Center con silla y monitor de la marca en un evento",
      caption: "Presencia de marca de Elite Gaming Center en evento.",
      ratio: "4 / 3",
      fit: "cover",
      links: []
    },
    {
      id: "linkedin",
      featured: false,
      type: "Proyecto personal",
      client: "LinkedIn",
      year: "2026",
      title: "Análisis de marca, cada viernes",
      summary:
        "Cada viernes publico en LinkedIn el análisis de un caso de marca de actualidad: qué ha hecho la marca, por qué funciona y cómo se aterriza en los puntos de contacto reales con el cliente.",
      did: [
        "Selección de un caso de la actualidad del sector, con Reason Why como fuente principal.",
        "Lectura en dos capas: la campaña en sí y la estrategia de marca que hay detrás.",
        "Tesis propia conectada con canales concretos: taquilla, email, app y experiencia en sala.",
        "Cierre con una pregunta abierta para generar conversación con otros profesionales.",
        "Casos analizados como el «House of Brands» de PepsiCo o el rebranding de MAPFRE."
      ],
      tools: [],
      result: "El post sobre PepsiCo (septiembre 2026) superó las 2.200 impresiones.",
      links: [{ label: "Ver perfil", url: "https://www.linkedin.com/in/jose-dorado/" }]
    },
    {
      id: "margenes",
      featured: false,
      type: "Proyecto profesional",
      client: "Cines Artesiete · Elite Gaming Center",
      experience: "artesiete",
      year: "2014 — 2020 · 2023 — actualidad",
      title: "Análisis ABC de márgenes de producto",
      summary:
        "Análisis continuo de la rentabilidad del surtido durante toda mi etapa en Elite Gaming Center y en Cines Artesiete, donde cubre la barra de los 11 cines. Una clasificación ABC separa los productos que sostienen el margen de los que lo lastran.",
      did: [
        "Seguimiento continuo durante toda mi etapa en ambas empresas, no como un estudio puntual.",
        "Cálculo por referencia de coste unitario, PVP, margen bruto y markup, diferenciando margen sobre venta y recargo sobre coste.",
        "Clasificación ABC (principio de Pareto) según la contribución de cada producto al margen bruto total.",
        "Categoría A: referencias que concentran la mayor parte del margen. B: contribución intermedia. C: aportación residual.",
        "Comparativa entre salas para detectar diferencias de rendimiento del mismo producto."
      ],
      tools: ["Análisis ABC", "Margen bruto", "Markup"],
      result: "Identificamos qué productos eran los más rentables y cuáles no, como base para decisiones de surtido y precio.",
      links: []
    }
  ],

  /* ---------- Formación y certificaciones ----------
     kind: "Formación" | "Certificación" */
  education: [
    { kind: "Formación", title: "Máster en Dirección de Marketing y Gestión Comercial (GESCO)", school: "ESIC", period: "2024 — 2025" },
    { kind: "Formación", title: "Business & Marketing Expert", school: "thePowerMBA", period: "2021" },
    { kind: "Formación", title: "Full Stack Web Development", school: "Ironhack", period: "2020 — 2021" },
    { kind: "Formación", title: "Marketing Digital y Diseño Gráfico", school: "CEI", period: "2019 — 2020" },
    { kind: "Formación", title: "CFGS Gestión Comercial y Marketing", school: "IES Miguel de Cervantes", period: "2010 — 2011" }
  ],

  /* ---------- Competencias y herramientas ---------- */
  skills: [
    { group: "Marketing digital", items: ["Gestión de redes sociales", "Creación de contenido", "Paid media en Meta y Google", "Email marketing", "SEO/SEM"] },
    { group: "Diseño y web", items: ["Diseño gráfico", "Imagen y vídeo con IA generativa", "WordPress", "UX y diseño de app"] },
    { group: "Eventos y comunicación", items: ["Lanzamientos e inauguraciones", "Notas de prensa", "Patrocinios", "Campañas multicanal"] },
    { group: "Datos y automatización", items: ["Métricas y KPIs", "Automatización con Make y APIs", "Programas de fidelización"] }
  ],
  tools: ["Meta Business Suite", "Google Ads", "Canva", "Adobe", "WordPress", "Brevo", "Mailchimp", "Make", "Claude", "ChatGPT"]
};
