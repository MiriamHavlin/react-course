import { useState } from 'react';
import './App.css';
import CreateSurvey from './components/CreateSurvey';
import DisplaySettings from './components/DisplaySetting';
import Survey from './components/Survey';
import './enums/QuestionType';
import QuestionTypes from './enums/QuestionType';
import { useEffect } from 'react';

function App() {
  // const questions = [
  //   "Why did you choose this profession?",
  //   "How many hours a week you study?",
  //   "Do you do homework?"
  // ];
  const [inactiveColor, setInactiveColor] = useState('#FFFFFF');
  const [surveys, setSurveys] = useState([]);

  const questions = [{
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
  }];

  useEffect(() => {
    (async function() {
      const res = await fetch('http://localhost:3000/api/surveys');
      const data = await res.json();
      setSurveys(data);
    })()
  }, [])

  return (
    <>
      <ul>
        {surveys.map((s, ind) => <Survey key={s.code} code={s.code} name={s.name} lastDate={s.lastDate} inactiveColor={inactiveColor} setSurveys={setSurveys}></Survey>)}
      </ul>
      <CreateSurvey surveys={surveys} setSurveys={setSurveys}></CreateSurvey>
      {/* <Survey name="Studies" questions={questions} lastDate = { new Date(2022, 11, 30) } responders={0} /> */}
      {/* <Survey name="Elections 2022" lastDate={new Date(2026, 6, 24)} responders={3000} />
      <Survey name="Elections 2022" /> */}
      <br />
      <DisplaySettings setInactiveColor={setInactiveColor} />
    </>
  );
}

export default App;