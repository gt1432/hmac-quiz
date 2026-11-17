import React from "react";
import { CheckCircleIcon, XCircleIcon, ArrowRightIcon, BookOpenIcon, KeyIcon } from "./Icons";

export default function AnswerFeedback({
  isCorrect,
  selectedOptionKey,
  selectedOptionText,
  correctOptionKey,
  correctOptionText,
  explanation,
  isLastQuestion,
  onNextQuestion
}) {
  return (
    <div className={`feedback-card ${isCorrect ? "feedback-correct" : "feedback-incorrect"}`}>
      {/* Banner */}
      <div className="feedback-banner">
        <div className="feedback-banner-icon">
          {isCorrect ? (
            <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
          ) : (
            <XCircleIcon className="w-8 h-8 text-rose-400" />
          )}
        </div>
        <div className="feedback-banner-text">
          <h3 className="feedback-status-title">
            {isCorrect ? "CORRECT" : "INCORRECT"}
          </h3>
          <p className="feedback-status-desc">
            {isCorrect
              ? "Great job! Your answer matches the HMAC cryptographic specification."
              : "Not quite. Review the cryptographic principle and correct answer below."}
          </p>
        </div>
      </div>

      {/* Answer Comparison Grid */}
      <div className="feedback-comparison">
        <div className={`comparison-box ${isCorrect ? "user-correct" : "user-wrong"}`}>
          <div className="comparison-tag">YOUR ANSWER</div>
          <div className="comparison-content">
            <span className="comparison-key">Option {selectedOptionKey}</span>
            <span className="comparison-text">{selectedOptionText}</span>
          </div>
        </div>

        <div className="comparison-box correct-reference">
          <div className="comparison-tag">CORRECT ANSWER</div>
          <div className="comparison-content">
            <span className="comparison-key">Option {correctOptionKey}</span>
            <span className="comparison-text">{correctOptionText}</span>
          </div>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="feedback-explanation">
        <div className="explanation-header">
          <KeyIcon className="w-5 h-5 text-teal-400" />
          <h4 className="explanation-title">Cryptographic Explanation</h4>
        </div>
        <p className="explanation-text">{explanation}</p>
      </div>

      {/* Next Question / Finish Action */}
      <div className="feedback-actions">
        <button
          onClick={onNextQuestion}
          className="btn-primary btn-next"
          type="button"
          autoFocus
        >
          <span>{isLastQuestion ? "View Final Results" : "Next Question"}</span>
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
