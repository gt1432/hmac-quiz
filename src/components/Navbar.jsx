import React from "react";
import { ShieldCheckIcon, KeyIcon } from "./Icons";

export default function Navbar({ currentQuestion, totalQuestions, isCompleted }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <div className="brand-icon-wrapper">
            <ShieldCheckIcon className="brand-icon" />
            <span className="brand-pulse"></span>
          </div>
          <div className="brand-text">
            <div className="brand-title-row">
              <h1 className="brand-title">HMAC Master</h1>
              <span className="brand-badge">RFC 2104</span>
            </div>
            <p className="brand-subtitle">Hash-based Message Authentication Code Assessment</p>
          </div>
        </div>

        <div className="nav-stats">
          {!isCompleted ? (
            <div className="stat-pill">
              <span className="stat-dot"></span>
              <span className="stat-label">SESSION:</span>
              <span className="stat-value">Q{currentQuestion} of {totalQuestions}</span>
            </div>
          ) : (
            <div className="stat-pill completed">
              <span className="stat-dot success"></span>
              <span className="stat-label">STATUS:</span>
              <span className="stat-value">EVALUATION FINISHED</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
