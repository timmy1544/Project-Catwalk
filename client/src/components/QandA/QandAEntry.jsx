/* eslint-disable react/no-access-state-in-setstate */
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
      initialAnswers: [],
      click: false,
    };
    this.handleMoreAnswersClick = this.handleMoreAnswersClick.bind(this);
  }

  componentDidMount() {
    this.getAnswers();
  }

  handleMoreAnswersClick() {
    if (this.state.click === false) {
      this.setState({ click: true });
    } else {
      this.setState({ click: false });
    }
  }

  getAnswers() {
    if (this.props.question) {
      const questionID = this.props.question.question_id;
      // console.log('questionID', questionID);
      axios.get(`/qa/questions/${questionID}/answers`)
        .then((answers) => {
          // console.log('axios answers', answers.data.results);
          this.setState({
            answers: answers.data.results,
            initialAnswers: answers.data.results.slice(0, 2),
          });
        });
    }
  }

  render() {
    let questionBody;
    let answerBody;
    let loadMoreAnswersButton;
    if (this.props.question && this.state.click === false) {
      questionBody = this.props.question.question_body;
      answerBody = this.state.initialAnswers.map((answerObj, index) => (
        <Answer answerObj={answerObj} key={index} />
      ));
    } else if (this.props.question && this.state.click === true) {
      questionBody = this.props.question.question_body;
      answerBody = this.state.answers.map((answerObj, index) => (
        <Answer answerObj={answerObj} key={index} />
      ));
    } else {
      questionBody = 'No Question Data';
      answerBody = 'No Answer Data';
    }
    if (this.state.answers.length > 2) {
      loadMoreAnswersButton = <button type="button" onClick={this.handleMoreAnswersClick}>Load More Answers</button>;
    } else {
      loadMoreAnswersButton = '';
    }
    return (
      <div>
        Q:
        {questionBody}
        <br />
        A:
        {answerBody}
        {loadMoreAnswersButton}
      </div>
    );
  }
}

export default QandAEntry;