const { createSurvey, getAllSurveys, updateSurvey, deleteSurvey } = require('./surveyController');
const { createQuestion, getAllQuestion, updateQuestion, deleteQuestion } = require('./questionController');
const { createAnswer, getAllAnswer, updateAnswer, deleteAnswer } = require('./answerController');

async function main() {
    
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
        
        id: 1,
        surveyId: 2,
        title: "Comment évalueriez-vous notre service ?",
       options: {
            minValue: 1,
            maxValue: 5,
            step: 1
        }
    };

    await createQuestion(questionData);
    
    await getAllQuestion();
   
    await updateQuestion(2, { questionTitle: "Updated Question Title" });

    await deleteQuestion(1);

   
    
    const answerData = {
        id: 1,
        questionId: 2, 
        answerText: "Très satisfait",
        response: {
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