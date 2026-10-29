/*
  ============================================================
  Configuration du simulateur hypothécaire suisse
  ============================================================

  Ce fichier regroupe toutes les valeurs que l'on peut régler sans
  toucher au code de la page (index.html).

  Comment modifier :
  1. Changez une valeur ci-dessous (gardez les virgules et les accolades).
  2. Enregistrez le fichier, puis rechargez la page.
     - En local : ouvrez index.html dans le navigateur.
     - En ligne : modifiez ce fichier sur GitHub ; la page se met à jour
       une à deux minutes après l'enregistrement.

  À savoir :
  - Les règles de calcul (banque, cantons, barème genevois) s'appliquent
    dès le rechargement.
  - Les valeurs d'exemple ne remplacent pas les chiffres déjà saisis par
    un visiteur (gardés dans son navigateur) : cliquez « Réinitialiser »
    pour les voir.
  - Les montants s'écrivent sans apostrophe : 1394928 et non 1'394'928.
    Les pourcentages s'écrivent en % : 5 pour 5 %.
  - Si ce fichier est absent ou contient une erreur, la page utilise ses
    propres valeurs par défaut.
*/

window.SIMU_CONFIG = {

  /* ---------- Valeurs d'exemple au premier affichage ---------- */
  exemple: {
    canton: "GE",                 // code d'un canton de la liste « cantons » plus bas

    // Le ménage (revenus bruts annuels, 13e salaire compris)
    name1: "Personne 1", inc1: 120000, bonus1: 0, age1: 38,
    name2: "Personne 2", inc2: 90000,  bonus2: 0, age2: 36,
    bonusPct: 50,                 // part du bonus retenue par la banque, en %
    debt: 0,                      // autres charges fixes annuelles (leasing, pension…)
    kids: 2,
    alloc: 311,                   // allocation familiale par enfant et par mois
    allocCount: false,            // compter les allocations dans le revenu

    // Fonds propres (retraits 2e et 3e pilier avant impôt)
    cash1: 110000, lpp1: 60000, p3a1: 25000,
    cash2: 70000,  lpp2: 40000, p3a2: 15000,
    gift: 0,                      // donation / avance d'hoirie
    taxPct: 6,                    // impôt estimé sur les retraits de 2e et 3e pilier, en %
    reserve: 0,                   // réserve gardée de côté

    // Le bien
    price: 1200000,
    feesMode: "ge",               // frais d'achat : "pct" (en %), "chf" (montant) ou "ge" (barème genevois)
    feesPct: 5,
    feesChf: 60000,
    casatax: true,                // Genève : résidence principale
    cedReprise: 0,                // cédules du vendeur reprises

    // Coût réel
    realRate: 1.6,                // taux réel du marché, en %
    rent: 3200                    // loyer actuel par mois
  },

  /* ---------- Hypothèses de la banque ---------- */
  banque: {
    rate: 5,                      // taux théorique de contrôle, en %
    ratioMax: 33,                 // charges maximales en % du revenu brut
    maintPct: 1,                  // entretien et frais accessoires, en % du prix par an
    rank1Pct: 66.7,               // limite du 1er rang, en % du prix
    ltvMax: 80,                   // financement maximal, en % du prix
    amortMax: 15,                 // durée maximale d'amortissement du 2e rang, en années
    retireAge: 65,                // âge de la retraite
    retirePct: 60                 // revenu à la retraite, en % des salaires actuels
  },

  /* ---------- Cantons ---------- */
  // fees : frais d'achat estimés en % du prix (mode %)
  // alloc : allocation familiale par enfant et par mois (CHF)
  cantons: {
    GE: { label: "Genève",    fees: 5.0, alloc: 311 },
    VD: { label: "Vaud",      fees: 4.5, alloc: 322 },
    FR: { label: "Fribourg",  fees: 3.5, alloc: 265 },
    NE: { label: "Neuchâtel", fees: 4.5, alloc: 220 },
    VS: { label: "Valais",    fees: 3.0, alloc: 305 },
    BE: { label: "Berne",     fees: 2.5, alloc: 230 },
    ZH: { label: "Zurich",    fees: 1.5, alloc: 215 },
    XX: { label: "Autre canton" }
  },

  /* ---------- Genève : frais d'achat (bouton « GE ») ---------- */
  // Source : calculateur de la Chambre des notaires de Genève,
  // https://notaires-geneve.ch/fr/frais-immobiliers (relevé en octobre 2026).
  geneve: {
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
  },

  /* ---------- Bornes des curseurs (facultatif) ---------- */
  // Exemple : price: { max: 6000000 } pour aller jusqu'à 6 millions.
  // Champs possibles : min, max, step (pas).
  curseurs: {
    price: { min: 200000, max: 4000000, step: 10000 }
  }
};
