import React, { Component } from 'react'
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetail';
import VideoList from './components/VideoList';
import YouTubeAPI from './api/youtube'


export default class App extends Component {

  state = {
    videos: []
  }

  onTermSubmit = async term => {
    const response = await YouTubeAPI.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items })
    console.log(this.state.videos)
  }

  render() {
    return (
      <div>
        <div className="ui container">
          <SearchBar onTermSubmit={this.onTermSubmit} />
        </div>
        <VideoDetails videos={this.state.videos}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}
