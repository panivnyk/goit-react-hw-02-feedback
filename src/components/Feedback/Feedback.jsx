import { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled
import {
  Div,
  PHeader,
  Button,
  PStat,
  Span,
  SpanTotal,
  SpanPercentage,
} from 'components/Feedback/Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return Number.parseInt(
      this.state.good > 0
        ? (this.state.good / this.countTotalFeedback()) * 100
        : 0
    );
  };

  render() {
    return (
      <Div>
        <PHeader>Please leave feedback</PHeader>
        <div>
          <Button type="button" onClick={this.handleBtnGood}>
            Good
          </Button>
          <Button type="button" onClick={this.handleBtnNeutral}>
            Neutral
          </Button>
          <Button type="button" onClick={this.handleBtnBad}>
            Bad
          </Button>
        </div>
        <PStat>Statistics:</PStat>
        <Span>Good: {this.state.good}</Span>
        <Span>Neutral: {this.state.neutral}</Span>
        <Span>Bad: {this.state.bad}</Span>
        <SpanTotal>Total: {this.countTotalFeedback()}</SpanTotal>
        <SpanPercentage>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </SpanPercentage>
      </Div>
    );
  }
}

export default Feedback;

// Feedback.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positive: PropTypes.number.isRequired,
// };
