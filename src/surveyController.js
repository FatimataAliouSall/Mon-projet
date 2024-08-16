const { getDb } = require('./config/database');
// const { connectToDatabase } = require('./config/database');

async function createSurvey(surveyData) {
    const db = getDb();
    const existingAnswer = await db.collection('Questions').findOne({ id: surveyData.id });
    if (existingAnswer) {
        throw new Error(`La réponse avec l'ID ${surveyData.id} existe déjà.`);
    }
    const result = await db.collection('surveys').insertOne(surveyData);
    console.log("Enquete ajouté");
    
    return result;
}

async function getAllSurveys() {
    const db = getDb();
    const surveys = await db.collection('surveys').find().toArray();
    return surveys;
}


async function updateSurvey(id, updateData) {
    const db = getDb();
    const result = await db.collection('surveys').updateOne({ id: id }, { $set: updateData });
    console.log("Equete modifié");
    
    return result;
}

async function deleteSurvey(id) {
    const db = getDb();
    const result = await db.collection('surveys').deleteOne({ id: id });
    return result;
}

module.exports = {createSurvey, getAllSurveys, updateSurvey, deleteSurvey };
