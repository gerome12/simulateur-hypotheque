/*
  ============================================================
  Configuration du simulateur hypothécaire suisse — liste des fichiers
  ============================================================

  Les réglages sont répartis en plusieurs fichiers dans ce dossier « config ».
  Ce fichier-ci donne la liste des fichiers chargés par la page, dans l'ordre.
  Pour en ajouter un : créez config/nom.js et ajoutez "nom" à la liste.

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
  - Si un fichier est absent ou contient une erreur, la page utilise ses
    propres valeurs par défaut.
*/

window.SIMU_CONFIG_FICHIERS = [
  "valeurs-par-defaut",     // valeurs d'exemple au premier affichage
  "hypotheses-bancaires",   // hypothèses de la banque par défaut
  "cantons",                // frais d'achat et allocations par canton
  "geneve",                 // barème des notaires de Genève et Casatax
  "curseurs"                // bornes des curseurs
];
