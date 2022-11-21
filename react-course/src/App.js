import './App.css';
import Survey from './components/Survey';

function App() {
  return (
    <>
      <Survey name="Elections 2021" lastDate={new Date(2021, 4, 25)} answers={1562} />
      <Survey name="Elections 2022" lastDate={new Date(2026, 6, 24)} answers={3000} />
      <Survey name="Elections 2022" />
    </>
  );
}

export default App;