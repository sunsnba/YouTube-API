import React, { Component } from 'react';
import VideoForm from './Components/VideoForm';
import Player from './Components/Player';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/Video_List';

const API_KEY = 'AIzaSyAtaP3I7LAK-M5imwVcQUOh3c5-9sofvFk'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {videos: [], videoSelected: null}
    this.videoSearch('kanye')
  }

videoSearch (term) {
  YTSearch({key:API_KEY, term: term}, (videos) => {
    this.setState({videos: videos, selectedVideo: videos[0]})
    console.log(videos)
  })
}

  render() {
    return (
      <div className="App">
      <h1>Youtube API Test</h1>
        <VideoForm />
        <Player />
        <VideoList />

      </div>
    );
  }
}

export default App;
