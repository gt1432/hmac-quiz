import React from "react";
import { ArrowRightIcon } from "./Icons";

export default function AnswerFeedback({
  isCorrect,
  isLastQuestion,
  onNextQuestion
}) {
  return (
    <div className={`feedback-card ${isCorrect ? "feedback-correct" : "feedback-incorrect"}`}>
      <div className="feedback-status-banner">
        <span className="feedback-result-text">
          {isCorrect ? "CORRECT" : "WRONG"}
        </span>
      </div>

      <div className="feedback-actions">
        <button
          onClick={onNextQuestion}
          className="btn-primary btn-next"
          type="button"
          autoFocus
        >
          <span>{isLastQuestion ? "View Score" : "Next Question"}</span>
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
