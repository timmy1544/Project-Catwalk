/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable eol-last */
import React from 'react';
import moment from 'moment';
import axios from 'axios';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHelpfulClick: false,
      helpfulCount: this.props.answerObj.helpfulness,
      reportClick: false,
    };
    this.handleAnswerHelpfulClick = this.handleAnswerHelpfulClick.bind(this);
    this.handleAnswerReportClick = this.handleAnswerReportClick.bind(this);
  }

  handleAnswerHelpfulClick() {
    const answerID = this.props.answerObj.answer_id;
    if (this.state.isHelpfulClick === false) {
      this.setState({ isHelpfulClick: true });
      axios.put(`/qa/answers/${answerID}/helpful`)
        .then(() => this.setState({ helpfulCount: this.state.helpfulCount + 1 }))
        .catch((err) => { throw Error('axios helpful error: ', err); });
    }
  }

  handleAnswerReportClick() {
    const answerID = this.props.answerObj.answer_id;
    if (this.state.reportClick === false) {
      this.setState({ reportClick: true });
      axios.put(`/qa/answers/${answerID}/report`)
        .catch((err) => { throw Error('axios report error: ', err); });
    }
  }

  render() {
    let reportText;
    const answer = this.props.answerObj;
    const { date } = answer;
    const answerConvertedDate = moment(date).format('MMMM Do[,] YYYY');
    if (this.state.reportClick === false) {
      reportText = 'Report';
    } else {
      reportText = 'Reported';
    }
    return (
      <div>
        {answer.body}
        <br />
        by
        {' '}
        {answer.answerer_name}
        ,
        {' '}
        {answerConvertedDate}
        {' '}
        |  Helpful?
        {' '}
        <span className="qandalink" onClick={this.handleAnswerHelpfulClick}>Yes</span>
        (
        {this.state.helpfulCount}
        )
        {' '}
        |
        {' '}
        <span className="qandalink" onClick={this.handleAnswerReportClick}>
          {reportText}

        </span>
      </div>
    );
  }
}

export default Answer;