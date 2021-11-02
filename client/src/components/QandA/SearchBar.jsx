/* eslint-disable eol-last */
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Have a question? Search for answers..." />
      </form>
    );
  }
}

export default SearchBar;