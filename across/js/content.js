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
    valueProp: "Llevo la estrategia a la ejecución: contenido, datos, automatización e IA para que un equipo pequeño rinda como uno grande.",
    headline: "Comunicación corporativa, contenido y marketing digital con IA y automatización.",
    eyebrow: "Comunicación y marketing digital · Sevilla",
    intro:
      "Llevo casi 15 años construyendo marcas y contando su crecimiento: de una tienda a 11 franquicias por España, y hoy la comunicación completa de una cadena de nueve cines. Ordeno mensajes, canales y equipos cuando una organización suma sedes y marcas.",
    availability: "Disponible en 15 días · Presencial o remoto",
    seeking:
      "Quiero sumarme a ACROSS desde su lanzamiento y poner mi ejecución digital al servicio de su red. Puedo incorporarme en 15 días.",
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
    updated: "octubre 2026",
    version: "V10 · ACROSS"
  },

  /* ---------- Versión personalizada para una empresa ----------
     Si borras este bloque (o lo dejas en null), la sección desaparece. */
  company: {
    name: "ACROSS",
    navLabel: "Para ACROSS",
    logo: "assets/img/logo-across.png",
    eyebrow: "Por qué ACROSS",
    title: "Lo que puedo aportar",
    intro:
      "ACROSS es la consultora de asuntos corporativos y políticos que Ignacio Jiménez Soler acaba de fundar, tras dirigir la comunicación de Cellnex, Endesa, Telefónica y BBVA. Trabaja en red en 23 países, con un máximo de tres proyectos estratégicos a la vez, y nace con dos proyectos propios: The Positioning Room y Marcomplan. Una firma de alto rendimiento recién lanzada necesita que su propia comunicación esté a la altura desde el primer día. Ahí es donde puedo aportar.",
    cards: [
      {
        theirs: "The Positioning Room: que el análisis llegue",
        context: "Un think tank sobre ofensivas cognitivas, desinformación y acciones híbridas. Su valor depende de que cada análisis llegue a CEOs, consejeros y gobiernos en el formato y el canal adecuados.",
        mine: "Cada viernes publico en LinkedIn el análisis de un caso de marca de actualidad: tesis propia, lenguaje claro y pregunta abierta. Automatizo newsletters y contenido con Make e IA para mantener el ritmo sin perder calidad."
      },
      {
        theirs: "Marcomplan: atraer al alumno adecuado",
        context: "Un centro de formación de alto rendimiento en comunicación y liderazgo, dirigido a directivos y organizaciones que quieren protegerse de campañas de desprestigio.",
        mine: "Lanzamientos multicanal de principio a fin: secuencias de email, paid media y acción presencial. Más de 10M de impresiones con menos de 5.000 € de inversión, y formación interna en automatización."
      },
      {
        theirs: "«Hibridación entre el mundo físico y la IA»",
        context: "Así se define ACROSS: una red de especialistas que se activa por proyecto bajo una misma dirección, con inteligencia contextual y acción precisa.",
        mine: "Llevo años haciendo que un equipo pequeño rinda como uno grande: más de 15 horas semanales ahorradas con Make, APIs e IA generativa en Cines Artesiete, y una central y 11 franquicias alineadas bajo un mismo relato en Elite Gaming Center."
      }
    ]
  },


  /* ---------- Ficha técnica (bloque lateral del inicio) ---------- */
  facts: [
    { label: "Ahora", value: "Marketing y comunicación en Cines Artesiete, cadena nacional de 9 cines" },
    { label: "Trayectoria", value: "Casi 15 años en marketing" },
    { label: "Base", value: "Sevilla · remoto o presencial donde haga falta" },
    { label: "Disponible", value: "En 15 días · presencial o remoto" },
    { label: "Formación", value: "Máster ESIC en Dirección de Marketing y Gestión Comercial" },
    { label: "Idiomas", value: "Español · Inglés B2 (First Certificate)" }
  ],

  /* ---------- Cifras clave (solo datos reales) ---------- */
  numbers: [
    { value: "15k€ → 2,1M€", label: "Facturación anual de Elite Gaming Center durante mi etapa (2014–2020)" },
    { value: "1 → 11", label: "De una tienda a 11 franquicias por España" },
    { value: "+10M", label: "Impresiones en más de 25 campañas de paid media con menos de 5.000 €: menos de 0,50 € por cada mil" },
    { value: "50", label: "Personas en los equipos que llegué a liderar, entre la central y los 11 centros" }
  ],

  /* ---------- Créditos: lo que cubro como departamento de una persona ---------- */
  credits: {
    intro:
      "En Cines Artesiete soy el departamento de marketing completo. Cada tarjeta es uno de los puestos que cubro, y todas llevan la misma firma.",
    signature: "J. Dorado",
    /* Cada tarjeta: role (título), text (qué hago), tools (opcional) */
    roles: [
      {
        role: "Comunicación corporativa",
        text: "Storytelling de marca y comunicación interna: gobernanza, mensajes clave y canales internos para una cadena de nueve cines.",
        tools: []
      },
      {
        role: "Medios y patrocinios",
        text: "Notas de prensa y relación con medios, y acuerdos de patrocinio con centros comerciales.",
        tools: []
      },
      {
        role: "Paid media",
        text: "Más de 25 campañas con menos de 5.000 € de inversión y más de 10M de impresiones.",
        tools: ["Meta Business Suite", "Google Ads"]
      },
      {
        role: "Email marketing",
        text: "Secuencias y newsletters para inauguraciones y lanzamientos de producto, incluido el de la app.",
        tools: ["Brevo", "Mailchimp"]
      },
      {
        role: "Producto digital",
        text: "Diseño y lanzamiento de la app corporativa (UX, arquitectura, frontend) y de su programa de fidelización. Resultado: +17 % de uso y +0,75 € de ticket medio en app.",
        tools: ["Figma", "Lovable", "Miro"]
      },
      {
        role: "Automatización",
        text: "Procesos de copy y newsletters automatizados con Make y APIs: más de 15 horas ahorradas a la semana.",
        tools: ["Make", "APIs"]
      },
      {
        role: "Diseño e IA generativa",
        text: "Diseño gráfico y generación de imágenes y vídeo con IA generativa para las campañas.",
        tools: ["Canva", "Claude Design", "ChatGPT", "Apimart", "Higgsfield", "Adobe"]
      },
      {
        role: "Campañas multicanal",
        text: "Lanzamientos para inauguraciones y productos que combinan email, paid media y acciones offline en sala.",
        tools: []
      },
      {
        role: "Datos y formación",
        text: "Análisis de márgenes de producto en las nueve salas y formación interna en automatización con Make (APIs, CRM).",
        tools: ["Make", "Zoho CRM"]
      }
    ]
  },

  /* ---------- Trayectoria (experiencia profesional) ----------
     projects: ids de proyectos relacionados (ver lista "projects" más abajo) */
  experience: [
    {
      id: "artesiete",
      org: "Cines Artesiete",
      role: "Comunicación Corporativa y Marketing B2B",
      period: "Oct 2023 — actualidad",
      context: "Único responsable de marketing de una cadena nacional de nueve cines.",
      bullets: [
        "Storytelling de marca, comunicación interna, notas de prensa y relación con medios.",
        "Patrocinios con centros comerciales.",
        "Más de 25 campañas de paid media con menos de 5.000 € de inversión y más de 10M de impresiones.",
        "Automatización de copy y newsletters con Make y APIs; imagen y vídeo con IA generativa.",
        "Diseño y lanzamiento de la app corporativa (UX, arquitectura, frontend) y de su programa de fidelización: +17 % de uso y +0,75 € de ticket medio en app.",
        "Campañas multicanal para inauguraciones y lanzamientos: email, paid media y acciones en sala.",
        "Formación interna en automatización con Make y análisis de márgenes de producto en las nueve salas."
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
        "Storytelling de marca y comunicación interna para clientes.",
        "Relación con medios y contenido corporativo.",
        "SEO/SEM, redes sociales y email marketing."
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
      id: "paid-artesiete",
      featured: true,
      type: "Proyecto profesional",
      client: "Cines Artesiete",
      experience: "artesiete",
      year: "2023 — actualidad",
      title: "Paid media con presupuesto contenido",
      summary:
        "Más de 25 campañas en Meta y Google para una cadena de nueve cines, con menos de 5.000 € de inversión.",
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
        "Análisis continuo de la rentabilidad del surtido durante toda mi etapa en Elite Gaming Center y en Cines Artesiete, donde cubre la barra de las nueve salas. Una clasificación ABC separa los productos que sostienen el margen de los que lo lastran.",
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
    { kind: "Formación", title: "CFGS Gestión Comercial y Marketing", school: "IES Miguel de Cervantes", period: "2010 — 2011" },
    { kind: "Certificación", title: "First Certificate in English · B2", school: "Cambridge English", period: "2012" }
  ],

  /* ---------- Competencias y herramientas ---------- */
  skills: [
    { group: "Comunicación", items: ["Comunicación corporativa", "Storytelling de marca", "Relación con medios", "Comunicación interna", "Portavocía y gestión de crisis"] },
    { group: "Marketing", items: ["Plan estratégico", "Marketing B2B", "Paid media", "Email marketing", "SEO/SEM", "Programas de fidelización"] },
    { group: "Datos y negocio", items: ["Análisis de márgenes", "Precios y posicionamiento", "Planificación de lanzamientos"] },
    { group: "Producto y automatización", items: ["UX y arquitectura de app", "Desarrollo web", "Automatización con Make y APIs", "IA generativa"] }
  ],
  tools: ["Google Ads", "Meta Business Suite", "Make", "Zoho CRM", "WordPress", "Canva", "Adobe", "Claude", "ChatGPT"]
};
