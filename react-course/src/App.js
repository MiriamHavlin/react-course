import { useState } from 'react';
import './App.css';
import CreateSurvey from './components/CreateSurvey';
//import DisplaySettings from './components/DisplaySetting';
// import Survey from './components/Survey';
import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Surveys from './components/Surveys';
import Home from './components/Home';
import Survey from './components/Survey';

function App() {
  const [inactiveColor, setInactiveColor] = useState('#FFFFFF');
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch('http://localhost:3000/api/surveys');
      const data = await res.json();
      setSurveys(data);
    })()
  }, [])

  return (
    <div className="App">
      <nav>
        <ul>
          {/* <li><a href="/">Home</a></li>
    <li><a href="/surveys">Surveys</a></li>
    <li><a href="/newSurvey">Create Survey</a></li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/surveys">Surveys</Link></li>
          <li><Link to="/newSurvey">Create Survey</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="surveys" element={<Surveys surveys={surveys} setSurveys={setSurveys} inactiveColor={inactiveColor} />} />
        <Route path="surveys/:code" element={<Survey inactiveColor={inactiveColor} setSurveys={setSurveys} />} />
        <Route path="newSurvey" element={<CreateSurvey surveys={surveys} setSurveys={setSurveys} />} />
      </Routes>
    </div>
    // <>
    //   <CreateSurvey surveys={surveys} setSurveys={setSurveys}></CreateSurvey>
    //   {/* <Survey name="Studies" questions={questions} lastDate = { new Date(2022, 11, 30) } responders={0} /> */}
    //   {/* <Survey name="Elections 2022" lastDate={new Date(2026, 6, 24)} responders={3000} />
    //   <Survey name="Elections 2022" /> */}
    //   <br />
    //   <DisplaySettings setInactiveColor={setInactiveColor} />
    // </>
  );
}

export default App;