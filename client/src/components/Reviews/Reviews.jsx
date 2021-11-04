import React from 'react';
import axios from 'axios';
import ReviewTiles from './ReviewTiles';
import AddReview from './AddReview';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      lessReviews: [],
      // eslint-disable-next-line react/prop-types
      currentID: props.productId,
      moreReview: false,
      moreReviewtext: 'More Reviews',
    };
    this.getReviews = this.getReviews.bind(this);
    // this.getReviewMeta = this.getReviewMeta.bind(this);
    this.handleMoreReviewsClick = this.handleMoreReviewsClick.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  handleMoreReviewsClick() { // get request
    const { moreReview } = this.state;
    if (moreReview === false) {
      this.setState({
        moreReview: true,
        moreReviewtext: 'Show Less Reviews',
      });
    } else {
      this.setState({
        moreReview: false,
        moreReviewtext: 'Show More Reviews',
      });
    }
  }

  getReviews() {
    const { currentID } = this.state;
    axios.get(`/reviews/${currentID}`)
      .then((res) => {
        this.setState({
          reviews: res.data.results,
          lessReviews: res.data.results.slice(0, 2),
        });
      })
      .catch((err) => console.log('error', err));
  }

  // getReviewMeta() {
  //   const { currentID } = this.state;
  //   axios.get(`/reviews/meta/${currentID}`)
  //     .then((res) => {
  //       this.setState({
  //         reviews: res.data.results,
  //       });
  //     })
  //     .catch((err) => console.log('error', err));
  // }

  render() {
    const {
      reviews, lessReviews, currentID, moreReviewtext, moreReview,
    } = this.state;
    // default: render 2 review, if more review button is clicked, show all reviews.
    let renderReviews;
    if (moreReview === true) {
      renderReviews = reviews;
    } else {
      renderReviews = lessReviews;
    }
    if (reviews.length > 2) { // need button
      return (
        <div>
          {renderReviews.map((review, index) =>
            <ReviewTiles review={review} key={index} getReviews={this.getReviews} />)}
          <button type="button" id="moreReviewBtn" onClick={this.handleMoreReviewsClick}>{moreReviewtext}</button>
          <br />
          <AddReview currentID={currentID} getReviews={this.getReviews} />
        </div>
      );
    }
    return ( // don't need button
      <div>
        {reviews.map((review, index) =>
          <ReviewTiles review={review} key={index} getReviews={this.getReviews} />)}
        <AddReview currentID={currentID} />
      </div>
    );
  }
}

export default Reviews;