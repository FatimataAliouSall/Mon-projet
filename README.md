# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/FatimataAliouSall/Survey-app.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd Survey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

## Fonctionnalités

L'application `Survey App` permet d'effectuer les opérations suivantes :

- Créer une fiche d'enquête : Ajoutez de nouvelles enquêtes de satisfaction des clients avec des informations telles que le nom de l'enquête, la description, la date de création, et les informations sur l'employé qui l'a créée.

- Lire les fiches d'enquête : Consultez les détails d'une enquête spécifique ou récupérez la liste complète des enquêtes enregistrées dans la base de données.

- Mettre à jour une fiche d'enquête : Modifiez les informations existantes d'une enquête, telles que le nom, la description, et les détails de l'employé.

- Supprimer une fiche d'enquête : Supprimez une enquête spécifique de la base de données.

- Gérer les questions d'enquête : Ajoutez, mettez à jour, supprimez, et consultez les questions associées à une enquête.

- Gérer les réponses d'enquête : Ajoutez, mettez à jour, supprimez, et consultez les réponses des clients aux questions d'enquête.

## Structure du projet

Le projet est organisé de manière modulaire, avec les composants suivants :

***`src/config/database.js` :*** Gère la connexion à la base de données MongoDB.

***`src/index.js` :*** Point d'entrée principal de l'application, où les opérations CRUD sont exécutées.
***`src/surveyController.js` :*** Contient la logique pour les opérations CRUD sur les fiches d'enquête.
***`src/questionController.js` :*** Contient la logique pour les opérations CRUD sur les questions d'enquête.
***`src/answerController.js` :*** Contient la logique pour les opérations CRUD sur les réponses d'enquête.


## Fonctions des modules et documentation 


#### surveyModule.js
``createSurvey(survey)``

survey :
- id (int),
- name (string),
- description (string),
- createdAt (date)
- createdBy (objet) : 
    - employeName (string),
    - employeeRole (string)

Cette fonction permet de créer une nouvelle enquête et retourne l'insertion.

 ``getAllSurveys()``
Cette fonction récupère et affiche toute les enquetes existante .


 updateSurvey(id (int), survey)

survey :

- id (int),
- name (string),
- description (string),
- createdAt (date)
- createdBy (objet) : 
    - employeName (string),
    - employeeRole (string)
    Cette fonction met à jour une enquête existante et retourne la modification.

- deleteSurvey(id (int))
Cette fonction supprime une enquête de la base de données en utilisant son ID.

#### questionModule.js
``createQuestion(question)``

question :

- id (int),
- serveyId (int),
- title (string),
- type (string),
- option (object) :
    - minValue(int)
    - maxValue(int)
    - step(int)

Cette fonction permet de créer une nouvelle question et retourne l'insertion.

``getAllQuestion()``
Cette fonction récupère et affiche toute les question existante .

``updateQuestion(id, question)``

questtion :

- serveyId (int),
- title (string),
- type (string),
- option (object) :
    - minValue(int)
    - maxValue(int)
    - step(int)

Cette fonction met à jour une question existante  en utilisant son ID.


``deleteQuestion(id (int))``
Cette fonction supprime une question de la base de données en utilisant son ID.


#### answerModule.js
``createAnswer(answer)``

answer:

- id (int),
- questionId (int),
- title (string),


Cette fonction permet de créer une nouvelle réponse .

- getAllAnswer()
Cette fonction récupère et affiche toute les reponse existante .

``updateAnswer(id(int), answer)``

answer :

- questionId (int),
- title (string),


Cette fonction met à jour une réponse existante en utilisant son ID.

``deleteAnswer(id)``

Cette fonction supprime une réponse en utilisant son ID.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```


## Remerciements

Merci à tous les contributeurs et utilisateurs qui ont soutenu ce projet.


## Authors

{Fatimata Aliou Sall} (https://github.com/FatimataAliouSall/)