/* ---------- Cantons ---------- */
// fees : frais d'achat estimés en % du prix (mode %)
// alloc : allocation familiale par enfant et par mois (CHF)
window.SIMU_CONFIG = window.SIMU_CONFIG || {};

SIMU_CONFIG.cantons = {
  GE: { label: "Genève",    fees: 5.0, alloc: 311 },
  VD: { label: "Vaud",      fees: 4.5, alloc: 322 },
  FR: { label: "Fribourg",  fees: 3.5, alloc: 265 },
  NE: { label: "Neuchâtel", fees: 4.5, alloc: 220 },
  VS: { label: "Valais",    fees: 3.0, alloc: 305 },
  BE: { label: "Berne",     fees: 2.5, alloc: 230 },
  ZH: { label: "Zurich",    fees: 1.5, alloc: 215 },
  XX: { label: "Autre canton" }
};
