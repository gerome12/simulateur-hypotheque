/* ---------- Textes explicatifs ---------- */
// Textes affichés dans la page et le PDF, modifiables sans toucher au code.
// Le HTML simple est accepté : <b>, <sup>, <p>, <ul><li>…</li></ul>, &nbsp;
// Gardez les accents graves ` autour de chaque texte, et la virgule après.
// Si un texte est supprimé, la page reprend son texte d'origine.
window.SIMU_CONFIG = window.SIMU_CONFIG || {};

SIMU_CONFIG.textes = {
  // En-tête de la page (le thème peut remplacer le titre)
  titre: `Simulateur hypothécaire suisse`,
  sousTitre: `Règles usuelles des banques : 20&nbsp;% de fonds propres dont 10&nbsp;% hors 2<sup>e</sup>&nbsp;pilier, charges théoriques à 5&nbsp;% max. un tiers du revenu, 2<sup>e</sup>&nbsp;rang amorti en 15&nbsp;ans.`,

  // Bulles (i) : une par réglage, plus l'encadré « Hypothèque totale »
  aide: {
  maintPct: `<p>Forfait que la banque ajoute aux charges pour l'entretien, les réparations et les frais du logement : chauffage, eau, assurance du bâtiment, taxes, charges PPE et fonds de rénovation.</p>
    <ul><li>Le plus souvent 1&nbsp;% du prix par an. Certaines banques prennent 0,7 à 0,8&nbsp;%, ou calculent sur la valeur du bâtiment seul.</li>
    <li>Il sert au contrôle « Charges / revenu ». Pour votre budget, indiquez vos vraies charges dans « Coût réel ».</li></ul>`,
  rate: `<p>Taux fictif que la banque utilise pour vérifier que vous pourrez payer même si les taux remontent. Il est sans rapport avec le taux que vous paierez réellement.</p>
    <ul><li>5&nbsp;% est l'usage dans la plupart des banques. Certaines prennent 4,5&nbsp;%, d'autres plus.</li>
    <li>Il sert seulement au contrôle « Charges / revenu ». Le coût réel par mois utilise le taux réel, dans « Coût réel ».</li></ul>`,
  ratioMax: `<p>Part maximale du revenu brut que les charges théoriques peuvent prendre : intérêts au taux théorique, amortissement du 2<sup>e</sup> rang, entretien et autres charges.</p>
    <ul><li>La règle usuelle est un tiers, soit 33&nbsp;%. Certaines banques acceptent jusqu'à 35 ou 38&nbsp;% avec de hauts revenus ou une bonne fortune.</li></ul>`,
  rank1Pct: `<p>Part du prix que peut atteindre le 1<sup>er</sup> rang de l'hypothèque, celui qu'on n'est pas obligé d'amortir.</p>
    <ul><li>Environ 2/3 du prix, soit 65 à 67&nbsp;% selon la banque.</li>
    <li>Tout ce qui dépasse, jusqu'au financement maximum, est le 2<sup>e</sup> rang, à rembourser.</li></ul>`,
  ltvMax: `<p>Part maximale du prix que la banque prête. Le reste, plus les frais d'achat, doit venir de vos fonds propres.</p>
    <ul><li>80&nbsp;% pour un logement que vous habitez : règle de l'Association suisse des banquiers, reconnue par la FINMA.</li>
    <li>Souvent 60 à 75&nbsp;% pour une résidence secondaire, un bien à louer ou un bien de luxe.</li></ul>`,
  amortMax: `<p>Délai pour rembourser le 2<sup>e</sup> rang, par versements égaux chaque année.</p>
    <ul><li>15 ans au plus selon les règles des banques, et avant l'âge de la retraite si elle arrive plus tôt.</li>
    <li>On peut amortir directement, ou indirectement en versant sur un 3<sup>e</sup> pilier mis en gage.</li></ul>`,
  retireAge: `<p>Âge auquel la banque refait le contrôle des charges avec le revenu de retraite.</p>
    <ul><li>65 ans pour les hommes comme pour les femmes depuis la réforme AVS 21 (relèvement progressif pour les femmes).</li>
    <li>Il limite aussi la durée d'amortissement du 2<sup>e</sup> rang, calculée sur l'âge de la personne la plus âgée.</li></ul>`,
  retirePct: `<p>Revenu estimé à la retraite, en pourcentage des salaires actuels (sans bonus ni allocations).</p>
    <ul><li>60&nbsp;% est une estimation prudente. AVS et 2<sup>e</sup> pilier donnent souvent 50 à 70&nbsp;% du dernier salaire.</li>
    <li>Pour un chiffre juste, utilisez vos certificats de prévoyance. Un retrait du 2<sup>e</sup> pilier pour l'achat réduit la rente future.</li></ul>`,
  gift: `<p>Argent reçu, en général des parents, pour aider à l'achat. Il compte comme fonds propres durs, comme l'épargne.</p>
    <ul>
      <li><b>Avance d'hoirie</b> : avance sur la future part d'héritage. À la succession, elle est déduite de ce que vous recevez, pour rester équitable avec les frères et sœurs (rapport, CC art. 626).</li>
      <li><b>Donation</b> : un cadeau qui n'a pas à être compensé plus tard si l'acte prévoit une dispense de rapport, dans la limite des réserves héréditaires.</li>
      <li><b>Banque</b> : elle accepte ces montants s'il s'agit d'un vrai don sans remboursement, en général sur attestation écrite. Un prêt des parents n'est pas un fonds propre : ses intérêts ou remboursements vont dans « Autres charges fixes annuelles ».</li>
      <li><b>Impôt</b> : dépend du canton. Beaucoup exonèrent les dons aux enfants, pas tous et parfois au-delà d'un seuil seulement.</li>
      <li><b>Couple</b> : marié, le don reste le bien propre de celui qui le reçoit. Non marié, la répartition de la propriété compte. Dans les deux cas, gardez une trace écrite de qui a apporté quoi.</li>
    </ul>`,
    hypothequeTotale: `<p><b>Hypothèque totale = 1<sup>er</sup> rang + 2<sup>e</sup> rang.</b> C'est le montant que la banque vous prête : le prix moins votre apport.</p>
<ul>
  <li><b>1<sup>er</sup> rang</b> : jusqu'à environ 2/3 du prix. Pas d'amortissement obligatoire.</li>
  <li><b>2<sup>e</sup> rang</b> : la partie entre 2/3 et 80&nbsp;% du prix. Elle doit être remboursée en 15 ans au plus, ou avant la retraite si elle arrive plus tôt.</li>
  <li>Les intérêts, au taux théorique comme au taux réel, se calculent sur l'hypothèque totale.</li>
</ul>`
  },

  // « Règles appliquées et limites du modèle » (en bas de « Ma simulation »)
  regles: [
    `Hypothèque max. 80&nbsp;% du prix. 1<sup>er</sup> rang jusqu'à env. 2/3 du prix, sans amortissement obligatoire. 2<sup>e</sup> rang amorti linéairement en 15 ans, ou avant l'âge de la retraite si c'est plus tôt.`,
    `Charges théoriques = intérêts au taux théorique (5&nbsp;%) + amortissement du 2<sup>e</sup> rang + entretien et frais (≈ 1&nbsp;% du prix) + autres charges (leasing, pensions). Elles doivent rester sous 33&nbsp;% du revenu brut retenu.`,
    `Fonds propres : au moins 20&nbsp;% du prix, dont 10&nbsp;% hors 2<sup>e</sup> pilier. Les frais d'achat (droits de mutation, notaire, registre foncier, cédule) s'ajoutent et ne sont pas financés.`,
    `Les retraits de 2<sup>e</sup> et 3<sup>e</sup> pilier sont imposés à part : le taux saisi est déduit du montant brut.`,
    `Tous les fonds propres disponibles servent à réduire l'hypothèque, sauf la réserve que vous gardez.`,
    `Les frais par canton et les montants d'allocations sont des ordres de grandeur à vérifier ; ils restent modifiables. Ce simulateur ne remplace pas une offre bancaire.`
  ],

  // Dernier paragraphe du PDF (texte simple, sans HTML)
  avertissementPdf: `Simulation indicative selon les règles usuelles des banques suisses. Les frais d'achat, allocations et impôts sur retraits sont des estimations. Ce document ne remplace pas une offre bancaire.`
};
