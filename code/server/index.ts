import Server from "./core/server";

// Créer le serveur (instanciation)
const server = new Server().startServer();

// Démarrer le serveur
// process.env.VAR : acceder aux variables d'environnement
server.listen(process.env.PORT);
