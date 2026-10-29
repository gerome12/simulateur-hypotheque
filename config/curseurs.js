/* ---------- Bornes des curseurs (facultatif) ---------- */
// Exemple : price: { max: 6000000 } pour aller jusqu'à 6 millions.
// Champs possibles : min, max, step (pas).
window.SIMU_CONFIG = window.SIMU_CONFIG || {};

SIMU_CONFIG.curseurs = {
  price: { min: 200000, max: 4000000, step: 10000 }
};
