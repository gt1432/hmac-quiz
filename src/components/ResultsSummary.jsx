import React from "react";
import { AwardIcon, RefreshCwIcon, BookOpenIcon, CheckCircleIcon, XCircleIcon, ShieldCheckIcon } from "./Icons";

export default function ResultsSummary({
  score,
  totalQuestions,
  onRestart,
  onToggleReview,
  showReview
}) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const incorrectCount = totalQuestions - score;

  let badge = {
    title: "Cryptographic Master",
    color: "badge-gold",
    description: "Exceptional mastery of HMAC architecture, RFC 2104, and message integrity defenses."
  };

  if (percentage < 60) {
    badge = {
      title: "Security Apprentice",
      color: "badge-bronze",
      description: "Good initial attempt! Review the fundamental concepts of symmetric key hashing and pad mechanics."
    };
  } else if (percentage < 90) {
    badge = {
      title: "Security Analyst",
      color: "badge-silver",
      description: "Strong understanding of HMAC and cryptographic authentication! Fine-tune timing leaks and pad details."
    };
  }

  return (
    <div className="card results-card">
      <div className="results-header">
        <div className="results-badge-icon">
          <AwardIcon className="w-12 h-12 text-teal-400" />
        </div>
        <h2 className="results-title">Quiz Completed!</h2>
        <p className="results-subtitle">HMAC Cryptographic Verification Assessment Summary</p>
      </div>

      {/* Main Score Display */}
      <div className="score-hero">
        <div className="score-circle-wrapper">
          <svg className="score-svg" viewBox="0 0 120 120">
            <circle
              className="score-svg-bg"
              cx="60"
              cy="60"
              r="52"
              fill="none"
              strokeWidth="10"
            />
            <circle
              className="score-svg-fill"
              cx="60"
              cy="60"
              r="52"
              fill="none"
              strokeWidth="10"
              strokeDasharray={2 * Math.PI * 52}
              strokeDashoffset={2 * Math.PI * 52 * (1 - score / totalQuestions)}
              strokeLinecap="round"
            />
          </svg>
          <div className="score-center-text">
            <span className="score-percentage">{percentage}%</span>
            <span className="score-ratio">{score} / {totalQuestions}</span>
          </div>
        </div>

        <div className="rank-badge-box">
          <span className={`rank-pill ${badge.color}`}>
            <ShieldCheckIcon className="w-4 h-4 mr-1 inline" />
            {badge.title}
          </span>
          <p className="rank-desc">{badge.description}</p>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="results-grid">
        <div className="metric-box metric-correct">
          <div className="metric-icon-wrap">
            <CheckCircleIcon className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="metric-info">
            <span className="metric-number">{score}</span>
            <span className="metric-label">Correct Answers</span>
          </div>
        </div>

        <div className="metric-box metric-incorrect">
          <div className="metric-icon-wrap">
            <XCircleIcon className="w-6 h-6 text-rose-400" />
          </div>
          <div className="metric-info">
            <span className="metric-number">{incorrectCount}</span>
            <span className="metric-label">Incorrect Answers</span>
          </div>
        </div>

        <div className="metric-box metric-total">
          <div className="metric-icon-wrap">
            <AwardIcon className="w-6 h-6 text-teal-400" />
          </div>
          <div className="metric-info">
            <span className="metric-number">{totalQuestions}</span>
            <span className="metric-label">Total Questions</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="results-actions">
        <button
          type="button"
          className="btn-primary btn-review"
          onClick={onToggleReview}
        >
          <BookOpenIcon className="w-5 h-5 mr-2" />
          <span>{showReview ? "Hide Answer Review" : "Review All Answers"}</span>
        </button>

        <button
          type="button"
          className="btn-secondary btn-restart"
          onClick={onRestart}
        >
          <RefreshCwIcon className="w-5 h-5 mr-2" />
          <span>Restart Quiz</span>
        </button>
      </div>
    </div>
  );
}
