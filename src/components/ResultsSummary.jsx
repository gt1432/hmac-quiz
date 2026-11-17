import React from "react";
import { RefreshCwIcon } from "./Icons";

export default function ResultsSummary({ score, totalQuestions, onRestart }) {
  return (
    <div className="card results-card">
      <h2 className="results-title">Quiz Finished</h2>
      <div className="score-box-only">
        <span className="score-label">Score</span>
        <span className="score-value">{score} / {totalQuestions}</span>
      </div>

      <div className="results-actions">
        <button
          type="button"
          className="btn-primary btn-restart"
          onClick={onRestart}
        >
          <RefreshCwIcon className="w-5 h-5 mr-2" />
          <span>Restart Quiz</span>
        </button>
      </div>
    </div>
  );
}
