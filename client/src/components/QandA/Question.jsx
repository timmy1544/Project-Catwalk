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
    console.log('question component prop:', this.props);
  }

  render() {
    let questionBody;
    // let questionID;
    let answersArray;
    if (this.props.question) {
      questionBody = this.props.question.question_body;
      // questionID = this.props.question.question_id;
      // console.log('questionID', questionID);
      console.log('props question', this.props.question.answers);
      const answerIDs = Object.keys(this.props.question.answers);
      answersArray = Object.values(this.props.question.answers);
      console.log('answer ID arrays', answerIDs);
      console.log('answer object array', answersArray);
    } else {
      questionBody = 'No Question Data';
      // questionID = '';
      answersArray = [];
    }
    return (
      <div>
        Q:
        {questionBody}
        <br />
        A:
        {/* <Answer answers={questionID} /> */}
        {answersArray.map((answerObj, index) => (
          <Answer answerObj={answerObj} key={index} />
        ))}
      </div>
    );
  }
}

export default Question;