const { getDb } = require('./config/database');
const { connectToDatabase } = require('./config/database');
async function createQuestion(questionData) {
    const db = getDb();
    const existingAnswer = await db.collection('Questions').findOne({ id: questionData.id });
    if (existingAnswer) {
        throw new Error(`La réponse avec l'ID ${questionData.id} existe déjà.`);
    }
    const result = await db.collection('questions').insertOne(questionData);
    return result;
}

async function getQuestionById(id) {
    const db = getDb();
    const question = await db.collection('questions').findOne({ id: id });
    return question;
}

async function updateQuestion(id, updateData) {
    const db = getDb();
    const result = await db.collection('questions').updateOne({ id: id }, { $set: updateData });
    return result;
}


async function deleteQuestion(id) {
    const db = getDb();
    const result = await db.collection('questions').deleteOne({ id: id });
    return result;
}

module.exports = { createQuestion, getQuestionById, updateQuestion, deleteQuestion };
