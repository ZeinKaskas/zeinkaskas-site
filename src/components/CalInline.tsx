"use client";

import { useEffect } from "react";

// Exact Cal.com inline embed snippet (loader + "disco" namespace init + inline
// render into #my-cal-inline-disco). Run as a real <script> so the vendor code
// executes verbatim without TypeScript wrapping its internals.
const CAL_INLINE_SNIPPET = `
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "disco", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;
Cal.ns.disco("inline", {
  elementOrSelector:"#my-cal-inline-disco",
  config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
  calLink: "forms/d68eef2a-8133-45b2-8714-4d982b7c33ef",
});
Cal.ns.disco("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
`;

export default function CalInline() {
  useEffect(() => {
    // The target div is already mounted by the time effects run, so the inline
    // init can find #my-cal-inline-disco.
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = CAL_INLINE_SNIPPET;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      id="my-cal-inline-disco"
    />
  );
}
