/* eslint-disable react/destructuring-assignment */
/* eslint-disable eol-last */
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QandAList from './QandAList';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentID: this.props.productId,
      questions: [],
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    // axios.get(`/qa/questions/?product_id=${this.state.currentID}`)
    axios.get('/qa')
      .then((response) => {
        this.setState({
          questions: response.data.results,
        });
      })
      .catch((err) => {
        throw Error('get questions err', err);
      });
  }

  render() {
    return (
      <div>
        <div>Questions and Answers</div>
        <SearchBar />
        <QandAList questions={this.state.questions} />
        <button type="button">More Answered Questions</button>
        <button type="button">Add A Question +</button>
      </div>
    );
  }
}

export default QandA;