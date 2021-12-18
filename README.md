# easy-chat

## technos utlisées

- front: Angular, ngx-socket-io
- back: Node, Express, Socket.io
- bdd: Mysql

## Installation du projet

### installation des modules

- naviguer dans le dossier "front" puis lancez la commande 'npm install'
- naviguer dans le dossier "back" puis lancez la commande 'npm install'

### base de donnée

- créer une base de données nommée 'easy_chat_db'
- créer une table 'users' avec les colones suivantes:
- - 'id' en clé primaire de type INT non nullable
- - 'email' de type VARCHAR(255) non nullable
- - 'password' de type VARCHAR(255) non nullable
- - 'name' de type VARCHAR(255) non nullable
- créer l'utilisateur sql suivant avec tout les droits sur la bdd crée:
- - user: 'easyChatUser'
- - password: 'EASYch4t!P4ss#'
- vérifiez que votre serveur MySQL tourne sur le port 3306, si ce n'est pas le cas:
- - ouvrez le fichier back/server/db/index.js
- - modifiez la ligne "port: '3306'" avec votre port de serveur MySQL
- - <pre><code>const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'EASYch4t!P4ss#',
    user: 'easyChatUser',
    database: 'easy_chat_db',
    host: 'localhost',
    port: '3306'
    })</code></pre>
