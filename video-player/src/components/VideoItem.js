import React, { Component } from "react";
import '../App.css'
export default class VideoItem extends Component {
  render() {
    const video = this.props.video;
    let urlId = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    console.log(video);
    return (
      <div className="item video-item">
        <img
          className="ui image"
          src={video.snippet.thumbnails.high.url}
          alt=""
        />
        <div className="content">
          <div className="header"><h1>{video.snippet.title}</h1></div>
        </div>
      </div>
    );
  }
}
