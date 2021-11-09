/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable eol-last */
import React from 'react';
import QandAEntry from './QandAEntry';

class QandAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { questions } = this.props;
    let quest;
    if (questions.length === 0) {
      quest = <QandAEntry />;
    } else {
      quest = questions.map((question, index) => (<QandAEntry question={question} key={index} />));
    }
    return (
      <div>
        {quest}
      </div>
    );
  }
}

export default QandAList;