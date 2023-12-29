
import React from 'react';
import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <ul className="feedbackList">
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage.toFixed(2)}%</li>
      </ul>
    </div>
  );
};

export default Statistics;
