const { connectToDatabase } = require('./config/database');

async function createQuestion(questionData) {
    try {
        const db = await connectToDatabase();

        
        const existingQuestion = await db.collection('questions').findOne({ id: questionData.id });
        if (existingQuestion) {
            throw new Error(`La question avec l'ID ${questionData.id} existe déjà.`);
        }

        
        
        const existingServeys = await db.collection('surveys').findOne({ id: questionData.surveyId });
        if (!existingServeys) {
            throw new Error(`La réponse avec l'ID ${questionData.surveyId} existe déjà.`);
        }

        // Ajouter la nouvelle question
        const result = await db.collection('questions').insertOne(questionData);
        console.log("Question ajoutée");

        return result.insertedId;
    } catch (error) {
        console.log(error.message);
    }
}




async function getAllQuestion() {
    
    try {
        const db =  await connectToDatabase();
        const question = await db.collection('questions').find({ }).toArray();
        if (question.length === 0) {
            throw new Error("aucune question n'est trouvée")
        }
        console.log('questions:', question);
    } catch (error) {
        console.log(error.message)
    }
}
async function updateQuestion(id, updateData) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection('questions').updateOne({ id }, { $set: updateData });
        const existingQuestion = await db.collection('questions').findOne({ id: id });
        if (!existingQuestion) {
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
        const db = await connectToDatabase();
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

module.exports = { createQuestion, getAllQuestion, updateQuestion, deleteQuestion };
