const { createSurvey, getAllSurveys, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, getAllQuestion, updateQuestion, deleteQuestion } = require('./questionModule');
const { createAnswer, getAllAnswer, updateAnswer, deleteAnswer } = require('./answerModule');

async function main() {
    
    const surveyData = {
        id: 2,
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
        surveyId: 2,
        title: "Comment évalueriez-vous notre service ?",
        type: "choix multiple",
        options: {
            minValue: 1,
            maxValue: 5,
            step: 1
        }
    };

    await createQuestion(questionData);
    
    await getAllQuestion();
   
    await updateQuestion(1, { title: "Updated Question Title" });
        

    await deleteQuestion(1);

    
    const answerData = {
        id: 1,
        questionId: 2, 
        title: "Très satisfait",
    };

    await createAnswer(answerData);

    await getAllAnswer();

    await updateAnswer(1, { title: "Updated Answer Title" });
    
    
    await deleteAnswer(1);
}

main().catch(console.error);