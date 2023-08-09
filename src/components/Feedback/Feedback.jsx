import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();

    if (totalFeedback === 0) {
      return 0;
    }

    return (good / totalFeedback) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const feedbackKeys = Object.keys(this.state);

    return (
      <div className="wrapper">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackKeys}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
