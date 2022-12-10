import './App.css';
import Survey from './components/Survey';
import './enums/QuestionType';
import QuestionTypes from './enums/QuestionType';

function App() {
  // const questions = [
  //   "Why did you choose this profession?",
  //   "How many hours a week you study?",
  //   "Do you do homework?"
  // ];
  const questions = [{
    questionText: "Why did you choose this profession?",
    type: QuestionTypes.Text
  }, {
    questionText: "How many hours a week you study?",
    type: QuestionTypes.Choice,
    options: ["10-15", "16-25", "25-35", "36-42"]
  }, {
    questionText: "I do homework",
    type: QuestionTypes.YesNo
  }];
  return (
    <>
      <Survey name="Studies" questions={questions} lastDate={new Date(2022, 11, 30)} responders={0} />
      {/* <Survey name="Elections 2022" lastDate={new Date(2026, 6, 24)} responders={3000} />
      <Survey name="Elections 2022" /> */}
    </>
  );
}

export default App;