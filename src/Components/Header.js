import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
  render(props) {
    return (
      <div>
      <h1>YouTube API</h1>
      <button>Search</button>
      </div>
    )
  }    
}

export default Header;
