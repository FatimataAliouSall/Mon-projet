const { getDb } = require('./config/database');
const { connectToDatabase } = require('./config/database');

async function createSurvey(surveyData) {
    const db = getDb();
    const existingAnswer = await db.collection('Questions').findOne({ id: surveyData.id });
    if (existingAnswer) {
        throw new Error(`La réponse avec l'ID ${surveyData.id} existe déjà.`);
    }
    const result = await db.collection('surveys').insertOne(surveyData);
    return result;
}

async function getSurveyById(id) {
    const db = getDb();
    const survey = await db.collection('surveys').findOne({ id: id });
    return survey;
}

async function updateSurvey(id, updateData) {
    const db = getDb();
    const result = await db.collection('surveys').updateOne({ id: id }, { $set: updateData });
    return result;
}

async function deleteSurvey(id) {
    const db = getDb();
    const result = await db.collection('surveys').deleteOne({ id: id });
    return result;
}

module.exports = { createSurvey, getSurveyById, updateSurvey, deleteSurvey };
