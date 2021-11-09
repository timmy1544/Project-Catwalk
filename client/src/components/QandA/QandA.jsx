/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
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
      currentID: this.props.productId,
      questions: [],
      quantity: 2,
    };
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  handleMoreQuestions() {
    this.setState({ quantity: this.state.quantity + 2 });
  }

  getQuestions() {
    axios.get(`/qa/questions/${this.state.currentID}`)
      .then((response) => {
        const questionData = response.data.results;
        this.setState({
          questions: questionData,
          maxQuantity: questionData.length,
        });
      })
      .catch((err) => {
        throw Error('get questions err', err);
      });
  }

  render() {
    let addQuestion;
    if (this.state.quantity < this.state.maxQuantity) {
      addQuestion = <button type="button" onClick={this.handleMoreQuestions}>More Answered Questions</button>;
    } else {
      addQuestion = '';
    }
    return (
      <div>
        <div>Questions and Answers</div>
        <SearchBar />
        <QandAList questions={this.state.questions.slice(0, this.state.quantity)} />
        {addQuestion}
        <button type="button">Add A Question +</button>
      </div>
    );
  }
}

export default QandA;