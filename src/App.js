import React, { Component } from 'react';
import VideoForm from './Components/VideoForm';
import Player from './Components/Player';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/Video_List';
import './App.css';

const API_KEY = 'AIzaSyAtaP3I7LAK-M5imwVcQUOh3c5-9sofvFk'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {videos: [], selectedVideo: null}
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
      <h1 className="App-header">Youtube API Test</h1>
        <VideoForm onSearchChange={term => this.videoSearch(term)}/>
        <Player video={this.state.selectedVideo}/>
        <div className="absolute">
        <VideoList onSelectedVideo={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
