const { connectToDatabase } = require('./config/database');
const { createSurvey, getAllSurveys, updateSurvey, deleteSurvey } = require('./surveyController');
const { createQuestion, getQuestionById, updateQuestion, deleteQuestion } = require('./questionController');
const { createAnswer, getAllAnswer, updateAnswer, deleteAnswer } = require('./answerController');

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

    await createSurvey(surveyData);

    await getAllSurveys();

    await updateSurvey(2, { name: "Updated Survey Name" });

    await deleteSurvey(1);
    


    const questionData = {
        
        id: 2,
        questionTitle: "Comment évalueriez-vous notre service ?",
        options: ["Très satisfait", "Satisfait", "Peu satisfait", "Pas du tout satisfait"]
    };

    await createQuestion(questionData);
    
    await getQuestionById();
   
    await updateQuestion(2, { questionTitle: "Updated Question Title" });

    await deleteQuestion(1);

   
    
    const answerData = {
        id: 1,
        questionId: 2, 
        answerText: "Très satisfait",
        respondent: {
            name: "Jane Doe",
            email: "jane.doe@example.com"
        }
    };

    await createAnswer(answerData);

    await getAllAnswer();

    await updateAnswer(1, { answerText: "Updated Answer Text" });
    
    await deleteAnswer(1);
}

main().catch(console.error);