import { useState } from "react";

export const FEQ = ({ curData, isActive, toggle }) => {
  const { question, answer } = curData;

  return (
    <li>
      <div className="accordion-grid">
        <p>{question}</p>
        <button className={isActive ? "active-btn" : ""} onClick={toggle}>
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <p>{isActive && answer}</p>
    </li>
  );
};
