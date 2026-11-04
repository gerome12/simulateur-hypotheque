/*
  Service worker : garde le simulateur dans le cache du téléphone pour qu'il marche sans internet.

  - Fichiers du site (page, config/, assets/) : réseau d'abord, pour toujours avoir la dernière
    version quand internet est là ; le cache sert quand il n'y a pas de connexion.
  - Polices Google et générateur de PDF (fichiers externes qui ne changent pas) : cache d'abord.
  - Ne fonctionne qu'en https (GitHub Pages) ou sur localhost, pas en ouvrant le fichier depuis l'ordinateur.

  Changer VERSION force le nettoyage des anciens caches (rarement nécessaire).
*/
const VERSION = "v1";
const CACHE = "simu-hypo-" + VERSION;

// Mis en cache dès l'installation, même si on ne les a pas encore utilisés (le PDF n'est chargé qu'à l'export)
const PRECACHE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "config/configs.js",
  "assets/favicon.svg",
  "assets/favicon-32.png",
  "assets/apple-touch-icon.png",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
];
const EXTERNES = ["https://fonts.googleapis.com/", "https://fonts.gstatic.com/", "https://cdnjs.cloudflare.com/"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache =>
    Promise.all(PRECACHE.map(url => cache.add(url).catch(() => {})))   // un fichier manquant ne bloque pas l'installation
  ));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("simu-hypo-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Réseau avec délai : sur une connexion très lente, on bascule sur le cache après quelques secondes
const reseau = (req, ms) => new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error("lent")), ms);
  fetch(req).then(r => { clearTimeout(t); resolve(r); }, e => { clearTimeout(t); reject(e); });
});

// Copie la réponse dans le cache (la copie est faite tout de suite, avant que la page ne lise la réponse)
const garder = (event, req, res) => {
  const copie = res.clone();
  // Fichiers du site rangés sans le « ?… » de l'adresse, pour ne garder qu'une copie de chacun
  const cle = req.url.startsWith(self.location.origin) ? req.url.split("?")[0] : req;
  event.waitUntil(caches.open(CACHE).then(c => c.put(cle, copie)).catch(() => {}));
};

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = req.url;

  // Fichiers externes : cache d'abord, puis réseau (et mise en cache)
  if (EXTERNES.some(p => url.startsWith(p))) {
    event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === "opaque") garder(event, req, res);
      return res;
    })));
    return;
  }
  if (new URL(url).origin !== self.location.origin) return;

  // Fichiers du site : réseau d'abord (dernière version), cache si pas de connexion
  event.respondWith(reseau(req, 4000).then(res => {
    if (res.ok) garder(event, req, res);
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true })
    .then(hit => hit || (req.mode === "navigate" ? caches.match("index.html").then(h => h || caches.match("./")) : undefined))
    .then(hit => hit || Response.error())));
});
