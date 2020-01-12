import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import YouTubeAPI from "./api/youtube";

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await YouTubeAPI.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };

  onVideoSelect = async video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="eight wide column">
            <VideoDetails
              selectedVideo={this.state.selectedVideo}
              videos={this.state.videos}
            />
          </div>
          <div className="eight wide column">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}
