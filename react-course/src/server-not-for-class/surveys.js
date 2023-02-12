const QuestionTypes = require('./enums/QuestionType');
module.exports.surveys = [{
    code: 1,
    name: "elections 2022",
    lastDate: new Date(2022, 10, 1),
    responders: 15
},
{
    code: 2,
    name: "studies",
    lastDate: new Date(2033, 0, 1),
    responders: 114,
    questions: [{
        code: 1,
        questionText: "Why did you choose this profession?",
        type: QuestionTypes.Text
    }, {
        code: 2,
        questionText: "How many hours a week you study?",
        type: QuestionTypes.Choice,
        options: ["10-15", "16-25", "25-35", "36-42"]
    }, {
        code: 3,
        questionText: "I do homework",
        type: QuestionTypes.YesNo
    }]
}]