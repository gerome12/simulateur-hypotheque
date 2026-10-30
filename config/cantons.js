/* ---------- Cantons ---------- */
// fees : frais d'achat estimés en % du prix (mode %)
// alloc : allocation pour enfant, par enfant et par mois (CHF) ; alloc3 : dès le 3e enfant
// Source : OFAS, 2026. ZH : 268 au-delà de 12 ans, non géré. Allocation de formation (dès 16 ans), plus élevée, non gérée.
window.SIMU_CONFIG = window.SIMU_CONFIG || {};

SIMU_CONFIG.cantons = {
  GE: { label: "Genève",    fees: 5.0, alloc: 311, alloc3: 411 },
  VD: { label: "Vaud",      fees: 4.5, alloc: 322, alloc3: 365 },
  FR: { label: "Fribourg",  fees: 3.5, alloc: 265, alloc3: 285 },
  NE: { label: "Neuchâtel", fees: 4.5, alloc: 240, alloc3: 270 },
  VS: { label: "Valais",    fees: 3.0, alloc: 327, alloc3: 435 },
  BE: { label: "Berne",     fees: 2.5, alloc: 250, alloc3: 250 },
  ZH: { label: "Zurich",    fees: 1.5, alloc: 215, alloc3: 215 },
  XX: { label: "Autre canton" }
};
