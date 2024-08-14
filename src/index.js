const { connectToDatabase } = require('./config/database');
const { createSurvey, getSurveyById, updateSurvey, deleteSurvey } = require('./surveyController');
const { createQuestion, getQuestionById, updateQuestion, deleteQuestion } = require('./questionController');
const { createAnswer, getAnswerById, updateAnswer, deleteAnswer } = require('./answerController');

async function main() {
    await connectToDatabase();

    const surveyData = {
        id: 1,
        name: "Enquête de Satisfaction 002",
        description: "Nouvelle enquête sur la satisfaction client.",
        createdAt: new Date(),
        createdBy: {
            employeeName: "John Doe",
            employeeRole: "Manager"
        }
    };

    const surveyResult = await createSurvey(surveyData);
    console.log('Survey created with ID:', surveyResult.insertedId);

    const survey = await getSurveyById(surveyResult.insertedId);
    console.log('Survey:', survey);

    await updateSurvey(surveyResult.insertedId, { name: "Updated Survey Name" });
    console.log('Survey updated.');

    await deleteSurvey(surveyResult.insertedId);
    console.log('Survey deleted.');

    
    const questionData = {
        surveyId: surveyResult.insertedId, 
        id: 1,
        questionTitle: "Comment évalueriez-vous notre service ?",
        options: ["Très satisfait", "Satisfait", "Peu satisfait", "Pas du tout satisfait"]
    };

    const questionResult = await createQuestion(questionData);
    console.log('Question created with ID:', questionResult.insertedId);

    const question = await getQuestionById(questionResult.insertedId);
    console.log('Question:', question);

    await updateQuestion(questionResult.insertedId, { questionTitle: "Updated Question Title" });
    console.log('Question updated.');

    await deleteQuestion(questionResult.insertedId);
    console.log('Question deleted.');

    
    const answerData = {
        id: 1,
        questionId: questionResult.insertedId, 
        answerText: "Très satisfait",
        respondent: {
            name: "Jane Doe",
            email: "jane.doe@example.com"
        }
    };

    const answerResult = await createAnswer(answerData);
    console.log('Answer created with ID:', answerResult.insertedId);

    const answer = await getAnswerById(answerResult.insertedId);
    console.log('Answer:', answer);

    await updateAnswer(answerResult.insertedId, { answerText: "Updated Answer Text" });
    console.log('Answer updated.');

    await deleteAnswer(answerResult.insertedId);
    console.log('Answer deleted.');
}

main().catch(console.error);
