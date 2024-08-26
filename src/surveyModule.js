const { connectToDatabase } = require('./config/database');


async function createSurvey(surveyData) {
    try {
        const db = await connectToDatabase();

        // Vérifier si l'ID du survey existe déjà
        const existingSurvey = await db.collection("surveys").findOne({ id: surveyData.id });
        if (existingSurvey) {
            throw new Error(`La survey avec l'ID ${surveyData.id} existe déjà.`);
        }

        
        // Ajouter le nouveau survey
        const result = await db.collection("surveys").insertOne(surveyData);
        console.log("Survey ajouté");

        return result;
    } catch (error) {
        console.log(error.message);
    }
}




async function getAllSurveys() {
    
    try {
        const db = await connectToDatabase();
        const survey = await db.collection('surveys').find({ }).toArray();
        if (survey.length === 0) {
            throw new Error("aucune surveys n'est trouvée")
        }
        console.log('Survey:', survey);
    } catch (error) {
        console.log(error.message)
    }
}





async function updateSurvey(id, updateData) {
    try {
        const db = await connectToDatabase();
        const existingSurvey = await db.collection('surveys').findOne({ id: id });
        if (!existingSurvey) {
            throw new Error(`La survey avec l'ID ${id} n'existe pas.`);
        }
        const result = await db.collection('surveys').updateOne({ id }, { $set: updateData });
        console.log('survey est modifiée.');
        return result;
    } catch (error) {
        console.log(error.message)
    }
}



async function deleteSurvey(id) {
    try {
        const db = await connectToDatabase();
        const existingSurvey = await db.collection('surveys').findOne({ id: id });
        if (!existingSurvey) {
            throw new Error(`La survey avec l'ID ${id} n'existe pas.`);
        }
        const result = await db.collection('surveys').deleteOne({ id: id });
        console.log('Survey deleted.');
        return result;
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {createSurvey, getAllSurveys, updateSurvey, deleteSurvey };
