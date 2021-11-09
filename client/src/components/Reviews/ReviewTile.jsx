import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Rating from '@mui/material/Rating';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    const { helpfulness } = this.props.review;
    this.state = {
      helpfulClick: false,
      helpfulness,
    };
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
  }

  handleHelpfulClick() {
    const { helpfulClick, helpfulness } = this.state;
    if (helpfulClick === false) {
      const { review } = this.props;
      axios.put(`/reviews/${review.review_id}/helpful`)
        .then((response) => {
          console.log(response.data);
        })
        .then(() => {
          this.setState({
            helpfulClick: true,
            helpfulness: helpfulness + 1,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  handleReportClick() {
    const { review, getReviews } = this.props;
    axios.put(`/reviews/${review.review_id}/report`)
      .then((response) => {
        console.log(response.data);
      })
      .then(() => {
        getReviews();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { review } = this.props;
    const { helpfulness } = this.state;
    const convertedDate = moment(review.date).format('MMMM Do[,] YYYY');
    return (
      <div className="Reviews">
        Rating:
        <Rating id="ReviewStars" name="read-only" value={review.rating} readOnly />
        <div id="ReviewDate">
          date:
          {convertedDate}
        </div>
        <div id="ReviewSummary">
          summary:
          {review.summary}
        </div>
        <div id="ReviewBody">
          body:
          {review.body}
        </div>
        <div id="ReviewRecommend">
          recommend:
          {review.recommend}
        </div>
        <div id="ReviewName">
          Reviewer Name:
          {review.reviewer_name}
        </div>
        <div id="ReviewResponse">
          Response to Review:
          {review.response}
        </div>
        <div>
          Helpful?
          <span role="button" styling="link" id="helpfulBtn" onClick={this.handleHelpfulClick} onKeyDown={() => {}} tabIndex={0}> Yes</span>
          (
          {helpfulness}
          )
          {' '}
          |
          {' '}
          <span role="button" styling="link" id="reportBtn" onClick={this.handleReportClick} onKeyDown={() => {}} tabIndex={0}> Report </span>
        </div>
        <p>{'\n'}</p>
      </div>
    );
  }
}

export default ReviewTile;