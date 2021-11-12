import React, { useState, useEffect } from 'react';
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

const AddReviewItem = (props) => {
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommendStr, setRecommendStr] = useState('No');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [photos, setPhotos] = useState([]);
  const [characteristics, setChar] = useState({});
  const [hover, setHover] = useState(-1);
  // const { submit, setSubmit } = props;
  // const [submitState, setSubmitState] = useState(submit);

  useEffect(() => {
    const { submit, setSubmit } = props;
    if (submit === true) {
      // eslint-disable-next-line react/no-did-update-set-state
      setSubmit(false);
      // eslint-disable-next-line no-use-before-define
      handleSubmit();
    }
  });

  const postItemHelper = () => {
    const postItem = {};
    const { currentID } = props;
    if (recommendStr === 'Yes') {
      postItem.recommend = true;
    } else {
      postItem.recommend = false;
    }
    postItem.product_id = currentID;
    postItem.rating = rating;
    postItem.summary = summary;
    postItem.body = body;
    postItem.name = name;
    postItem.email = email;
    postItem.photos = photos;
    postItem.characteristics = characteristics;
    return postItem;
  };

  const handleSubmit = () => {
    const postItem = postItemHelper();
    console.log('postItem');
    axios.post(`/reviews/${postItem.product_id}`, postItem)
      .then((response) => {
        console.log(response.data);
      })
      .then(() => {
        props.getReviews();
      })
      .then(() => {
        props.onHide();
      })
      .catch((err) => {
        console.error(err);
        // eslint-disable-next-line no-alert
        alert('Please input valid infomation!');
      })
      .catch(() => {
        props.onHide();
      });
  };

  const handleRecommendChange = (e) => {
    const { value } = e.target;
    if (value === 'Yes') {
      setRecommendStr('Yes');
    } else {
      setRecommendStr('No');
    }
  };

  const { charItem } = props;

  return (
    <form id="Review_form" onSubmit={handleSubmit}>
      <div id="Review_form_rating_text">
        Rating star:
      </div>
      <div id="Review_form_rating">
        <Rating
          id="Review_form_stars"
          name="rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
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
        onChange={(e) => setSummary(e.target.value)}
        size="small"
        placeholder="Example: Best purchase ever!"
      />

      <TextField
        id="standard-multiline-flexible"
        className="Review_form_comment"
        label="Comments"
        multiline
        fullWidth
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Why did you like the product or not?"
      />
      <div id="Review_form_recommend">
        <FormControl component="fieldset">
          <FormLabel component="legend">Do you recommend this product?</FormLabel>
          <RadioGroup
            row
            aria-label="Recommend this product?"
            name="controlled-radio-buttons-group"
            value={recommendStr}
            onChange={handleRecommendChange}
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
          onChange={(e) => setName(e.target.value)}
          placeholder="Example: jackson11!"
        />
        <br />

        <TextField
          id="standard-multiline-flexible"
          className="Review_form_email"
          label="Email"
          size="small"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Example: jackson11@gmail.com"
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
        placeholder="Upload your photos"
        // onChange={(e) => setPhotos(e.target.value)}
      />
      <br />

      <AddReviewChar
        characteristics={characteristics}
        handleCharChange={setChar}
        charItem={charItem}
      />
    </form>
  );
};

export default AddReviewItem;