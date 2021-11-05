/* eslint-disable eol-last */
import React from 'react';
import moment from 'moment';
import axios from 'axios';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
    if (this.props.questionID) {
      const questionID = this.props.questionID;
    }
  }

  // componentDidMount() {
  //   this.getAnswers();
  // }

  // getAnswers() {
  //   if (this.props.questionID) {
  //     console.log('first ID', this.props.questionID);
  //     const questionID = this.props.questionID;
  //     // console.log('first ID', questionID);
  //     axios.get(`/qa/${questionID}/answers`)
  //       .then((response) => {
  //         console.log('second ID', questionID);
  //         console.log('inside axios questionid answers', response.data.results);
  //         this.setState({
  //           answers: response.data.results,
  //         });
  //       });
  //   }
  // }

  render() {
    let answerObj;
    let answerBody;
    let answerName;
    let answerDate;
    let answerConvertedDate;
    // if (this.props.answer) {
    //   answerObj = this.props.answer;
    //   answerBody = answerObj.body;
    //   answerName = answerObj.answerer_name;
    //   answerDate = answerObj.date;
    //   answerConvertedDate = moment(answerDate).format('MMMM Do[,] YYYY');
    //   console.log('converted date answer', answerConvertedDate);
    // } else {
    //   answerObj = {};
    //   answerBody = '';
    //   answerName = '';
    //   answerConvertedDate = '';
    // }
    return (
      <div>
        {answerBody}
        <br />
        by
        {' '}
        {answerName}
        ,
        {' '}
        {answerConvertedDate}
      </div>
    );
  }
}

export default Answer;