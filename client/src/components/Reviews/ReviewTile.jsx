import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Rating from '@mui/material/Rating';
import ReviewTileRecommend from './ReviewTileRecommend';
import ReviewTileResponse from './ReviewTileResponse';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/destructuring-assignment
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
      <div id="Review_tile">
        <div id="Review_tile_header">
          <Rating id="Review_tile_stars" name="read-only" value={review.rating} readOnly />
          <div id="Review_tile_info">
            {review.reviewer_name}
            {', '}
            {convertedDate}
          </div>
          <div id="Review_tile_summary">
            {review.summary}
          </div>
        </div>
        <div id="Review_tile_main">
          <div id="Review_tile_Body">
            {review.body}
          </div>
          <div id="Review_tile_Recommend">
            <ReviewTileRecommend recommend={review.recommend} />
          </div>

          <div id="Review_tile_Response">
            <ReviewTileResponse response={review.response} />
          </div>
        </div>

        <div id="Review_tile_footer">
          <div id="Review_tile_HelpfulandReportBtn">
            Helpful?
            {' '}
            <span role="button" styling="link" id="helpfulBtn" onClick={this.handleHelpfulClick} onKeyDown={() => {}} tabIndex={0}> Yes</span>
            {' '}
            (
            {helpfulness}
            )
            {'  '}
            |
            {'  '}
            <span role="button" styling="link" id="reportBtn" onClick={this.handleReportClick} onKeyDown={() => {}} tabIndex={0}> Report </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewTile;