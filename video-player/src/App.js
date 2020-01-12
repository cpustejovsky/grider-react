import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import YouTubeAPI from "./api/youtube";

export default class App extends Component {
  state = {
    videos: []
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

  render() {
    return (
      <div className="ui container">
          <SearchBar onTermSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="eight wide column">
            <VideoDetails videos={this.state.videos} />
          </div>
          <div className="eight wide column">
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}
