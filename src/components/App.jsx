import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notifications";
import PropTypes from 'prop-types';

export class App extends Component {
    
  static propTypes = {
    onLeaveFeedback: PropTypes.func,
  };

    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  changeRatings = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {

    const { good, neutral, bad } = this.state;
    const buttonNames = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.changeRatings}
          />
        </Section>
        
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
} 

