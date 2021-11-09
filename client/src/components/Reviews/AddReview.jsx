import React from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import AddReviewChar from './AddReviewChar';

const labels = {
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Great',
};

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: props.currentID,
      rating: 0,
      summary: '',
      body: '',
      // eslint-disable-next-line react/no-unused-state
      recommend: false,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
      hover: -1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, newValue) {
    if (e.target.name === 'rating') {
      this.setState({
        rating: newValue,
      });
    } else if (e.target.name === 'recommend') {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        recommend: newValue,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  handleHover(newHover) {
    this.setState({
      hover: newHover,
    });
  }

  handleSubmit(e) {
    const newReview = this.state;
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
      rating, summary, body, name, email, photos, characteristics, hover,
    } = this.state;

    const { charItem } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="rating">
          Rating star:
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              this.handleChange(event, newValue);
            }}
            onChangeActive={(event, newHover) => {
              this.handleHover(newHover);
            }}
          />
          {rating !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
          )}
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
          <input type="radio" id="recommendYes" name="recommend" onChange={(e) => { this.handleChange(e, true); }} />
          <label htmlFor="recommendYes">Yes</label>
          <input type="radio" id="recommendNo" name="recommend" onChange={(e) => { this.handleChange(e, false); }} />
          <label htmlFor="recommendNo">No</label>
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
        <AddReviewChar characteristics={characteristics} handleChange={this.handleChange} charItem={charItem} />
        <br />
        <input type="submit" value="Submit Review" />
      </form>
    );
  }
}

export default AddReview;