import './Survey.css';
import SurveyQuestion from './SurveyQuestion';
import { useEffect, useState } from 'react';

function Survey(props) {
    let { code, name, lastDate, responders, inactiveColor } = props;
    // const [numResponses, setNumResponses] = useState(responders);
    // const [isFilled, setIsFilled] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [surveyData, setSurveyData] = useState({
        numResponses: responders,
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
    console.log(`timer tick in ${code}`);
    //setCurrentTime(new Date().toLocaleTimeString());
    setSeconds(seconds => seconds + 1);
}
    useEffect(() => {
        let timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, []);
    useEffect(() => {
        if (seconds >= 10) {
            document.title = 'you are here already 5 minutes, great!';
        }
    }, [seconds])

    return (
        <div style={lastDate >= new Date() ? { backgroundColor: inactiveColor } : {}}>
            <h1>Survey Component {code}</h1>
            <h2>{currentTime}</h2>
            <h2 className='nice' >Name of Survey: {name}</h2>
            {lastDate >= new Date() ?
                <span>active until {lastDate.toDateString()}</span> :
                <span style={inactiveStyle}>the survey is inactive</span>}
            <br />
            <span>Responders: {surveyData.numResponses}</span>
            {responders >= 3000 && <span style={{ backgroundColor: "yellow" }}>Popular Survey!</span>}
            <br />
            <h4>Audience</h4>
            {/* <ul>
                {audience.map(a => <li key={a}>{a}</li>)}
            </ul> */}
            {/* <ol>
                {props.questions.map((q, index) => <li key={index}>{q}</li>)}
            </ol> */}
            <ol>
                {props.questions.map((q, index) =>
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