import React from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newReview: {
        product_id: props.currentID,
        rating: 0,
        summary: '',
        body: '',
        recommend: false,
        name: '',
        email: '',
        photos: [],
        characteristics: {},
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // eslint-disable-next-line react/destructuring-assignment
    const newObj = this.state.newReview;
    if (e.target.type === 'text') {
      newObj[e.target.name] = e.target.value;
    } else if (e.target.name === 'recommend') {
      newObj.recommend = !newObj.recommend;
    }
    this.setState({
      newReview: newObj,
    });
  }

  handleRatingChange(e, value) {
    const newObj = this.state.newReview;
    newObj.rating = value;
    this.setState({
      newReview: newObj,
    });
  }

  handleSubmit(e) {
    const { newReview } = this.state;
    const { getReviews } = this.props;
    e.preventDefault();
    // validate the submitted form here
    axios.post(`/reviews/${newReview.product_id}`, newReview)
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
      rating, summary, body, recommend, name, email, photos, characteristics,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="rating">
          Rating star:
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              this.handleRatingChange(event, newValue);
            }}
          />
          {/* <input type="radio" id="rating1" name="rating" value="1" onChange={this.handleChange} />
          <label htmlFor="rating1">1</label>
          <input type="radio" id="rating2" name="rating" value="2" onChange={this.handleChange} />
          <label htmlFor="rating2">2</label>
          <input type="radio" id="rating3" name="rating" value="3" onChange={this.handleChange} />
          <label htmlFor="rating3">3</label>
          <input type="radio" id="rating4" name="rating" value="4" onChange={this.handleChange} />
          <label htmlFor="rating4">4</label>
          <input type="radio" id="rating5" name="rating" value="5" onChange={this.handleChange} />
          <label htmlFor="rating5">5</label> */}
        </label>
        <br />
        <label htmlFor="summary">
          Summary:
          <input type="text" name="summary" value={summary} onChange={this.handleChange} />
        </label>
        <br />
        <label htmlFor="body">
          comment:
          <input type="text" name="body" value={body} onChange={this.handleChange} />
        </label>
        <br />
        <label htmlFor="recommend">
          recommend:
          <input type="checkbox" id="recommendBox" name="recommend" value={recommend} onChange={this.handleChange} />
          <label htmlFor="recommendBox">Recommend</label>
        </label>
        <br />
        <label htmlFor="name">
          name:
          <input type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <br />
        <label htmlFor="email">
          email:
          <input type="text" name="email" value={email} onChange={this.handleChange} />
        </label>
        <br />
        <label htmlFor="photos">
          photos:
          <input type="text" name="photos" value={photos} onChange={this.handleChange} />
        </label>
        <br />
        <label htmlFor="characteristics">
          characteristics:
          <input type="text" name="characteristics" value={characteristics} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit Review" />
      </form>
    );
  }
}

export default AddReview;