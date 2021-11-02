import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewItems: {
        product_id: props.currentID,
        rating: '',
        summary: '',
        body: '',
        recommend: '',
        name: '',
        email: '',
        photo: '',
        characteristics: {},
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // eslint-disable-next-line react/destructuring-assignment
    const newObj = this.state.reviewItems;
    newObj[e.target.name] = e.target.value;
    this.setState({
      reviewItems: newObj,
    });
  }

  handleSubmit(e) {
    const { reviewItems } = this.state;
    e.preventDefault();
    console.log('new review has been submitted!', reviewItems);
  }

  render() {
    const {
      rating, summary, body, recommend, name, email, photos, characteristics,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="rating">
          Rating:
          <input type="text" name="rating" value={rating} onChange={this.handleChange} />
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
          <input type="text" name="recommend" value={recommend} onChange={this.handleChange} />
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