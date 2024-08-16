const { getDb } = require('./config/database');


async function createSurvey(surveyData) {
    try {
        const db = getDb();
        const existingSurvey = await db.collection('surveys').findOne({ id: surveyData.id });
        if (existingSurvey) {
            throw new Error(`La survey avec l'ID ${surveyData.id} existe déjà.`);
        }
        const result = await db.collection('surveys').insertOne(surveyData);
        console.log("survey ajouté");
        
        return result;
    } catch (error) {
        console.log(error.message)
    }
}



async function getAllSurveys() {
    
    try {
        const db = getDb();
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
        const db = getDb();
        const existingAnswer = await db.collection('surveys').findOne({ id: id });
        if (!existingAnswer) {
            throw new Error(`La surveys avec l'ID ${id} n'existe pas.`);
        }
        const result = await db.collection('surveys').updateOne({ id }, { $set: updateData });
        console.log('surveys est modifiée.');
        return result;
    } catch (error) {
        console.log(error.message)
    }
}



async function deleteSurvey(id) {
    try {
        const db = getDb();
        const existingAnswer = await db.collection('surveys').findOne({ id: id });
        if (!existingAnswer) {
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
