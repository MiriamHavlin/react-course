import QuestionTypes from '../enums/QuestionType';

function SurveyQuestion(props) {
    const { question, index } = props;
    return (<>
        {question.type === QuestionTypes.YesNo && <input type="checkbox" />}
        {question.questionText}<br />
        {question.type === QuestionTypes.Text ? <input />
            : (question.type === QuestionTypes.Choice &&
                question.options.map((opt, ind) => <div key={ind + opt}>
                    <input id={ind + opt} type="radio" name={index} />
                    <label htmlFor={ind + opt}>{opt}</label>
                </div>))}
    </>);
}

export default SurveyQuestion;