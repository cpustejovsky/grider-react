import React, { Component } from "react";
import "../App.css";
export default class VideoItem extends Component {
  render() {
    const video = this.props.video;
    // let urlId = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    return (
      <div
        onClick={() => this.props.onVideoSelect(video)}
        className="item video-item"
      >
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt=""
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
