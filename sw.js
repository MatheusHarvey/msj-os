// Ao publicar uma versão nova do app, aumente o número abaixo.
const VERSAO = "msj-os-v1";
const ARQUIVOS = [
  "./", "./index.html", "./app.css", "./app.js", "./manifest.webmanifest", "./vendor/jspdf.umd.min.js",
  "./icons/logo.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png",
  "./fonts/barlow-latin-400-normal.woff2", "./fonts/barlow-latin-500-normal.woff2", "./fonts/barlow-latin-600-normal.woff2", "./fonts/barlow-latin-700-normal.woff2",
  "./fonts/barlow-condensed-latin-500-normal.woff2", "./fonts/barlow-condensed-latin-600-normal.woff2", "./fonts/barlow-condensed-latin-700-normal.woff2"
];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Abre sempre do celular (funciona sem internet) e atualiza em segundo plano quando houver conexão.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSAO).then(async c => {
    const salvo = await c.match(e.request, {ignoreSearch: true});
    const rede = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => null);
    return salvo || (await rede) || (e.request.mode === "navigate" ? c.match("./index.html") : Response.error());
  }));
});
