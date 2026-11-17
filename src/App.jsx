import React, { useState } from "react";
import { questions } from "./data/questions";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";
import ResultsSummary from "./components/ResultsSummary";
import ReviewSection from "./components/ReviewSection";
import { ShieldCheckIcon, KeyIcon, LockIcon, HashIcon } from "./components/Icons";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleSelectOption = (optionKey) => {
    if (!isSubmitted) {
      setSelectedOption(optionKey);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isSubmitted) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const answerRecord = {
      questionId: currentQuestion.id,
      selectedOption: selectedOption,
      isCorrect: isCorrect,
      correctOption: currentQuestion.correctAnswer
    };

    setUserAnswers((prev) => [...prev, answerRecord]);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setUserAnswers([]);
    setScore(0);
    setQuizCompleted(false);
    setShowReview(false);
  };

  return (
    <div className="app-container">
      {/* Background glow effects */}
      <div className="cyber-glow cyber-glow-1" aria-hidden="true" />
      <div className="cyber-glow cyber-glow-2" aria-hidden="true" />
      <div className="cyber-grid-overlay" aria-hidden="true" />

      {/* Main Header */}
      <Navbar
        currentQuestion={currentIndex + 1}
        totalQuestions={totalQuestions}
        isCompleted={quizCompleted}
      />

      {/* Core Content Area */}
      <main className="main-content">
        {!quizCompleted ? (
          <div className="quiz-flow-wrapper">
            <ProgressBar
              current={currentIndex + 1}
              total={totalQuestions}
              userAnswers={userAnswers}
            />

            <QuestionCard
              question={currentQuestion}
              questionNumber={currentIndex + 1}
              totalQuestions={totalQuestions}
              selectedOption={selectedOption}
              onSelectOption={handleSelectOption}
              isSubmitted={isSubmitted}
              onSubmitAnswer={handleSubmitAnswer}
              onNextQuestion={handleNextQuestion}
            />
          </div>
        ) : (
          <div className="results-flow-wrapper">
            <ResultsSummary
              score={score}
              totalQuestions={totalQuestions}
              onRestart={handleRestart}
              onToggleReview={() => setShowReview((prev) => !prev)}
              showReview={showReview}
            />

            {showReview && (
              <ReviewSection
                questions={questions}
                userAnswers={userAnswers}
              />
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <span className="footer-tag">HMAC Architecture</span>
            <span className="footer-formula">HMAC(K, m) = H((K ⊕ opad) ∥ H((K ⊕ ipad) ∥ m))</span>
          </div>
          <div className="footer-right">
            <span>Built for High-Assurance Cryptographic Education • Render Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
