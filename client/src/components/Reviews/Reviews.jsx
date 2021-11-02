import React from 'react';
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {},
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/reviews')
      .then((res) => {
        this.setState({
          review: res.data.results[0],
        });
      })
      .catch((err) => console.log('error', err));
  }

  render() {
    const {
      body, date, helpfulness, rating, recommend, response, reviewer_name, summary,
    } = this.state.review;
    console.log('req review', this.state.review);
    return (
      <div className="Reviews">
        <div id="ReviewStars">
          rating:
          {rating}
        </div>
        <div id="ReviewDate">
          date:
          {date}
        </div>
        <div id="ReviewSummary">
          summary:
          {summary}
        </div>
        <div id="ReviewBody">
          body:
          {body}
        </div>
        <div id="ReviewRecommend">
          recommend:
          {recommend}
        </div>
        <div id="ReviewName">
          Reviewer Name:
          {reviewer_name}
        </div>
        <div id="ReviewResponse">
          Response to Review:
          {response}
        </div>
        <div id="ReviewHelpfulness">
          Rating Helpfulness:
          {helpfulness}
        </div>
      </div>
    );
  }
}

export default Reviews;
