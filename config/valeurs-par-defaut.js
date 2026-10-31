/* ---------- Valeurs d'exemple au premier affichage ---------- */
window.SIMU_CONFIG = window.SIMU_CONFIG || {};

SIMU_CONFIG.valeursParDefaut = {
  canton: "GE",                 // canton du bien et, par défaut, du ménage : code d'un canton de la liste « cantons » plus bas
                                // (facultatif : cantonMenage pour un autre canton du ménage, qui préremplit les allocations)

  // Le ménage (revenus bruts annuels, 13e salaire compris)
  name1: "Personne 1", inc1: 120000, bonus1: 0, age1: 38,
  name2: "Personne 2", inc2: 90000,  bonus2: 0, age2: 36,
  bonusPct: 50,                 // part du bonus retenue par la banque, en %
  debt: 0,                      // autres charges fixes annuelles (leasing, pension…)
  kids: 2,
  alloc: 311,                   // allocation familiale par enfant et par mois
  alloc3: 411,                  // allocation dès le 3e enfant
  allocCount: false,            // compter les allocations dans le revenu

  // Fonds propres (retraits 2e et 3e pilier avant impôt)
  cash1: 110000, lpp1: 60000, p3a1: 25000,
  cash2: 70000,  lpp2: 40000, p3a2: 15000,
  gift: 0,                      // donation / avance d'hoirie
  taxPct: 6,                    // impôt estimé sur les retraits de 2e et 3e pilier, en % (facultatif : taxPct1 et taxPct2, un taux par personne)
  taxMode: "pct",              // impôt saisi en "pct" (%) ou en "chf" (montant)
  taxChf: 8400,                 // impôt estimé en CHF (mode "chf"), réparti selon les retraits de chacun (facultatif : taxChf1 et taxChf2)
  reserve: 0,                   // réserve gardée de côté
  modeLpp1: "retrait", modeP3a1: "retrait",   // pilier "retrait" ou "gage" : mis en gage, il reste en prévoyance et n'entre pas dans les fonds propres
  modeLpp2: "retrait", modeP3a2: "retrait",
  gageCompte: false,            // compter le gage dans les contrôles de fonds propres, selon la banque

  // Fonds propres venant d'un autre bien
  abMode: "aucun",              // "aucun", "vente", "relais" (vente et crédit relais) ou "conserve" (bien gardé, hypothèque augmentée)
  abPrixVente: 0, abHypotheque: 0, abFraisVente: 0,   // vente : prix, hypothèque à rembourser, frais
  abImpotGain: 0,               // impôt sur le gain immobilier, saisi, jamais calculé
  abEPL: 0,                     // part du prix venant du 2e pilier, déjà retirée pour ce bien
  abRelaisTaux: 0, abRelaisMois: 12,   // crédit relais : taux en %, durée en mois
  abValeur: 0, abHypoActuelle: 0, abHypoNouvelle: 0,  // bien gardé

  // Le bien
  price: 1200000,
  usage: "principale",          // usage du bien : "principale" ou "secondaire"
  chargesPrincipale: 0,         // logement principal déjà payé par le ménage, en CHF par mois (usage "secondaire")
  feesMode: "ge",               // frais d'achat : "pct" (en %), "chf" (montant) ou "ge" (barème genevois)
  feesPct: 5,
  feesChf: 60000,
  casatax: true,                // Genève : résidence principale
  cedReprise: 0,                // cédules du vendeur reprises

  // Coût réel
  realRate: 1.6,                // taux réel du marché, en %
  rent: 3200,                   // loyer actuel par mois

  // Acheter ou louer
  alHorizon: 15,                // horizon de la comparaison, en années
  alHausseLoyer: 1.5,           // hausse des loyers, en % par an. Par défaut 1,5 % : prévision UBS d'août 2026 pour 2026 et 2027 seulement, prolongée ici comme moyenne à long terme.
  alHausseBien: 1,              // hausse du prix du bien, en % par an. Hypothèse sans source, à ajuster. Le résultat y est très sensible.
  alRendement: 2,               // rendement de l'argent placé, en % par an (hypothèse sans source)
  alFraisVente: 2               // frais de vente, en % du prix de vente (hypothèse)
};
