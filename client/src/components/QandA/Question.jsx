/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable eol-last */
import React from 'react';
import axios from 'axios';
import Answer from './Answer';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
    console.log('question component prop:', this.props);
  }

  render() {
    let questionBody;
    let questionID;
    if (this.props.question) {
      questionBody = this.props.question.question_body;
      questionID = this.props.question.question_id;
      // console.log('questionID', questionID);
    } else {
      questionBody = 'No Question Data';
      questionID = '';
    }
    return (
      <div>
        Q:
        {questionBody}
        <br />
        A:
        <Answer questionID={questionID} />
        {/* {this.state.answers.map((answer, index) => (
          <Answer answer={answer} key={index} />
        ))} */}
      </div>
    );
  }
}

export default Question;