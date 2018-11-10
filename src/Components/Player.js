import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props)
    }
  render(props) {
    return (
      <div>
     <iframe id="ytplayer" type="text/html" width="640" height="360" 
  src="https://www.youtube.com/embed/OiTCDijrze8"
  frameborder="0"></iframe>
      </div>
    )
  }    
}

export default Player;