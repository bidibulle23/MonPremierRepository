Procédure à suivre :

Cette application s'appuie sur une base de données MongoDB Atlas 4.2 (URI de connexion dans le fichier 'application.properties').

Récupérer et construire le projet
=================================
Récupérer le projet dans votre espace de travail et le compiler en exécutant à la racine :
$ mvn clean install

Démarrer l'application en exécutant la commande ci-dessous
==========================================================
$ java -jar <espace de travail>\MesContacts\target\mescontacts-0.0.1-SNAPSHOT.jar

Tester l'application en insérant et lisant une donnée :
=======================================================

Insertion (par Api REST) :
==========================
$ curl -i -X POST -H "Content-Type:application/json" -d '{ "firstName" : "Pierre", "lastName" : "DUPONT", "phoneNumber" : "0123456789" }' http://localhost:8080/people

Lecture (par Api REST) :
========================
$ curl http://localhost:8080/people

Lecture (par client MongoDB dans la collection 'person') :
==========================================================
$ db.getCollection('person').find({})


Dockerfile :
============

Build & Run du container (lancer les commandes ci-dessous) :
============================================================
$ docker build -t ddoumeng/mescontacts .
$ docker run -p 8080:8080 ddoumeng/mescontacts

$ docker ps
CONTAINER ID        IMAGE                  COMMAND                CREATED             STATUS              PORTS                    NAMES
0931aa6f163d        ddoumeng/mescontacts   "java -jar /app.jar"   26 minutes ago      Up 26 minutes       0.0.0.0:8080->8080/tcp   strange_yalow

$ docker stop strange_yalow
strange_yalow

$ docker ps
CONTAINER ID        IMAGE                  COMMAND                CREATED             STATUS              PORTS                    NAMES
