/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable eol-last */
import React from 'react';
// import axios from 'axios';
import Answer from './Answer';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // answers: [],
    };
  }

  render() {
    let questionBody;
    let answersArray;
    if (this.props.question) {
      questionBody = this.props.question.question_body;
      // const answerIDs = Object.keys(this.props.question.answers);
      answersArray = Object.values(this.props.question.answers);
    } else {
      questionBody = 'No Question Data';
      answersArray = [];
    }
    return (
      <div>
        Q:
        <div>
          {questionBody}
        </div>
        <br />
        A:
        {answersArray.map((answerObj, index) => (
          <Answer answerObj={answerObj} key={index} />
        ))}
      </div>
    );
  }
}

export default Question;