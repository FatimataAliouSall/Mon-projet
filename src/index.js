const { connectToDatabase } = require('./config/database');
const { createSurvey, getAllSurveys, updateSurvey, deleteSurvey } = require('./surveyController');
const { createQuestion, getQuestionById, updateQuestion, deleteQuestion } = require('./questionController');
const { createAnswer, getAllAnswer, updateAnswer, deleteAnswer } = require('./answerController');

async function main() {
    await connectToDatabase();
        
        // Appelle des fonctions après l'initialisation de la base de données
        // const surveys = await getAllSurveys();
        // console.log(surveys);

    // const surveyData = {
    //     id: 1,
    //     name: "Enquête de Satisfaction 002",
    //     description: "Nouvelle enquête sur la satisfaction client.",
    //     createdAt: new Date(),
    //     createdBy: {
    //         employeeName: "John Doe",
    //         employeeRole: "Manager"
    //     }
    // };

    // const surveyResult = await createSurvey(surveyData);
    // console.log('Survey created with ID:', surveyResult.insertedId);

    // const survey = await getSurveyById();
    // console.log('Survey:', survey);

    // await updateSurvey(1, { name: "Updated Survey Name" });
    
   


    // await deleteSurvey(2);
    // console.log('Survey deleted.');

    
    const questionData = {
        
        id: 1,
        questionTitle: "Comment évalueriez-vous notre service ?",
        options: ["Très satisfait", "Satisfait", "Peu satisfait", "Pas du tout satisfait"]
    };

    // const questionResult = await createQuestion(questionData);
    

    const question = await getQuestionById();
    console.log('Question:', question);

    // await updateQuestion(1, { questionTitle: "Updated Question Title" });
    // console.log('Question updated.');

    // await deleteQuestion(3);
    // console.log('Question deleted.');

    
    // const answerData = {
    //     id: 1,
    //     questionId: 2, 
    //     answerText: "Très satisfait",
    //     respondent: {
    //         name: "Jane Doe",
    //         email: "jane.doe@example.com"
    //     }
    // };

    // const answerResult = await createAnswer(answerData);
    // console.log('Answer created with ID:', answerResult.insertedId);

    // const answer = await getAllAnswer();
    // console.log('Answer:', answer);

    // await updateAnswer(1, { answerText: "Updated Answer Text" });
    // console.log('Answer updated.');

    await deleteAnswer(1);
    console.log('Answer deleted.');
}

main().catch(console.error);
