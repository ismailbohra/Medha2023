import React, { useState } from 'react';
import './Quiz.css'; // Import your CSS file

const Quiz = () => {
  const questions = [
    {
      question: 'What instrument is this?',
      options: ['Guitar', 'Flute', 'Piano', 'Violin'],
      correctAnswer: 'Guitar',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
      correctAnswer: 'Mars',
    },
    // Add more questions as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz">
      <div>
      <h1 className="heading">Test Quiz</h1>
    </div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
            {/* <div className="image">
              <div className="image-container">
              </div>
            </div> */}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
