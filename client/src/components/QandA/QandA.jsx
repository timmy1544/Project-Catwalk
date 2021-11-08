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
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    // const answersArray = [];
    // axios.get(`/qa/questions/?product_id=${this.state.currentID}`)
    axios.get(`/qa/questions/${this.state.currentID}`)
      .then((response) => {
        // console.log('axios response data', response.data.results);
        const questionData = response.data.results;
        this.setState({
          questions: questionData,
        });
        // for (let i = 0; i < questionData.length; i++) {
        //   axios.get(`/qa/questions/${questionData[i].question_id}/answers`)
        //     .then((answers) => {
        //       console.log('second axios request', answers.data);
        //       answersArray.push(answers.data);
        //       console.log('answers array', answersArray);
        //     });
        //   this.setState({
        //     answers: answersArray,
        //   });
        //   console.log('answer state', this.state.answers);
        // }
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