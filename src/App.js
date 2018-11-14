import React, { Component } from 'react';
import VideoForm from './Components/VideoForm';
import Player from './Components/Player';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }


// key=API_KEY AIzaSyAtaP3I7LAK-M5imwVcQUOh3c5-9sofvFk

  render() {
    return (
      <div className="App">
        <VideoForm />
        <Player />

      </div>
    );
  }
}

export default App;
