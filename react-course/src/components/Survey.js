import './Survey.css';
import SurveyQuestion from './SurveyQuestion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Survey(props) {
    const { code } = useParams();
    const [codeInState] = useState(code);//can be in single row
    const [survey, setSurvey] = useState({});
    let { inactiveColor, setSurveys } = props;

    // const [numResponses, setNumResponses] = useState(responders);
    // const [isFilled, setIsFilled] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [surveyData, setSurveyData] = useState({
        numResponses: survey.responders,
        isFilled: false
    });
    const inactiveStyle = { color: 'red', fontWeight: 750 }
    const audience = ["students", "teachers", "interested in studies"];

    const [seconds, setSeconds] = useState(0);

    function SendResponse(e) {
        alert(surveyData.numResponses);
        //state - 1
        // setIsFilled(true)
        // setNumResponses(prevNumResponses => prevNumResponses + 1);
        //state - 2
        // setSurveyData(sd => {
        //     sd.isFilled = true;
        //     sd.numResponses++;
        //     return sd;
        // })
        //state - 3
        const sd = { ...surveyData };
        sd.isFilled = true;
        sd.numResponses++;
        setSurveyData(sd);
    }
    function tick() {
        //console.log(`timer tick in ${code}`);
        //setCurrentTime(new Date().toLocaleTimeString());
        setSeconds(seconds => seconds + 1);
    }
    useEffect(() => {
        // let timerId = setInterval(tick, 1000);
        // return () => clearInterval(timerId);
    }, []);
    useEffect(() => {
        if (seconds >= 10) {
            document.title = 'you are here already 5 minutes, great!';
        }
    }, [seconds])
    useEffect(() => {
        let url = `http://localhost:3000/api/surveys/${codeInState}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSurvey(data);
            })
    }, [codeInState])

    return (
        <div style={survey.lastDate >= new Date() ? { backgroundColor: inactiveColor } : {}}>
            <h1>Survey Component {code}</h1>
            <h2>{currentTime}</h2>
            <h2 className='nice' >Name of Survey: {survey.name} code:{survey.code}</h2>
            {survey.lastDate >= new Date() ?
                <span>active until {survey.lastDate.toDateString()}</span> :
                <span style={inactiveStyle}>the survey is inactive</span>}
            <br />
            <span>Responders: {surveyData.numResponses}</span>
            {survey.responders >= 3000 && <span style={{ backgroundColor: "yellow" }}>Popular Survey!</span>}
            <br />
            <h4>Audience</h4>
            {/* <ul>
                {audience.map(a => <li key={a}>{a}</li>)}
            </ul> */}
            {/* <ol>
                {props.questions.map((q, index) => <li key={index}>{q}</li>)}
            </ol> */}
            <ol>
                {survey.questions && survey.questions.map((q, index) =>
                    <li key={index}>
                        <SurveyQuestion index={index} question={q} />
                    </li>
                )}
            </ol>
            <button type="button" onClick={SendResponse}>Send</button>
            <button type="button" onClick={() => {
                props.setSurveys(surveys => surveys.filter(s => s.code !== code));
            }}>I don't want to answer this surevy</button>
            {surveyData.isFilled && <p>Thank you for responding to this survey!</p>}
        </div >
    );
}
Survey.defaultProps = { responders: 0, lastDate: new Date(), questions: [] }

export default Survey;