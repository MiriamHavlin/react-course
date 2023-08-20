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
import ErrorPage from './components/ErrorPage';
import SurveysList from './components/SurveysList';
import StatusBar from './components/StatusBar';
import LogInOrSignupButton from './components/Auth0Components/Buttons/LogInOrSignupButton'
import LogoutButton from './components/Auth0Components/Buttons/LogoutButton'

function App() {
  const [inactiveColor, setInactiveColor] = useState('#FFFFFF');
  const [surveys, setSurveys] = useState([]);
  const port = process.env.REACT_APP_API_SERVER_PORT;
  const url = process.env.REACT_APP_API_SERVER_URL;
  useEffect(() => {
    (async function () {
      const res = await fetch(`${url}:${port}/api/surveys`);
      const data = await res.json();
      setSurveys(data);
    })()
  }, [])

  return (
    <div className="App">
      <StatusBar />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/surveys">Surveys</Link></li>
          <li><Link to="/surveys/new">Create Survey</Link></li>
          <LogInOrSignupButton btnText='Log In' />
          <br />
          <LogInOrSignupButton btnText='Sigh Up' screenHint='signup' />
          <br />
          <LogoutButton />

        </ul>
      </nav>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="surveys" element={<Surveys />}>
          <Route path=":code" element={<Survey inactiveColor={inactiveColor} setSurveys={setSurveys} />} />
          <Route path="new" element={<CreateSurvey surveys={surveys} setSurveys={setSurveys} />} />
          <Route index element={<SurveysList surveys={surveys} setSurveys={setSurveys} inactiveColor={inactiveColor} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;