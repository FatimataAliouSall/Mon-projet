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
    git clone <https://github.com/FatimataAliouSall/Mon-projet.git>
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd abc-survey-app
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

- Créer une fiche d'enquête** : Ajoutez de nouvelles enquêtes de satisfaction des clients avec des informations telles que le nom de l'enquête, la description, la date de création, et les informations sur l'employé qui l'a créée.

- Lire les fiches d'enquête** : Consultez les détails d'une enquête spécifique ou récupérez la liste complète des enquêtes enregistrées dans la base de données.

- Mettre à jour une fiche d'enquête** : Modifiez les informations existantes d'une enquête, telles que le nom, la description, et les détails de l'employé.

- Supprimer une fiche d'enquête** : Supprimez une enquête spécifique de la base de données.

- Gérer les questions d'enquête** : Ajoutez, mettez à jour, supprimez, et consultez les questions associées à une enquête.

- Gérer les réponses d'enquête** : Ajoutez, mettez à jour, supprimez, et consultez les réponses des clients aux questions d'enquête.

## Structure du projet

Le projet est organisé de manière modulaire, avec les composants suivants :

**`src/config/database.js` : Gère la connexion à la base de données MongoDB.
**`src/index.js` : Point d'entrée principal de l'application, où les opérations CRUD sont exécutées.
**`src/surveyController.js` : Contient la logique pour les opérations CRUD sur les fiches d'enquête.
**`src/questionController.js` : Contient la logique pour les opérations CRUD sur les questions d'enquête.
**`src/answerController.js` : Contient la logique pour les opérations CRUD sur les réponses d'enquête.


## Fonctions des modules et documentation 
1. config/database.js
**Fonction : connectToDatabase()
Cette fonction permet de se connecter à la base de données MongoDB en utilisant le module MongoClient. Elle établit une connexion unique que les autres modules peuvent réutiliser.

2. src/surveyController.js
Fonction : createSurvey(surveyData)
Cette fonction permet de créer une nouvelle enquête (survey) dans la collection surveys de MongoDB.
Fonction : getSurveyById(id)
Cette fonction récupère une enquête spécifique à partir de la base de données en utilisant son ID.
Fonction : updateSurvey(id, updateData)
Cette fonction met à jour une enquête existante dans la base de données en utilisant son ID.
Fonction : deleteSurvey(id)
Cette fonction supprime une enquête de la base de données en utilisant son ID.

3. src/questionController.js
Fonction : createQuestion(questionData)
Cette fonction permet de créer une nouvelle question dans la collection questions de MongoDB.
Fonction : getQuestionById(id)
Cette fonction récupère une question spécifique à partir de la base de données en utilisant son ID.
Fonction : updateQuestion(id, updateData)
Cette fonction met à jour une question existante dans la base de données en utilisant son ID.
Fonction : deleteQuestion(id)
Cette fonction supprime une question de la base de données en utilisant son ID.


4. src/answerController.js
Fonction : createAnswer(answerData)
Cette fonction permet de créer une nouvelle réponse dans la collection answers de MongoDB.
Fonction : getAnswerById(id)
Cette fonction récupère une réponse spécifique à partir de la collection answers de la base de données customer_satisfaction en utilisant son ID.
Fonction : updateAnswer(id, updateData)
Cette fonction met à jour une réponse existante dans la collection answers de la base de données customer_satisfaction en utilisant son ID.
Fonction : deleteAnswer(id)
Cette fonction supprime une réponse de la collection answers de la base de données customer_satisfaction en utilisant son ID.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des suggestions pour améliorer l'application ou si vous souhaitez ajouter de nouvelles fonctionnalités, n'hésitez pas à soumettre une pull request.


## Remerciements

Merci à tous les contributeurs et utilisateurs qui ont soutenu ce projet.


## Authors

ABC Corporation

