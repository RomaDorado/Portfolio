/* =====================================================================
   ANALÍTICA — Microsoft Clarity + aviso de cookies
   ---------------------------------------------------------------------
   - Clarity se carga siempre, pero sin cookies hasta que el visitante acepta.
   - Al aceptar o rechazar se envía la señal de consentimiento que exige
     Microsoft para visitantes de Europa, y la elección se recuerda.
   - Cada versión se etiqueta con su nombre ("version" en content.js) para
     poder filtrar las visitas por empresa en el panel de Clarity.
   ===================================================================== */
(function () {
  "use strict";
  var CLARITY_ID = "yqcgate0ss";
  var KEY = "jd-cookies";

  /* Código oficial de Clarity */
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID);

  var P = (window.PORTFOLIO && window.PORTFOLIO.person) || {};
  window.clarity("set", "version", P.version || "V1 · General");

  function consent(ok) {
    var v = ok ? "granted" : "denied";
    window.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: v });
  }
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* sin almacenamiento: se volverá a preguntar */ } }

  /* Eventos: qué pasos da cada visitante (filtrables en Clarity → Smart events / Filtros) */
  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("a, button.copy");
    if (!el) return;
    var h = el.getAttribute("href") || "", ev = null;
    if (/\.pdf$/i.test(h) || /docs\//.test(h)) ev = "cv_download";
    else if (/linkedin\.com/.test(h)) ev = "linkedin_click";
    else if (/wa\.me\//.test(h)) ev = "whatsapp_click";
    else if (/^mailto:/.test(h)) ev = "email_click";
    else if (/^tel:/.test(h)) ev = "phone_click";
    else if (el.classList.contains("copy")) ev = /@/.test(el.getAttribute("data-copy") || "") ? "email_copy" : "phone_copy";
    else if (/^#p-|^#x-/.test(h)) ev = "case_open";
    if (ev) { try { window.clarity("event", ev); } catch (err) {} }
  });

  var saved = read();
  if (saved === "yes") { consent(true); return; }
  if (saved === "no") { consent(false); return; }
  consent(false); // hasta que decida, sin cookies

  function banner() {
    var box = document.createElement("div");
    box.className = "cookie-box";
    box.setAttribute("role", "region");
    box.setAttribute("aria-label", "Aviso de cookies");
    box.innerHTML =
      '<p><b>¿Me ayudas a mejorar esta web?</b> Uso Microsoft Clarity para ver, de forma anónima, cómo se recorre la página. ' +
      'Solo guarda cookies de analítica si aceptas. <a href="https://privacy.microsoft.com/es-es/privacystatement" target="_blank" rel="noopener">Más información</a></p>' +
      '<div class="cookie-actions"><button type="button" class="btn btn-ghost" data-c="no">Rechazar</button>' +
      '<button type="button" class="btn btn-primary" data-c="yes">Aceptar</button></div>';
    document.body.appendChild(box);
    box.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("button[data-c]");
      if (!b) return;
      var yes = b.getAttribute("data-c") === "yes";
      consent(yes); save(yes ? "yes" : "no");
      box.parentNode.removeChild(box);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", banner); else banner();
})();
