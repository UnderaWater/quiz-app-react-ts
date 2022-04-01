import React, { useState } from 'react';
import QuestionCard from './Components/QuestionCard';

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  
  const startGame = () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>
        React Quiz
      </h1>
      <button className='start' onClick={startGame}>
        Start Game
      </button>
      <p className='score'>
        Score:
      </p>
      <p>
        Loading Questions...
      </p>
      <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question]}
        answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
      />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
