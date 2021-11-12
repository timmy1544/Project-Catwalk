/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import {
  Rating,
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import AddReviewChar from './AddReviewChar';

const labels = {
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Great',
};

class AddReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      product_id: props.currentID,
      rating: 0,
      summary: '',
      body: '',
      // eslint-disable-next-line react/no-unused-state
      recommend: false,
      recommentStr: 'No',
      name: '',
      email: '',
      photos: [],
      characteristics: {},
      hover: -1,
      submitState: props.submit,
    };
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleRecommendChange = this.handleRecommendChange.bind(this);
    this.handleCharChange = this.handleCharChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHover = this.handleHover.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.postItemHelper = this.postItemHelper.bind(this);
  }

  // componentDidMount() {
  //   const { charItem } = this.props;
  //   const initChar = {};
  //   if (Object.keys(charItem).length !== 0) {
  //     // eslint-disable-next-line guard-for-in
  //     for (const i in charItem) {
  //       initChar[charItem[i].id] = 3;
  //     }
  //   }
  //   console.log('initChar', initChar);
  // }

  componentDidUpdate() {
    const { submitState } = this.state;
    const { submit } = this.props;
    if (submitState !== submit) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        submitState: submit,
      });
      this.handleSubmit();
    }
  }

  handleRatingChange(e, newValue) {
    this.setState({
      rating: newValue,
    });
  }

  handleRecommendChange(e) {
    const { value } = e.target;
    console.log('value = ', value);
    if (value === 'Yes') {
      this.setState({
        recommend: true,
        recommentStr: 'Yes',
      });
    } else {
      this.setState({
        recommend: false,
        recommentStr: 'No',
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleCharChange(newChar) {
    console.log('hi!');
    // this.setState({
    //   characteristics: newChar,
    // });
  }

  handleHover(newHover) {
    this.setState({
      hover: newHover,
    });
  }

  // handlePost() {
  //   const newReview = this.state;
  //   const { getReviews } = this.props;
  //   // validate the submitted form here
  //   axios.post(`/reviews/${newReview.product_id}`, newReview)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .then(() => {
  //       getReviews();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // postItemHelper() {
  //   const postItem = {};
  //   const param = ['product_id', 'rating', 'summary', 'body',
  //     'recommend', 'name', 'email', 'photos', 'characteristics'];
  //   for (let i = 0; i < param.length; i += 1) {
  //     // eslint-disable-next-line react/destructuring-assignment
  //     postItem[param[i]] = this.state[param[i]];
  //   }
  //   console.log('postItem = ', postItem);
  //   return postItem;
  // }

  render() {
    const {
      rating, summary, body, name, email, photos, characteristics, hover, recommentStr,
    } = this.state;

    const { charItem } = this.props;

    return (
      <form id="Review_form" onSubmit={this.handleSubmit}>
        <div id="Review_form_rating_text">
          Rating star:
        </div>
        <div id="Review_form_rating">
          <Rating
            id="Review_form_stars"
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              this.handleRatingChange(event, newValue);
            }}
            onChangeActive={(event, newHover) => {
              this.handleHover(newHover);
            }}
          />
          {rating !== null && (
          <Box id="Review_form_starStr" sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
          )}
        </div>

        <TextField
          id="standard-multiline-flexible"
          className="Review_form_summary"
          label="Summary"
          multiline
          fullWidth
          name="summary"
          value={summary}
          onChange={this.handleChange}
          size="small"
        />

        <TextField
          id="standard-multiline-flexible"
          className="Review_form_comment"
          label="Comments"
          multiline
          fullWidth
          name="body"
          value={body}
          onChange={this.handleChange}
        />
        <div id="Review_form_recommend">
          <FormControl component="fieldset">
            <FormLabel component="legend">Do you recommend this product?</FormLabel>
            <RadioGroup
              row
              aria-label="Recommend this product?"
              name="controlled-radio-buttons-group"
              value={recommentStr}
              onChange={this.handleRecommendChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>

        <div id="Review_form_nameAndEmail">
          <TextField
            id="standard-multiline-flexible"
            className="Review_form_name"
            label="Name"
            size="small"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />

          <TextField
            id="standard-multiline-flexible"
            className="Review_form_email"
            label="Email"
            size="small"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
        </div>

        <TextField
          id="standard-multiline-flexible"
          className="Review_form_photo"
          label="Photos"
          name="photos"
          fullWidth
          value={photos}
          onChange={this.handleChange}
        />
        <br />

        <div id="Review_form_char_text">
          Characteristics:
        </div>

        <AddReviewChar
          characteristics={characteristics}
          handleCharChange={this.handleCharChange}
          charItem={charItem}
        />

      </form>
    );
  }
}

export default AddReviewItem;