---
icon: fontawesome/solid/wand-magic-sparkles
---
# Увидимся - поговорим


  {% extends "base.html" %}


    <script type="text/javascript">
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "30min", {origin:"https://cal.com"});


      // Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
      // `data-cal-link="mackaroff/30min"`
      // data-cal-namespace="30min"
      // `data-cal-config='{"layout":"month_view","theme":"dark"}'`

      Cal.ns["30min"]("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"week_view"});
      </script>


  {% endblock %}

  {{ super() }}



[Telegram  :fontawesome-brands-telegram:](https://t.me/Mackaroff){ .md-button }
[Email  :fontawesome-solid-envelope:](mailto:mackaroff@mackaroff.com){ .md-button }
