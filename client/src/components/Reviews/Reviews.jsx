import React from 'react';
import axios from 'axios';
import ReviewTiles from './ReviewTiles';
import AddReview from './AddReview';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentID: props.productId,
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const { currentID } = this.state;
    axios.get(`/reviews/${currentID}`)
      .then((res) => {
        this.setState({
          reviews: res.data.results,
        });
      })
      .catch((err) => console.log('error', err));
  }

  getReviewMeta() {
    const { currentID } = this.state;
    axios.get(`/reviews/meta/${currentID}`)
      .then((res) => {
        this.setState({
          reviews: res.data.results,
        });
      })
      .catch((err) => console.log('error', err));
  }

  render() {
    const { reviews, currentID } = this.state;
    return (
      <div>
        {reviews.map((review, index) => <ReviewTiles review={review} key={index} />)}
        <AddReview currentID={currentID} />
      </div>
    );
  }
}

export default Reviews;
