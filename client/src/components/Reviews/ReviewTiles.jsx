import React from 'react';
import axios from 'axios';

class ReviewTiles extends React.Component {
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
    const { helpfulClick } = this.state;
    if (helpfulClick === false) {
      const { review_id } = this.props.review;
      axios.put(`/reviews/${review_id}/helpful`)
        .then((response) => {
          console.log(response.data);
        })
        .then(() => {
          this.setState({
            helpfulClick: true,
            helpfulness: this.props.review.helpfulness + 1,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  handleReportClick() {
    const { review_id } = this.props.review;
    const { getReviews } = this.props;
    axios.put(`/reviews/${review_id}/report`)
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
    const {
      body, date, rating, recommend, response, reviewer_name, summary,
    } = this.props.review;
    const { helpfulness } = this.state;
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
        <button type="button" id="helpfulBtn" onClick={this.handleHelpfulClick}> Helpful </button>
        <button type="button" id="reportBtn" onClick={this.handleReportClick}> Report </button>
        <p>{'\n'}</p>
      </div>
    );
  }
}

export default ReviewTiles;