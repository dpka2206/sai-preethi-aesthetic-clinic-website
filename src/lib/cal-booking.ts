export const CAL_LINK = "sai-preethi-vw4twy/book";
export const CAL_NAMESPACE = "book";
export const CAL_CONFIG = JSON.stringify({
  layout: "month_view",
  useSlotsViewOnSmallScreen: "true",
  theme: "light",
});

export const calBookingAttrs = {
  "data-cal-link": CAL_LINK,
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-config": CAL_CONFIG,
} as const;

/** Cal.com element-click embed — load once in the document head. */
export const CAL_EMBED_SCRIPT = `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "book", {origin:"https://app.cal.com"});
Cal.ns.book("ui", {"hideEventTypeDetails":false,"layout":"month_view","theme":"light"});`;
