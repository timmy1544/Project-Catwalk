/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable eol-last */
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QandAList from './QandAList';
import AddQuestion from './AddQuestion';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentID: this.props.productId,
      questions: [],
      quantity: 2,
      modalShow: false,
    };
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  componentDidUpdate() {
    const { currentID } = this.state;
    const { productId } = this.props;
    if (currentID !== productId) {
      this.setState({
        currentID: productId,
      });
      this.getQuestions();
    }
  }

  handleMoreQuestions() {
    this.setState({ quantity: this.state.quantity + 2 });
  }

  handleAddQuestion(e) {
    this.setState({ modalShow: e });
  }

  getQuestions() {
    console.log('axios q id', this.state.currentID);
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
      addQuestion = <button type="button" className="moreQsandAddQsButton" onClick={this.handleMoreQuestions}>MORE ANSWERED QUESTIONS</button>;
    } else {
      addQuestion = '';
    }
    return (
      <div className="qAndASection">
        <div className="qTitle">QUESTIONS & ANSWERS</div>
        <SearchBar />
        <QandAList questions={this.state.questions.slice(0, this.state.quantity)} />
        {addQuestion}
        <button className="moreQsandAddQsButton" type="button" onClick={() => this.handleAddQuestion(true)}>ADD A QUESTION +</button>
        <AddQuestion
          show={this.state.modalShow}
          onHide={() => this.handleAddQuestion(false)}
        />
      </div>
    );
  }
}

export default QandA;