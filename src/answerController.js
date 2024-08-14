const { getDb } = require('./config/database');
const { connectToDatabase } = require('./config/database');
async function createAnswer(answerData) {
    const db = getDb();
    const existingAnswer = await db.collection('Questions').findOne({ id: answerData.id });
    if (existingAnswer) {
        throw new Error(`La réponse avec l'ID ${answerData.id} existe déjà.`);
    }
    const result = await db.collection('answers').insertOne(answerData);
    return result;
}

async function getAnswerById(id) {
    const db = getDb();
    const answer = await db.collection('answers').findOne({ id: id });
    return answer;
}
async function updateAnswer(id, updateData) {
    const db = getDb();
    const result = await db.collection('answers').updateOne({ id: id }, { $set: updateData });
    return result;
}

async function deleteAnswer(id) {
    const db = getDb();
    const result = await db.collection('answers').deleteOne({ id: id });
    return result;
}

module.exports = { createAnswer, getAnswerById, updateAnswer, deleteAnswer };
