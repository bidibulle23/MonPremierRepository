Procédure à suivre :

Installer et démarrer MongoDB 3.2
=================================
Définir le répertoire de votre base MongoDB : <Répertoire Database> (ex : créer le répertoire C:\Temp\data) et exécuter :
	<Répertoire installation MongoDB>\bin\mongod.exe --dbpath C:\Temp\data

Créer Base et User admin
========================
Depuis un client Mongo, créer un user 'admin' dans la base MongoDB 'mescontacts' en exécutant :
	use mescontacts
	db.createUser({user : "admin", pwd : "admin", roles : ["dbAdmin"]})

Récupérer et construire le projet
=================================
Récupérer le projet dans votre espace de travail et le compiler en exécutant à la racine :
	mvn clean install

Démarrer l'application en exécutant la commande ci-dessous
==========================================================
	java -jar <espace de travail>\MesContacts\target\mescontacts-0.0.1-SNAPSHOT.jar


Tester l'application en insérant et lisant une donnée :
=======================================================

Insertion (par Api REST) :
==========================
curl -i -X POST -H "Content-Type:application/json" -d '{ "firstName" : "Pierre", "lastName" : "DUPONT", "phoneNumber" : "0123456789" }' http://localhost:8080/people

Lecture (par Api REST) :
========================
	curl http://localhost:8080/people

Lecture (par client MongoDB) :
==============================
	db.getCollection('person').find({})
