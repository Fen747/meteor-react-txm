|_ .meteor
|
|_ /client
|	|_ main.js : ne contient qu’un import ES6 du fichier de startup client
|	|_ main.html : contient le <head> de l’application, et le <body>,
|			qui ne doit contenir d’une unique div cible pour React
|
|_ /imports
|	|_ /api
|	|	|_ /appContext : contient deux fichier exportant un ReactiveDict
|	|	|	non global devant remplacer l’usage de Sessio / Redux
|	|	|
|	|	|_ /collections : contient un fichier par collection exportée
|	|	|
|	|	|_ /methods : contient un fichier par groupe logique de
|	|		|	méthode (admin, gestion profile, etc)
|	|		|
|	|		|_ /serverOnly : contient les méthodes non optimistes
|	|
|	|_/lib : ensemble des fonctions génériques pouvant être re-utilisées
|	|
|	|_/startup
|	|	|_client.jsx : définit les actions au lancement du client
|	|	|		(démarage du rendu, routing, etc)
|	|	|_server.js : définit les actions au lancement du serveur
|	|		(import méthodes, publications, crons, etc)
|	|
|	|_/ui : contient l’ensemble des composant JSX de l’application
|
|_/server : contient l’import du script de startup du serveur
|
|_globals.js: définit un ensemble de quelques petites fonctions utilitaires dans
              le scope global utilisées trop souvent pour être importées / exportées
