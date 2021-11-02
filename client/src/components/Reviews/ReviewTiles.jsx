import React from 'react';

class ReviewTiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness:false,
    };

    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
  }

  handleHelpfulClick() {
    console.log('helpful click!');
  }

  handleReportClick() {
    console.log('report click!');
  }

  render() {
    const {
      body, date, helpfulness, rating, recommend, response, reviewer_name, summary
    } = this.props.review;

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
        <button onClick={this.handleHelpfulClick}> Helpful </button>
        <button onClick={this.handleReportClick}> Report </button>
        <p>{'\n'}</p>
      </div>
    );
  }
}

export default ReviewTiles;