import './Survey.css';
import QuestionTypes from '../enums/QuestionType';

function Survey(props) {
    const { name, lastDate, answers } = props;
    const inactiveStyle = { color: 'red', fontWeight: 750 }
    const audience = ["students", "teachers", "interested in studies"];
    return (
        <div>
            <h1>Survey Component</h1>
            <h2 className='nice' >Name of Survey: {name}</h2>
            {lastDate >= new Date() ?
                <span>active until {lastDate.toDateString()}</span> :
                <span style={inactiveStyle}>the survey is inactive</span>}
            <br />
            {answers >= 3000 && <span style={{ backgroundColor: "yellow" }}>Popular Survey!</span>}
            <br />
            <h4>Audience</h4>
            <ul>
                {audience.map(a => <li key={a}>{a}</li>)}
            </ul>
            {/* <ol>
                {props.questions.map((q, index) => <li key={index}>{q}</li>)}
            </ol> */}
            <ol>
                {props.questions.map((q, index) =>
                    <li key={index}>
                        {q.type === QuestionTypes.YesNo && <input type="checkbox" />}
                        {q.questionText}<br />
                        {q.type === QuestionTypes.Text ? <input />
                            : (q.type === QuestionTypes.Choice &&
                                q.options.map((opt, ind) => <div key={ind + opt}>
                                    <input id={ind + opt} type="radio" name={index} />
                                    <label htmlFor={ind + opt}>{opt}</label>
                                </div>))}
                    </li>
                )}
            </ol>
            <button onClick={(e) => console.log('Thank You!!!')}>Send</button>
        </div>
    );
}
Survey.defaultProps = { answers: 0, lastDate: new Date() }

export default Survey;