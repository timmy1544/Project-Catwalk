/* eslint-disable eol-last */
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="qSearchArea">
        <input className="qSearchBar" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      </form>
    );
  }
}

export default SearchBar;