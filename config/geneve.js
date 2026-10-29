/* ---------- Genève : frais d'achat (bouton « GE ») ---------- */
// Source : calculateur de la Chambre des notaires de Genève,
// https://notaires-geneve.ch/fr/frais-immobiliers (relevé en octobre 2026).
window.SIMU_CONFIG = window.SIMU_CONFIG || {};

SIMU_CONFIG.geneve = {
  // Casatax (LDE art. 8A), montants revus chaque année au 1er mars
  casatax: {
    plafondPrix: 1394928,       // prix d'achat maximal pour avoir droit à la réduction
    reductionAchat: 20924,      // réduction maximale des droits sur l'acte de vente
    reductionCedulePct: 50      // réduction des droits de la cédule, en %
  },
  vente: {
    droitsPct: 3,               // droits d'enregistrement, en % du prix
    registreFoncierPct: 0.21,   // en % du prix (arrondi au millier supérieur)
    registreFoncierMax: 40000,
    notaireMin: 200,
    // honoraires du notaire par tranches, en ‰ (pour mille) ; null = sans limite
    notaire: [
      { jusqua: 200000,  pourMille: 7 },
      { jusqua: 400000,  pourMille: 6 },
      { jusqua: 800000,  pourMille: 4.5 },
      { jusqua: 1000000, pourMille: 4 },
      { jusqua: 1500000, pourMille: 3.5 },
      { jusqua: 2000000, pourMille: 3 },
      { jusqua: 3500000, pourMille: 2.5 },
      { jusqua: 5000000, pourMille: 2 },
      { jusqua: 7500000,  pourMille: 1.5 },
      { jusqua: 10000000, pourMille: 1 },
      { jusqua: 20000000, pourMille: 0.75 },
      { jusqua: null,     pourMille: 0.5 }
    ]
  },
  cedule: {
    droitsPct: 1.365,           // droits et centimes additionnels, en % du montant de la cédule
    registreFoncierPct: 0.085,
    registreFoncierMax: 20000,
    notaireMin: 100,
    notaire: [
      { jusqua: 200000,  pourMille: 5 },
      { jusqua: 500000,  pourMille: 4 },
      { jusqua: 2000000, pourMille: 3 },
      { jusqua: 5000000, pourMille: 2 },
      { jusqua: null,    pourMille: 1 }
    ]
  },
  tvaPct: 8.1,                  // TVA sur les honoraires du notaire et les frais divers
  fraisDivers: 1000             // frais divers estimés, par acte
};
