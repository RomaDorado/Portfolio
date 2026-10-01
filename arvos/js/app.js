/* Render del portfolio a partir de window.PORTFOLIO (js/content.js).
   No hace falta tocar este archivo para actualizar contenido. */
(function () {
  "use strict";
  var D = window.PORTFOLIO;
  if (!D) return;

  var PH = /\[(?:AGREGAR|IMAGEN)[^\]]*\]/g;
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function isPh(s) { PH.lastIndex = 0; return typeof s === "string" && PH.test(s); }
  function has(s) { return typeof s === "string" && s.trim() !== ""; }
  function real(s) { return has(s) && !isPh(s); }
  /* Texto con placeholders convertidos en avisos visibles */
  function rich(s) {
    return esc(s).replace(/\[(?:AGREGAR|IMAGEN)[^\]]*\]/g, function (m) { return '<span class="ph">' + m + "</span>"; });
  }
  /* "15k€ → 2,1M€": la flecha va en color de acento */
  function numFmt(s) { return esc(s).replace("→", '<span class="arrow" aria-hidden="true">→</span><span class="sr">a</span>'); }
  function $(sel) { return document.querySelector(sel); }
  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function chips(items) {
    items = (items || []).filter(has);
    if (!items.length) return "";
    return '<ul class="chips">' + items.map(function (t) { return '<li class="' + (isPh(t) ? "" : "chip") + '">' + rich(t) + "</li>"; }).join("") + "</ul>";
  }
  function bullets(items) {
    items = (items || []).filter(has);
    if (!items.length) return "";
    return '<ul class="bullets">' + items.map(function (t) { return "<li>" + rich(t) + "</li>"; }).join("") + "</ul>";
  }
  function media(src, alt, fit) {
    if (!has(src)) return "";
    if (isPh(src)) return '<div class="ph-media" role="img" aria-label="' + esc(alt || "Imagen pendiente") + '">' + esc(src) + "</div>";
    return '<img src="' + esc(src) + '" alt="' + esc(alt || "") + '" class="fit-' + (fit === "contain" ? "contain" : "cover") + '" loading="lazy" decoding="async" width="1600" height="1000">';
  }
  function typeTag(t) {
    var personal = /personal|acad/i.test(t);
    return '<span class="type' + (personal ? " personal" : "") + '">' + esc(t) + "</span>";
  }

  var P = D.person;

  /* ---------- Cabecera ---------- */
  var headCv = $("#head-cv");
  if (headCv) { headCv.setAttribute("href", P.cv); headCv.setAttribute("download", ""); headCv.setAttribute("aria-label", "Descargar CV en PDF"); }

  /* Retrato: al pasar el ratón hace zoom y el fondo se funde con el color de la marca */
  function portrait() {
    if (!real(P.photoCutout) || !real(P.photo)) return media(P.photo, P.photoAlt, "cover");
    return '<div class="portrait"><div class="p-frame"><img class="p-orig" src="' + esc(P.photo) + '" alt="' + esc(P.photoAlt) + '" decoding="async"></div>' +
      '<img class="p-cut" src="' + esc(P.photoCutout) + '" alt="" aria-hidden="true" decoding="async"></div>';
  }

  /* ---------- Hero ---------- */
  var names = P.name.split(" ");
  var linkedinBtn = real(P.linkedin)
    ? '<a class="btn btn-ghost" href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">LinkedIn <span class="arr" aria-hidden="true">↗</span></a>'
    : "";
  $("#inicio").innerHTML =
    '<div class="wrap">' +
      '<div class="hero-grid">' +
        "<div>" +
          '<p class="label eyebrow">' + esc(P.eyebrow) + "</p>" +
          '<h1 id="hero-title">' + esc(names[0]) + "<br>" + esc(names.slice(1).join(" ")) + "</h1>" +
          (has(P.valueProp) ? '<p class="value">' + rich(P.valueProp) + "</p>" : "") +
          '<p class="headline">' + rich(P.headline) + "</p>" +
          '<p class="intro">' + rich(P.intro) + "</p>" +
          '<p class="seeking"><span class="label">Qué busco</span>' + rich(P.seeking) + "</p>" +
          '<div class="btn-row">' +
            '<a class="btn btn-primary" href="' + esc(P.cv) + '" download>Descargar CV <span class="arr" aria-hidden="true">↓</span></a>' +
            linkedinBtn +
            '<a class="btn btn-ghost" href="#contacto">Contactar <span class="arr" aria-hidden="true">→</span></a>' +
          "</div>" +
          (has(P.cvNote) ? '<p class="cv-note">' + rich(P.cvNote) + "</p>" : "") +
          (!real(P.linkedin) ? '<p class="cv-note">' + rich(P.linkedin) + "</p>" : "") +
        "</div>" +
        '<aside class="sheet" aria-label="Ficha técnica">' +
          '<div class="sheet-head"><span class="label">Ficha técnica</span><span class="label num">' + esc(P.updated) + "</span></div>" +
          '<div class="sheet-photo">' + portrait() +
            '<div><p class="who">' + esc(P.name) + '</p><p class="who-sub">Marketing y comunicación corporativa</p></div></div>' +
          "<dl>" + D.facts.map(function (f) {
            return '<div class="row"><dt class="label">' + esc(f.label) + "</dt><dd>" + rich(f.value) + "</dd></div>";
          }).join("") + "</dl>" +
        "</aside>" +
      "</div>" +
      '<ul class="numbers" aria-label="Cifras clave">' + D.numbers.map(function (n) {
        return '<li><div class="n">' + numFmt(n.value) + "</div><p>" + rich(n.label) + "</p></li>";
      }).join("") + "</ul>" +
    "</div>";

  /* ---------- Sección personalizada por empresa ---------- */
  var CO = D.company;
  var coSec = document.getElementById("empresa");
  if (CO && coSec) {
    coSec.innerHTML =
      '<div class="wrap">' +
        '<div class="section-head"><div><span class="label">' + esc(CO.eyebrow) + '</span><h2 id="co-title">' + esc(CO.title) + "</h2></div>" +
          "<p>" + rich(CO.intro) + "</p></div>" +
        '<ol class="fit">' + CO.cards.map(function (c) {
          return '<li class="fit-card"><div class="fit-theirs"><span class="label">En ' + esc(CO.name) + "</span><h3>" + esc(c.theirs) + "</h3><p>" + rich(c.context) + "</p></div>" +
            '<div class="fit-mine"><span class="label">Lo que aporto</span><p>' + rich(c.mine) + "</p></div></li>";
        }).join("") + "</ol>" +
      "</div>";
    var ul = document.querySelector(".nav ul");
    if (ul) { var li = document.createElement("li"); li.innerHTML = '<a href="#empresa">' + esc(CO.navLabel || CO.name) + "</a>"; ul.insertBefore(li, ul.firstChild); }
  } else if (coSec) { coSec.parentNode.removeChild(coSec); }

  /* ---------- Créditos ---------- */
  var C = D.credits;
  $("#creditos").innerHTML =
    '<div class="wrap">' +
      '<div class="credits-head"><span class="label">Qué hago · Cines Artesiete</span>' +
        '<h2 id="credits-title">Créditos</h2><p>' + rich(C.intro) + "</p></div>" +
      '<ul class="credit-cards">' + C.roles.map(function (r) {
        if (typeof r === "string") r = { role: r, text: "" };
        var t = (r.tools || []).filter(has);
        return '<li class="credit-card"><h3>' + esc(r.role) + "</h3>" +
          (has(r.text) ? "<p>" + rich(r.text) + "</p>" : "") +
          (t.length ? '<ul class="credit-tools">' + t.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul>" : "") +
          '<p class="sig"><span class="label">Firma</span><span class="name">' + esc(C.signature) + "</span></p></li>";
      }).join("") + "</ul>" +
      '<p class="roll-end">Un departamento · una persona</p>' +
    "</div>";

  /* ---------- Trayectoria ---------- */
  $("#trayectoria").innerHTML =
    '<div class="wrap">' +
      '<div class="section-head"><div><span class="label">Experiencia profesional</span><h2 id="exp-title">Trayectoria</h2></div>' +
        "<p>De técnico de marketing a CMO, y hoy al frente del marketing de una cadena de cines. Cada etapa enlaza con los proyectos que la explican.</p></div>" +
      '<ol class="timeline">' + D.experience.map(function (x) {
        var rel = (x.projects || []).map(function (id) { return byId(D.projects, id); }).filter(Boolean);
        return '<li class="job' + (x.compact ? " compact" : "") + '" id="x-' + esc(x.id) + '">' +
          '<div class="job-meta"><p class="period">' + esc(x.period) + "</p><h3>" + esc(x.org) + '</h3><p class="role">' + esc(x.role) + "</p></div>" +
          '<div class="job-body">' +
            (has(x.context) ? '<p class="context">' + rich(x.context) + "</p>" : "") +
            (has(x.highlight) ? '<p class="hl">' + rich(x.highlight) + "</p>" : "") +
            bullets(x.bullets) + chips(x.tools) +
            (rel.length ? '<div class="job-links"><span class="label">Proyectos de esta etapa</span>' + rel.map(function (p) {
              return '<a class="link" href="#p-' + esc(p.id) + '">' + esc(p.title) + "</a>";
            }).join("") + "</div>" : "") +
          "</div></li>";
      }).join("") + "</ol>" +
    "</div>";

  /* ---------- Proyectos ---------- */
  function backlink(p) {
    var x = p.experience && byId(D.experience, p.experience);
    return x ? '<p class="backlink">Parte de mi etapa en <a class="link" href="#x-' + esc(x.id) + '">' + esc(x.org) + "</a></p>" : "";
  }
  function links(p) {
    return (p.links || []).map(function (l) {
      return real(l.url) ? '<a class="link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " ↗</a>" : rich(l.url);
    }).join(" ");
  }
  var featured = D.projects.filter(function (p) { return p.featured; });
  var minor = D.projects.filter(function (p) { return !p.featured; });

  $("#proyectos").innerHTML =
    '<div class="wrap">' +
      '<div class="section-head"><div><span class="label">Portfolio</span><h2 id="proj-title">Proyectos</h2></div>' +
        "<p>Tres casos en detalle y otros trabajos en formato breve. Cada uno indica qué tipo de proyecto es, mi papel y el resultado.</p></div>" +
      '<div class="projects">' + featured.map(function (p) {
        var tools = (p.tools || []).filter(has);
        return '<article class="case" id="p-' + esc(p.id) + '" aria-labelledby="t-' + esc(p.id) + '">' +
          (p.compare && p.compare.length === 2
            ? (function () {
                var a = p.compare[0], b = p.compare[1];
                function img(c, cls) {
                  return '<img class="' + cls + '" src="' + esc(c.src) + '" alt="' + esc(c.alt || "") + '" decoding="async" style="object-fit:' +
                    (c.fit === "cover" ? "cover" : "contain") + ";object-position:" + (c.position === "top" ? "50% 0" : "50% 50%") + '">';
                }
                return '<figure class="slider" style="--pos:50%">' +
                  '<div class="slider-stage">' + img(b, "slider-after") +
                    '<div class="slider-before">' + img(a, "") + "</div>" +
                    '<span class="slider-tag left">' + esc(a.label) + '</span><span class="slider-tag right">' + esc(b.label) + "</span>" +
                    '<span class="slider-handle" aria-hidden="true"><span>‹ ›</span></span>' +
                    '<input class="slider-range" id="cmp-' + esc(p.id) + '" type="range" min="0" max="100" value="50" aria-label="Comparar ' + esc(a.label.toLowerCase()) + " y " + esc(b.label.toLowerCase()) + '">' +
                  "</div>" +
                  '<figcaption class="label">Arrastra para comparar ' + esc(a.label.toLowerCase()) + " y " + esc(b.label.toLowerCase()) + "</figcaption></figure>";
              })()
            : p.flow && p.flow.length && !real(p.image)
            ? '<figure class="flow-fig" aria-label="Flujo del proceso"><ol class="flow">' + p.flow.map(function (f) {
                return '<li><span class="flow-step">' + esc(f.step) + '</span><span class="flow-text">' + rich(f.text) + "</span></li>";
              }).join("") + "</ol></figure>"
            : "<figure" + (p.ratio ? ' style="--ratio:' + esc(p.ratio) + '"' : "") + ">" + media(p.image, p.imageAlt, p.fit) +
              (has(p.caption) ? '<figcaption class="label">' + rich(p.caption) + "</figcaption>" : "") + "</figure>") +
          "<div>" +
            '<div class="meta-line">' + typeTag(p.type) + '<span class="label num">' + esc(p.client) + " · " + rich(p.year) + "</span></div>" +
            '<h3 id="t-' + esc(p.id) + '">' + esc(p.title) + "</h3>" +
            (has(p.result) ? '<p class="case-result"><span class="label">Resultado</span>' + rich(p.result) + "</p>" : "") +
            '<p class="summary">' + rich(p.summary) + "</p>" +
            '<dl class="facts">' +
              (has(p.role) ? '<div class="row"><dt class="label">Mi rol</dt><dd>' + rich(p.role) + "</dd></div>" : "") +
            "</dl>" +
            ((p.did && p.did.length) || tools.length ?
              '<details class="more"><summary>Qué hice <span class="pm" aria-hidden="true">+</span></summary><div class="inner">' +
                bullets(p.did) + chips(tools) + (links(p) ? '<p class="backlink">' + links(p) + "</p>" : "") +
              "</div></details>" : "") +
            backlink(p) +
          "</div></article>";
      }).join("") + "</div>" +
      (minor.length ?
        '<div class="minor-head"><h3>Otros trabajos</h3><span class="label">' + minor.length + " proyectos</span></div>" +
        '<div class="cards">' + minor.map(function (p) {
          var tools = (p.tools || []).filter(has);
          var hasMore = (p.did && p.did.length) || tools.length || links(p);
          return '<article class="card" id="p-' + esc(p.id) + '">' +
            '<div class="meta-line">' + typeTag(p.type) + '<span class="label num">' + rich(p.year) + "</span></div>" +
            "<h4>" + esc(p.title) + "</h4>" +
            '<p class="summary">' + rich(p.summary) + "</p>" +
            (has(p.result) ? '<p class="result"><span class="label">Resultado</span>' + rich(p.result) + "</p>" : "") +
            (hasMore ? '<details class="more"><summary>Detalles <span class="pm" aria-hidden="true">+</span></summary><div class="inner">' +
              bullets(p.did) + chips(tools) + (links(p) ? '<p class="backlink">' + links(p) + "</p>" : "") + "</div></details>" : "") +
          "</article>";
        }).join("") + "</div>" : "") +
    "</div>";

  /* ---------- Formación ---------- */
  $("#formacion").innerHTML =
    '<div class="wrap">' +
      '<div class="section-head"><div><span class="label">Formación y competencias</span><h2 id="edu-title">Formación</h2></div>' +
        "<p>Un máster en dirección de marketing, formación en negocio y desarrollo web, y las herramientas que uso a diario.</p></div>" +
      '<div class="edu-grid">' +
        '<ul class="edu">' + D.education.map(function (e) {
          return '<li><span class="period">' + rich(e.period) + '</span><div><p class="t">' + esc(e.title) +
            (e.kind === "Certificación" ? '<span class="kind">Certificación</span>' : "") + '</p><p class="s">' + esc(e.school) + "</p></div></li>";
        }).join("") + "</ul>" +
        '<div class="skills">' + D.skills.map(function (g) {
          return "<div><h3>" + esc(g.group) + "</h3>" + chips(g.items) + "</div>";
        }).join("") +
          '<div class="tools-block"><h3>Herramientas</h3>' + chips(D.tools) + "</div>" +
        "</div>" +
      "</div>" +
    "</div>";

  /* ---------- Contacto ---------- */
  function channel(label, valueHtml, copyText) {
    return '<div class="channel"><span class="label">' + label + '</span><span class="v">' + valueHtml + "</span>" +
      (copyText ? '<button type="button" class="copy" data-copy="' + esc(copyText) + '">Copiar</button>' : "<span></span>") + "</div>";
  }
  $("#contacto").innerHTML =
    '<div class="wrap contact-grid">' +
      "<div>" +
        '<span class="label">Contacto</span><h2 id="contact-title">Hablemos</h2>' +
        '<p class="lead">' + rich(P.seeking) + "</p>" +
      "</div>" +
      '<div class="channels">' +
        channel("Email", '<a class="link" href="mailto:' + esc(P.email) + '">' + esc(P.email) + "</a>", P.email) +
        channel("Teléfono", '<a class="link num" href="tel:+34' + esc(P.phone.replace(/\s/g, "")) + '">' + esc(P.phone) + "</a>", P.phone) +
        channel("LinkedIn", real(P.linkedin) ? '<a class="link" href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">Ver perfil ↗</a>' : rich(P.linkedin), "") +
        channel("CV", '<a class="link" href="' + esc(P.cv) + '" download>Descargar PDF ↓</a>', "") +
      "</div>" +
    "</div>";

  /* Barra de contacto fija en móvil */
  var bar = document.createElement("nav");
  bar.className = "mobile-bar"; bar.setAttribute("aria-label", "Contacto rápido");
  bar.innerHTML =
    '<a href="tel:+34' + esc(P.phone.replace(/\s/g, "")) + '"><span aria-hidden="true">☎</span> Llamar</a>' +
    '<a href="mailto:' + esc(P.email) + '"><span aria-hidden="true">✉</span> Email</a>' +
    '<a href="' + esc(P.cv) + '" download><span aria-hidden="true">↓</span> CV</a>';
  document.body.appendChild(bar);

  $("#foot").innerHTML = "<span>© " + new Date().getFullYear() + " " + esc(P.name) + " · Actualizado en " + esc(P.updated) + '</span><a class="link" href="#inicio">Volver arriba ↑</a>';

  /* ---------- Interacciones ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Copiar email / teléfono: feedback en el propio botón
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("button.copy");
    if (!b) return;
    var text = b.getAttribute("data-copy");
    function done(ok) {
      b.textContent = ok ? "Copiado" : "Selecciona";
      setTimeout(function () { b.textContent = "Copiar"; }, 1800);
      if (!ok) {
        var v = b.parentNode.querySelector(".v");
        var r = document.createRange(); r.selectNodeContents(v);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      }
    }
    try { navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); }); }
    catch (err) { done(false); }
  });

  // Enlaces trayectoria <-> proyecto: abre el detalle y señala el destino
  function reveal(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var d = el.querySelector("details.more");
    if (d) d.open = true;
    if (!reduce) { el.classList.remove("target-flash"); void el.offsetWidth; el.classList.add("target-flash"); }
  }
  window.addEventListener("hashchange", function () { reveal(location.hash.slice(1)); });
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#p-"], a[href^="#x-"]');
    if (a) reveal(a.getAttribute("href").slice(1));
  });
  if (location.hash) reveal(location.hash.slice(1));

  // Comparador antes / ahora: la barra mueve el recorte
  Array.prototype.forEach.call(document.querySelectorAll(".slider"), function (fig) {
    var r = fig.querySelector(".slider-range");
    function set() { fig.style.setProperty("--pos", r.value + "%"); }
    r.addEventListener("input", set); set();
  });

  // Efectos de scroll: solo si el navegador los soporta y el visitante no pide menos movimiento
  if ("IntersectionObserver" in window && !reduce) {
    // Flujo de automatización: cada paso se enciende al llegar a él
    var steps = document.querySelectorAll(".flow li");
    if (steps.length) {
      document.documentElement.classList.add("fx-flow");
      var ioF = new IntersectionObserver(function (en) {
        en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("lit"); ioF.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -35% 0px" });
      Array.prototype.forEach.call(steps, function (li) { ioF.observe(li); });
    }
    // Créditos: las tarjetas suben escalonadas, como un rodillo de créditos
    var cards = document.querySelectorAll(".credit-card");
    var wrap = document.querySelector(".credit-cards");
    if (wrap && wrap.getBoundingClientRect().top > window.innerHeight) {
      document.documentElement.classList.add("fx-credits");
      Array.prototype.forEach.call(cards, function (c, i) { c.style.transitionDelay = (i % 3) * 90 + Math.floor(i / 3) * 140 + "ms"; });
      var ioC = new IntersectionObserver(function (en) {
        en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); ioC.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px" });
      Array.prototype.forEach.call(cards, function (c) { ioC.observe(c); });
    }
  }

  // Navegación: marca la sección visible
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) {
          if (a.getAttribute("href") === "#" + en.target.id) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    navLinks.forEach(function (a) { var s = document.querySelector(a.getAttribute("href")); if (s) io.observe(s); });
  }
})();
