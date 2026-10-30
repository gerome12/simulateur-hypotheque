/* ---------- Hypothèses de la banque ---------- */
window.SIMU_CONFIG = window.SIMU_CONFIG || {};

SIMU_CONFIG.hypothesesBancaires = {
  rate: 5,                      // taux théorique de contrôle, en %
  ratioMax: 33,                 // charges maximales en % du revenu brut
  maintPct: 1,                  // entretien et frais accessoires, en % du prix par an
  rank1Pct: 66.7,               // limite du 1er rang, en % du prix
  ltvMax: 80,                   // financement maximal, en % du prix
  ltvMaxSec: 70,                // financement maximal pour une résidence secondaire, en % du prix
  amortMax: 15,                 // durée maximale d'amortissement du 2e rang, en années
  retireAge: 65,                // âge de la retraite
  retirePct: 60                 // revenu à la retraite, en % des salaires actuels
};
