import React, { Component } from 'react';
import Header from './Components/Header';
import VideoForm from './Components/VideoForm';
import Player from './Components/Player';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

//  componentDidMount () {
//    fetch(//link here, {
//      method: 'GET'
//    )}
//    .then(response => response.json())
//    .then(json => {

//    })
//    .catch(error => {
//      console.log(error)
//    }); 
//  }
// key=API_KEY AIzaSyAtaP3I7LAK-M5imwVcQUOh3c5-9sofvFk

  render() {
    return (
      <div className="App">
        <Header/>
        <VideoForm />
        <header className="App-header">
        <Player />
        </header>

      </div>
    );
  }
}

export default App;
