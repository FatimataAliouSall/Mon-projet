const { getDb } = require('./config/database');

async function createQuestion(questionData) {
    try {
        const db = getDb();
        const existingAnswer = await db.collection('questions').findOne({ id: questionData.id });
        if (existingAnswer) {
            throw new Error(`La réponse avec l'ID ${questionData.id} existe déjà.`);
        }
        const result = await db.collection('questions').insertOne(questionData);
        console.log("question ajouté");
        
        return result.insertedId;
    } catch (error) {
        console.log(error.message)
    }
}

async function getQuestionById() {
    
    try {
        const db = getDb();
        const question = await db.collection('questions').find({ }).toArray();
        if (question.length === 0) {
            throw new Error("aucune question n'est trouvée")
        }
        console.log('Question:', question);
    } catch (error) {
        console.log(error.message)
    }
}

async function updateQuestion(id, updateData) {
    try {
        const db = getDb();
        const result = await db.collection('questions').updateOne({ id }, { $set: updateData });
        const existingAnswer = await db.collection('questions').findOne({ id: id });
        if (!existingAnswer) {
            throw new Error(`La question avec l'ID ${id} n'existe pas.`);
        }
        console.log('Question est modifiée.');
        return result;
    } catch (error) {
        console.log(error.message)
    }
}


async function deleteQuestion(id) {
    try {
        const db = getDb();
        const existingAnswer = await db.collection('questions').findOne({ id: id });
        if (!existingAnswer) {
            throw new Error(`La question avec l'ID ${id} n'existe pas.`);
        }
        const result = await db.collection('questions').deleteOne({ id: id });
        console.log('Question deleted.');
        return result;
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { createQuestion, getQuestionById, updateQuestion, deleteQuestion };
