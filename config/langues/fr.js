/* ---------- Textes explicatifs, en français ---------- */
// Textes affichés dans la page et le PDF, modifiables sans toucher au code.
//
// Mise en forme automatique :
//   **mot**       → en gras
//   1er, 2e, 3e   → « er » et « e » en exposant
//   5 %, 15 ans, 2e pilier → ces espaces ne coupent pas la ligne
//
// Chaque bulle (i) a un « texte » (paragraphe) et des « points » (liste à puces).
// Écrivez chaque texte entre guillemets droits "…" et gardez la virgule à la fin.
// Ce fichier est la seule source de ces textes : supprimer une bulle (i) ici
// la retire de la page. Pour ajouter une bulle, utilisez le nom du réglage.
window.SIMU_CONFIG = window.SIMU_CONFIG || {};

SIMU_CONFIG.langues = SIMU_CONFIG.langues || {};
SIMU_CONFIG.langues.fr = {

  // ---------- En-tête de la page (le thème peut remplacer le titre)
  titre: "Simulateur hypothécaire suisse",
  sousTitre: "Règles usuelles des banques : 20 % de fonds propres dont 10 % hors 2e pilier, charges théoriques à 5 % max. un tiers du revenu, 2e rang amorti en 15 ans.",

  // ---------- Bulles (i)
  aide: {

    // Entretien et frais accessoires
    maintPct: {
      texte: "Forfait que la banque ajoute aux charges pour l'entretien, les réparations et les frais du logement : chauffage, eau, assurance du bâtiment, taxes, charges PPE et fonds de rénovation.",
      points: [
        "Le plus souvent 1 % du prix par an. Certaines banques prennent 0,7 à 0,8 %, ou calculent sur la valeur du bâtiment seul.",
        "Il sert au contrôle « Charges / revenu ». Pour votre budget, indiquez vos vraies charges dans « Coût réel ».",
      ],
    },

    // Taux théorique
    rate: {
      texte: "Taux fictif que la banque utilise pour vérifier que vous pourrez payer même si les taux remontent. Il est sans rapport avec le taux que vous paierez réellement.",
      points: [
        "5 % est l'usage dans la plupart des banques. Certaines prennent 4,5 %, d'autres plus.",
        "Il sert seulement au contrôle « Charges / revenu ». Le coût réel par mois utilise le taux réel, dans « Coût réel ».",
      ],
    },

    // Charges max. / revenu
    ratioMax: {
      texte: "Part maximale du revenu brut que les charges théoriques peuvent prendre : intérêts au taux théorique, amortissement du 2e rang, entretien et autres charges.",
      points: [
        "La règle usuelle est un tiers, soit 33 %. Certaines banques acceptent jusqu'à 35 ou 38 % avec de hauts revenus ou une bonne fortune.",
      ],
    },

    // Limite 1er rang
    rank1Pct: {
      texte: "Part du prix que peut atteindre le 1er rang de l'hypothèque, celui qu'on n'est pas obligé d'amortir.",
      points: [
        "Environ 2/3 du prix, soit 65 à 67 % selon la banque.",
        "Tout ce qui dépasse, jusqu'au financement maximum, est le 2e rang, à rembourser.",
      ],
    },

    // Limite 1er rang (résidence secondaire)
    rank1PctSec: {
      texte: "Limite sous laquelle l'hypothèque n'a plus à être amortie.",
      points: [
        "Souvent 50 % du prix à atteindre en 15 ans, contre environ 2/3 pour le logement habité.",
        "Certaines banques exigent davantage, jusqu'au remboursement complet dans un délai fixé.",
      ],
    },

    // Financement max.
    ltvMax: {
      texte: "Part maximale du prix que la banque prête. Le reste, plus les frais d'achat, doit venir de vos fonds propres.",
      points: [
        "80 % pour un logement que vous habitez : pratique usuelle des banques, pas une limite légale.",
        "Souvent 50 à 75 % pour une résidence secondaire ou un bien à louer, parfois moins pour un bien de luxe.",
        "Les directives de l'Association suisse des banquiers, reconnues par la FINMA, exigent au moins 10 % de fonds propres hors 2e pilier et le retour aux deux tiers de la valeur en 15 ans au plus.",
      ],
    },

    // Financement max. (résidence secondaire)
    ltvMaxSec: {
      texte: "Part maximale du prix que la banque prête pour une résidence secondaire.",
      points: [
        "Souvent 60 %, soit 40 % de fonds propres. Selon la banque, 50 à 75 %.",
        "Les fonds propres doivent venir de l'épargne ou d'une donation : ni 2e ni 3e pilier.",
      ],
    },

    // Charges du logement principal (résidence secondaire)
    chargesPrincipale: {
      texte: "Ce que coûte déjà le logement où vous habitez, car la banque contrôle les deux logements ensemble.",
      points: [
        "Locataire : votre loyer, selon la banque.",
        "Propriétaire : vos charges théoriques (intérêts à 5 %, amortissement, entretien), pas ce que vous payez réellement.",
        "Le total des deux logements doit rester sous le plafond de charges.",
      ],
    },

    // Durée d'amortissement 2e rang
    amortMax: {
      texte: "Délai pour rembourser le 2e rang, par versements égaux chaque année.",
      points: [
        "15 ans au plus selon les directives de l'Association suisse des banquiers, de façon linéaire. Avant l'âge de la retraite : pratique des banques.",
        "On peut amortir directement, ou indirectement en versant sur un 3e pilier mis en gage.",
      ],
    },

    // 2e pilier (EPL) : même bulle pour les deux personnes, voir lpp2 en fin de fichier
    lpp1: {
      texte: "Retrait anticipé pour le logement que vous habitez (EPL).",
      points: [
        "Au moins 20'000 CHF auprès d'une caisse de pension, et un retrait tous les 5 ans.",
        "Après 50 ans, le montant est limité au plus élevé de ces deux montants : l'avoir à 50 ans, ajusté des retraits et remboursements faits depuis, ou la moitié de l'avoir actuel après déduction de ce qui a déjà servi au logement. Demandez le montant à votre caisse.",
        "Il sert à un seul logement à la fois.",
        "En principe au plus tard 3 ans avant le droit aux prestations de vieillesse. Le règlement de votre caisse peut réduire ce délai, mais aucun retrait une fois l'âge ordinaire de la retraite atteint.",
        "Marié ou partenaire enregistré : le retrait et la mise en gage demandent le consentement écrit du conjoint ou du partenaire.",
      ],
    },

    // Compter le gage dans les fonds propres
    gageCompte: {
      texte: "Les banques traitent le gage différemment.",
      points: [
        "Les directives de l'ASB admettent qu'un 3e pilier mis en gage compte comme fonds propres.",
        "Le 2e pilier, retiré ou mis en gage, ne compte jamais dans les 10 % hors 2e pilier.",
        "Selon les banques, le gage compte ou non : demandez à la vôtre.",
        "L'ASB fixe seulement les 10 %. Les 20 % sont une pratique, et le gage y compte selon la banque, souvent pas pour tout son montant. Ce simulateur le compte à 100 %.",
        "À la retraite, en cas de paiement en espèces ou de divorce, le versement du montant gagé demande l'accord écrit de la banque. Si la banque réalise le gage, il est imposé comme prestation en capital et les prestations de prévoyance baissent.",
      ],
    },

    // Impôt sur le gain immobilier du bien vendu
    abImpotGain: {
      texte: "Impôt cantonal sur le gain de la vente. Ce simulateur ne le calcule pas : indiquez votre estimation.",
      points: [
        "Remploi : pour un logement habité durablement et exclusivement par vous jusqu'à la vente, l'impôt est différé si le produit sert, dans un délai approprié, à acquérir en Suisse un logement au même usage. À vérifier auprès de votre canton.",
        "Pas de report pour une résidence secondaire.",
      ],
    },

    // Part du bien vendu venant du 2e pilier
    abEPL: {
      texte: "Montant du 2e pilier déjà retiré pour le bien vendu.",
      points: [
        "À la vente, il doit être remboursé à la caisse, dans la limite du produit de la vente (prix moins hypothèque et charges légales).",
        "Traiter l'impôt sur le gain comme une charge légale est une lecture à confirmer par votre caisse.",
        "Les prêts contractés dans les 2 ans avant la vente ne comptent pas, sauf preuve qu'ils ont financé le logement.",
        "Si vous réinvestissez dans un logement à usage propre dans les 2 ans, il peut aller sur une institution de libre passage en attendant. Ici, il compte comme 2e pilier, pas dans les fonds propres durs.",
        "Uniquement pour la même personne assurée, propriétaire et habitant le nouveau logement. La mention au registre foncier suit le nouveau bien.",
        "Pour une résidence secondaire, il n'est pas disponible : il est retiré du net.",
        "Après un remboursement, l'impôt payé sur ce retrait peut être restitué sur demande, dans les 3 ans. Ce simulateur ne le compte pas.",
      ],
    },

    // Durée du crédit relais
    abRelaisMois: {
      texte: "Durée prévue du crédit relais, le temps de vendre.",
      points: [
        "Sa durée et son montant dépendent de la banque : ce simulateur ne fixe aucun plafond.",
      ],
    },

    // Âge de la retraite
    retireAge: {
      texte: "Âge auquel la banque refait le contrôle des charges avec le revenu de retraite.",
      points: [
        "65 ans pour les hommes comme pour les femmes depuis la réforme AVS 21 (relèvement progressif pour les femmes).",
        "Il limite aussi la durée d'amortissement du 2e rang, calculée sur l'âge de la personne la plus âgée.",
      ],
    },

    // Revenu à la retraite
    retirePct: {
      texte: "Revenu estimé à la retraite, en pourcentage des salaires actuels (sans bonus ni allocations).",
      points: [
        "60 % est une estimation prudente. AVS et 2e pilier donnent souvent 50 à 70 % du dernier salaire.",
        "Pour un chiffre juste, utilisez vos certificats de prévoyance. Un retrait du 2e pilier pour l'achat réduit la rente future.",
      ],
    },

    // Donation / avance d'hoirie
    gift: {
      texte: "Argent reçu, en général des parents, pour aider à l'achat. Il compte comme fonds propres durs, comme l'épargne.",
      points: [
        "**Avance d'hoirie** : avance sur la future part d'héritage. À la succession, elle est déduite de ce que vous recevez, pour rester équitable avec les frères et sœurs (rapport, CC art. 626).",
        "**Donation** : un cadeau qui n'a pas à être compensé plus tard si l'acte prévoit une dispense de rapport, dans la limite des réserves héréditaires.",
        "**Banque** : elle accepte ces montants s'il s'agit d'un vrai don sans remboursement, en général sur attestation écrite. Un prêt n'est pas un don. Pour un logement que vous habitez, le prêt d'un proche (conjoint ou partenaire de vie, parents, grands-parents, frères et sœurs, enfants ou petits-enfants majeurs) peut compter comme fonds propres si le prêteur confirme par écrit à la banque que le remboursement exige l'accord de celle-ci. Un prêt cédé à la banque ou assorti d'une convention de postposition compte aussi. Dans tous les cas, ses intérêts et remboursements vont dans « Autres charges fixes annuelles ».",
        "**Impôt** : dépend du canton. Beaucoup exonèrent les dons aux enfants, pas tous et parfois au-delà d'un seuil seulement.",
        "**Couple** : marié, le don reste le bien propre de celui qui le reçoit. Non marié, la répartition de la propriété compte. Dans les deux cas, gardez une trace écrite de qui a apporté quoi.",
      ],
    },

    // Hypothèque totale (structure du financement)
    hypothequeTotale: {
      texte: "**Hypothèque totale = 1er rang + 2e rang.** C'est le montant que la banque vous prête : le prix moins votre apport.",
      points: [
        "**1er rang** : jusqu'à environ 2/3 du prix. Pas d'amortissement obligatoire.",
        "**2e rang** : la partie entre 2/3 et 80 % du prix. Elle doit être remboursée en 15 ans au plus, ou avant la retraite si elle arrive plus tôt.",
        "Les intérêts, au taux théorique comme au taux réel, se calculent sur l'hypothèque totale.",
        "**Résidence secondaire** : le 1er rang et le financement sont plus bas, par défaut 50 % et 60 % du prix.",
      ],
    },
  },

  // ---------- « Règles appliquées et limites du modèle » (bas de « Ma simulation »)
  regles: [
    "Hypothèque max. 80 % du prix. 1er rang jusqu'à env. 2/3 du prix, sans amortissement obligatoire. 2e rang amorti linéairement en 15 ans, ou avant l'âge de la retraite si c'est plus tôt.",
    "Charges théoriques = intérêts au taux théorique (5 %) + amortissement du 2e rang + entretien et frais (≈ 1 % du prix) + autres charges (leasing, pensions). Elles doivent rester sous 33 % du revenu brut retenu.",
    "Fonds propres : au moins 20 % du prix, dont 10 % hors 2e pilier. Les frais d'achat (droits de mutation, notaire, registre foncier, cédule) s'ajoutent et ne sont pas financés.",
    "Le prix est supposé égal à la valeur retenue par la banque (valeur de nantissement). S'il la dépasse, l'écart doit être payé en fonds propres hors 2e pilier : ce simulateur ne le calcule pas.",
    "Résidence secondaire : pas de 2e ni de 3e pilier, financement à 60 % du prix, 1er rang à 50 %, pas de Casatax. Les charges du logement principal s'ajoutent au contrôle du revenu.",
    "Non pris en compte pour une résidence secondaire : revenus locatifs, taux souvent plus élevés, amortissement plus exigeant de certaines banques, frais accessoires plus élevés, impôts et restrictions d'achat (Lex Koller).",
    "Les retraits de 2e et 3e pilier sont imposés à part : l'impôt saisi pour chaque personne est déduit de ses retraits. Pour un couple marié ou des partenaires enregistrés vivant en ménage commun, les retraits d'une même année sont en général additionnés pour fixer l'impôt : ce simulateur ne le calcule pas, c'est l'impôt saisi qui compte.",
    "Tous les fonds propres disponibles servent à réduire l'hypothèque, sauf la réserve que vous gardez.",
    "Mise en gage du 2e ou du 3e pilier : pas de retrait ni d'impôt, l'argent reste en prévoyance, mais l'hypothèque et les intérêts sont plus élevés. Par défaut, le gage ne compte pas : les 20 % et les 10 % portent sur les fonds propres réels. Chaque banque le traite à sa façon, ce simulateur ne fixe aucune limite de financement. À la retraite, en cas de paiement en espèces ou de divorce, le versement du montant gagé demande l'accord écrit de la banque. Si la banque réalise le gage, il est imposé comme prestation en capital et les prestations de prévoyance baissent.",
    "Amortissement dans le temps. Simplification : amortissement direct, un versement annuel en fin d'année. Selon les directives de l'ASB, il commence en fin de trimestre au plus tard 12 mois après le versement du prêt : votre banque peut donc le prélever plus souvent, avec des intérêts un peu plus bas. L'amortissement indirect (par exemple 3e pilier mis en gage), où la dette ne baisse pas, n'est pas modélisé. Taux réel constant, sans renouvellement de l'hypothèque, aucune vente, jusqu'à la retraite de la personne la plus âgée (la personne 2 ne compte que si elle a un revenu).",
    "Acheter ou louer : comparaison indicative à budget égal, avant impôts, flux en fin d'année. L'acheteur paie intérêts, amortissement et charges constants ; le locataire paie un loyer qui suit la hausse choisie, et place au départ ce que l'achat aurait mobilisé : apport, frais et impôt sur les retraits. Le rendement, les hausses et les frais de vente sont des hypothèses à ajuster. Sans objet pour une résidence secondaire.",
    "Autre bien. Vente : le net (prix moins hypothèque, frais et impôt saisi) compte en fonds propres. La part venant du 2e pilier compte comme 2e pilier si elle est réinvestie dans un logement à usage propre, et revient à la caisse pour une résidence secondaire. Crédit relais et emprunt sur un bien gardé dépendent de la banque. Un bien gardé ajoute ses charges théoriques au contrôle du revenu, sans ses revenus locatifs.",
    "Les frais par canton et les montants d'allocations sont des ordres de grandeur à vérifier ; ils restent modifiables. Ce simulateur ne remplace pas une offre bancaire.",
  ],

  // ---------- Dernier paragraphe du PDF
  avertissementPdf: "Simulation indicative selon les règles usuelles des banques suisses. Les frais d'achat, allocations et impôts sur retraits sont des estimations. Ce document ne remplace pas une offre bancaire.",
};
SIMU_CONFIG.langues.fr.aide.lpp2 = SIMU_CONFIG.langues.fr.aide.lpp1;
