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
    return (
      <div>
        Q:
        <Question />
        A:
        <Answer />
      </div>
    );
  }
}

export default QandAEntry;