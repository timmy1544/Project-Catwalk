/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable eol-last */
import React from 'react';
import moment from 'moment';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let questionBody;
    let askerName;
    let questionDate;
    let convertedDate;
    if (this.props.question) {
      questionBody = this.props.question.question_body;
      askerName = this.props.question.asker_name;
      questionDate = this.props.question.question_date;
      convertedDate = moment(questionDate).format('MMMM Do[,] YYYY');
      // console.log('question info', questionBody, askerName, convertedDate);
    } else {
      questionBody = 'No Question Data';
      askerName = '';
      convertedDate = '';
    }
    return (
      <div>
        {questionBody}
        <br />
        {`${askerName}, ${convertedDate}`}
      </div>
    );
  }
}

export default Question;