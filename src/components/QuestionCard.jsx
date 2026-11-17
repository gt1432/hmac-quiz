import React from "react";
import AnswerFeedback from "./AnswerFeedback";
import { CheckCircleIcon, XCircleIcon } from "./Icons";

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  onSelectOption,
  isSubmitted,
  onSubmitAnswer,
  onNextQuestion
}) {
  const optionKeys = ["A", "B", "C", "D"];
  const isLastQuestion = questionNumber === totalQuestions;
  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="card question-card">
      {/* Question Header */}
      <div className="question-header">
        <span className="question-meta-pill">
          QUESTION {questionNumber} OF {totalQuestions}
        </span>
      </div>

      {/* Question Title */}
      <h2 className="question-title">{question.question}</h2>

      {/* Options List */}
      <div className="options-grid" role="radiogroup" aria-label="Answer options">
        {optionKeys.map((key) => {
          const optionText = question.options[key];
          const isSelected = selectedOption === key;
          const isThisCorrect = key === question.correctAnswer;
          const isThisSelectedAndWrong = isSubmitted && isSelected && !isThisCorrect;

          let optionClass = "option-btn";
          if (!isSubmitted) {
            if (isSelected) {
              optionClass += " option-selected";
            }
          } else {
            // Submitted state
            if (isThisCorrect) {
              optionClass += " option-correct";
            } else if (isThisSelectedAndWrong) {
              optionClass += " option-incorrect";
            } else {
              optionClass += " option-dimmed";
            }
          }

          return (
            <button
              key={key}
              type="button"
              className={optionClass}
              onClick={() => !isSubmitted && onSelectOption(key)}
              disabled={isSubmitted}
              role="radio"
              aria-checked={isSelected}
              aria-disabled={isSubmitted}
            >
              <div className="option-badge">
                <span className="option-letter">{key}</span>
              </div>
              <div className="option-text">{optionText}</div>
              <div className="option-status-icon" aria-hidden="true">
                {isSubmitted && isThisCorrect && (
                  <CheckCircleIcon className="w-6 h-6 status-icon-correct" />
                )}
                {isThisSelectedAndWrong && (
                  <XCircleIcon className="w-6 h-6 status-icon-wrong" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Submit Button (Only shown before submission) */}
      {!isSubmitted && (
        <div className="question-actions">
          <button
            type="button"
            className="btn-primary btn-submit"
            onClick={onSubmitAnswer}
            disabled={!selectedOption}
          >
            <span>Submit Answer</span>
          </button>
          {!selectedOption && (
            <p className="select-prompt">Please select an option to continue.</p>
          )}
        </div>
      )}

      {/* Immediate Post-Submission Feedback */}
      {isSubmitted && (
        <AnswerFeedback
          isCorrect={isCorrect}
          isLastQuestion={isLastQuestion}
          onNextQuestion={onNextQuestion}
        />
      )}
    </div>
  );
}
