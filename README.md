# Simulateur hypothécaire suisse

Une page web pour simuler l'achat d'un logement en Suisse et jouer avec les chiffres : revenus du couple, enfants et allocations, fonds propres (épargne, 2e et 3e pilier, donation), frais d'achat, hypothèque en 1er et 2e rang.

**En ligne :** https://gerome12.github.io/simulateur-hypotheque/

## Ce que fait la page

- Applique les règles usuelles des banques : 20 % de fonds propres dont 10 % hors 2e pilier, charges théoriques à 5 % plafonnées à un tiers du revenu, 2e rang amorti en 15 ans ou avant la retraite, contrôle à la retraite.
- Calcule en direct le prix maximum, le revenu nécessaire et les fonds propres nécessaires pour un prix donné.
- Montre la structure du financement, les charges calculées par la banque et le coût réel par mois, et un graphique du taux d'effort selon le prix.
- Exporte un résumé en PDF.

Les chiffres saisis restent dans le navigateur (`localStorage`). Rien n'est envoyé à un serveur.

## Utilisation

Ouvrir `index.html` dans un navigateur. Aucune installation. Sans internet, la page fonctionne avec les polices du système, et l'export PDF passe par l'impression du navigateur.

## Personnaliser

Les valeurs réglables sont dans [`config.js`](config.js), commenté en français :

- les valeurs d'exemple au premier affichage ;
- les hypothèses de la banque (taux théorique, charges maximales, 1er rang, financement maximal…) ;
- les cantons (frais d'achat en %, allocations familiales) ;
- le barème genevois des frais d'achat et Casatax (montants revus chaque année au 1er mars) ;
- les bornes des curseurs.

Modifiez le fichier en local ou directement sur GitHub, puis rechargez la page. Les nouvelles valeurs d'exemple ne remplacent pas les chiffres déjà saisis dans un navigateur : cliquez « Réinitialiser » pour les voir. Sans `config.js`, la page utilise ses propres valeurs par défaut.

## Avertissement

Simulation indicative. Les frais d'achat par canton, les allocations familiales et l'impôt sur les retraits sont des ordres de grandeur à vérifier. Cette page ne remplace pas une offre bancaire.
