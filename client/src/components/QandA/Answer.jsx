/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable eol-last */
import React from 'react';
import moment from 'moment';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const answer = this.props.answerObj;
    const { date } = answer;
    const answerConvertedDate = moment(date).format('MMMM Do[,] YYYY');
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
      </div>
    );
  }
}

export default Answer;