/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable eol-last */
import axios from 'axios';
import React from 'react';
// import axios from 'axios';
import Answer from './Answer';

class QandAEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
    // console.log('question component prop:', this.props);
  }

  componentDidMount() {
    this.getAnswers();
  }

  getAnswers() {
    if (this.props.question) {
      const questionID = this.props.question.question_id;
      console.log('questionID', questionID);
      axios.get(`/qa/questions/${questionID}/answers`)
        .then((answers) => {
          console.log('axios answers', answers.data.results);
          this.setState({
            answers: answers.data.results,
          });
        });
    }
  }

  render() {
    let questionBody;
    if (this.props.question) {
      questionBody = this.props.question.question_body;
    } else {
      questionBody = 'No Question Data';
    }
    return (
      <div>
        Q:
        {questionBody}
        <br />
        A:
        {this.state.answers.map((answerObj, index) => (
          <Answer answerObj={answerObj} key={index} />
        ))}
        <button type="button">Load More Answers</button>
      </div>
    );
  }
}

export default QandAEntry;