/* eslint-disable eol-last */
import React from 'react';
import SearchBar from './SearchBar';
import QandAList from './QandAList';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Questions and Answers</div>
        <SearchBar />
        <QandAList />
        <button type="button">More Answered Questions</button>
        <button type="button">Add A Question +</button>
      </div>
    );
  }
}

export default QandA;