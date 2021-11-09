import React from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile';
import MoreReviewBtn from './MoreReviewBtn';
import AddReview from './AddReview';
import Breakdown from './Breakdown';

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
      meta: {},
      charItem: {},
    };
    this.getReviews = this.getReviews.bind(this);
    this.getReviewMeta = this.getReviewMeta.bind(this);
    this.handleMoreReviewsClick = this.handleMoreReviewsClick.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getReviewMeta();
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

  getReviewMeta() {
    const { currentID } = this.state;
    axios.get(`/reviews/meta/${currentID}`)
      .then((res) => {
        this.setState({
          meta: res.data,
          charItem: res.data.characteristics,
        });
      })
      .catch((err) => console.log('error', err));
  }

  render() {
    const {
      reviews, lessReviews, currentID, moreReviewtext, moreReview, meta, charItem,
    } = this.state;
    // default: render 2 review, if more review button is clicked, show all reviews.
    let renderReviews;

    if (moreReview === true) {
      renderReviews = reviews;
    } else {
      renderReviews = lessReviews;
    }

    return (
      <div>
        {'\n'}
        <Breakdown meta={meta} />
        {'\n'}
        {renderReviews.map((review, index) =>
          <ReviewTile review={review} key={index} getReviews={this.getReviews} />)}
        {'\n'}
        <MoreReviewBtn
          reviews={reviews}
          handleMoreReviewsClick={this.handleMoreReviewsClick}
          moreReviewtext={moreReviewtext}
        />
        {'\n'}
        <AddReview currentID={currentID} getReviews={this.getReviews} charItem={charItem} />
      </div>
    );
  }
}

export default Reviews;