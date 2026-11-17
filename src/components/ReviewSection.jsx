import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon, KeyIcon, BookOpenIcon } from "./Icons";

export default function ReviewSection({ questions, userAnswers = [] }) {
  const [filter, setFilter] = useState("all"); // "all", "correct", "incorrect"

  const filteredQuestions = questions.filter((q, index) => {
    const answer = userAnswers[index];
    if (filter === "correct") return answer?.isCorrect;
    if (filter === "incorrect") return !answer?.isCorrect;
    return true;
  });

  return (
    <div className="review-section">
      <div className="review-header">
        <div className="review-title-group">
          <BookOpenIcon className="w-6 h-6 text-teal-400" />
          <h3 className="review-heading">Comprehensive Answers Review</h3>
        </div>

        {/* Filter controls */}
        <div className="filter-pills">
          <button
            type="button"
            className={`filter-btn ${filter === "all" ? "filter-active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All ({questions.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === "correct" ? "filter-active" : ""}`}
            onClick={() => setFilter("correct")}
          >
            Correct ({userAnswers.filter((a) => a?.isCorrect).length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === "incorrect" ? "filter-active" : ""}`}
            onClick={() => setFilter("incorrect")}
          >
            Incorrect ({userAnswers.filter((a) => !a?.isCorrect).length})
          </button>
        </div>
      </div>

      <div className="review-list">
        {filteredQuestions.map((q) => {
          const originalIndex = questions.findIndex((item) => item.id === q.id);
          const answer = userAnswers[originalIndex];
          const isCorrect = answer?.isCorrect;
          const userSelectedKey = answer?.selectedOption;
          const correctKey = q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`card review-card ${isCorrect ? "review-correct" : "review-incorrect"}`}
            >
              <div className="review-card-top">
                <div className="review-q-num">
                  <span className="q-badge">Question {originalIndex + 1}</span>
                  <span className={`result-tag ${isCorrect ? "tag-correct" : "tag-incorrect"}`}>
                    {isCorrect ? (
                      <>
                        <CheckCircleIcon className="w-4 h-4 mr-1 inline" /> Correct
                      </>
                    ) : (
                      <>
                        <XCircleIcon className="w-4 h-4 mr-1 inline" /> Incorrect
                      </>
                    )}
                  </span>
                </div>
              </div>

              <h4 className="review-question-text">{q.question}</h4>

              {/* Options breakdown */}
              <div className="review-options-grid">
                {["A", "B", "C", "D"].map((optKey) => {
                  const optText = q.options[optKey];
                  const isUserSelection = userSelectedKey === optKey;
                  const isCorrectOption = correctKey === optKey;

                  let optClass = "review-opt";
                  if (isCorrectOption) {
                    optClass += " review-opt-correct";
                  } else if (isUserSelection && !isCorrect) {
                    optClass += " review-opt-wrong";
                  }

                  return (
                    <div key={optKey} className={optClass}>
                      <span className="review-opt-key">{optKey}</span>
                      <span className="review-opt-text">{optText}</span>
                      <div className="review-opt-indicators">
                        {isCorrectOption && (
                          <span className="pill-correct">Correct Answer</span>
                        )}
                        {isUserSelection && (
                          <span className={`pill-user ${isCorrect ? "user-valid" : "user-invalid"}`}>
                            Your Choice
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="review-explanation">
                <div className="explanation-title-row">
                  <KeyIcon className="w-4 h-4 text-teal-400" />
                  <strong>Explanation:</strong>
                </div>
                <p>{q.explanation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
