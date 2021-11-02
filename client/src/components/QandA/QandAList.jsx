/* eslint-disable eol-last */
import React from 'react';
import QandAEntry from './QandAEntry';

class QandAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <QandAEntry />
        <button type="button">Load More Answers</button>
      </div>
    );
  }
}

export default QandAList;