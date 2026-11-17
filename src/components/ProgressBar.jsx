import React from "react";

export default function ProgressBar({ current, total, userAnswers = [] }) {
  const percentage = Math.round(((current - 1) / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-meta">
        <div className="progress-step-info">
          <span className="progress-label">QUESTION PROGRESS</span>
          <span className="progress-numbers">
            <strong className="current-num">{current}</strong>
            <span className="divider">/</span>
            <span className="total-num">{total}</span>
          </span>
        </div>
        <div className="progress-percentage">
          <span>{Math.round(((current) / total) * 100)}% Complete</span>
        </div>
      </div>

      <div className="progress-track" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
        <div
          className="progress-fill"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>

      {/* Mini step indicators */}
      <div className="step-dots" aria-hidden="true">
        {Array.from({ length: total }).map((_, idx) => {
          const qNum = idx + 1;
          const answer = userAnswers[idx];
          let statusClass = "pending";
          if (answer) {
            statusClass = answer.isCorrect ? "correct" : "incorrect";
          } else if (qNum === current) {
            statusClass = "active";
          }

          return (
            <div
              key={idx}
              className={`step-dot ${statusClass}`}
              title={`Question ${qNum}`}
            >
              <span>{qNum}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
