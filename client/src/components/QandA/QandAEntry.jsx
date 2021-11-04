/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable eol-last */
import React from 'react';
import Question from './Question';
import Answer from './Answer';

class QandAEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { questions } = this.props;
    // console.log('questions entry', questions);
    let quest;
    if (questions.length === 0) {
      quest = <Question />;
    } else {
      quest = questions.map((question, index) => (<Question question={question} key={index} />));
    }
    return (
      <div>
        Q:
        {/* {questions.map((question, index) =>
          <Question question={question.question_body} key={index} />)} */}
        {quest}
        A:
        <Answer />
      </div>
    );
  }
}

export default QandAEntry;