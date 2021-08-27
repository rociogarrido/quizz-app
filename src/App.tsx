import React, {useState} from 'react';
// components
import QuestionCard from './components/QuestionCard';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  }

  const nextQuestion = () => {
  }

  return (
    <div className="App">
      <h1>
        Welcome to React Quiz
      </h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard questionNumber={number + 1}/>
        <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
