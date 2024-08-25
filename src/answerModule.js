const { connectToDatabase } = require('./config/database');
async function createAnswer(answerData) {
    try {
        const db = await connectToDatabase();
        const existingAnswer = await db.collection('answers').findOne({ id: answerData.id });
        if (existingAnswer) {
            throw new Error(`La answer avec l'ID ${answerData.id} existe déjà.`);
        }

        const existingQuestion = await db.collection('questions').findOne({ id: answerData.questionId });
        if (!existingQuestion) {
            throw new Error(`La réponse avec l'ID ${questionData.surveyId} existe déjà.`);
        }

        const result = await db.collection('answers').insertOne(answerData);
        console.log("answer ajouté");
        
        return result.insertedId;
    } catch (error) {
        console.log(error.message)
    }
}



async function getAllAnswer() {
    
    try {
        const db = await connectToDatabase();
        const answer = await db.collection('answers').find({ }).toArray();
        if (answer.length === 0) {
            throw new Error("aucune answer n'est trouvée")
        }
        console.log('answers:', answer);
    } catch (error) {
        console.log(error.message)
    }
}


async function updateAnswer(id, updateData) {
    try {
        const db = await connectToDatabase();
        const existingAnswer = await db.collection('answers').findOne({ id: id });
        if (!existingAnswer) {
            throw new Error(`La answer avec l'ID ${id} n'existe pas.`);
        }
        const result = await db.collection('answers').updateOne({ id }, { $set: updateData });
        console.log('answers est modifiée.');
        return result;
    } catch (error) {
        console.log(error.message)
    }
}



async function deleteAnswer(id) {
    try {
        const db = await connectToDatabase();
        const existingAnswer = await db.collection('answers').findOne({ id: id });
        if (!existingAnswer) {
            throw new Error(`La answer avec l'ID ${id} n'existe pas.`);
        }
        const result = await db.collection('answers').deleteOne({ id: id });
        console.log('Answer deleted.');
        return result;
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { createAnswer, getAllAnswer, updateAnswer, deleteAnswer };
