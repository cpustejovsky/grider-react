import React, { Component } from 'react'

export default class VideoItem extends Component {
  render() {
    const video = this.props.video;
    let urlId = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    console.log(video);
    return (
      <li>
        <a href={urlId}>
          <h2>{video.snippet.title}</h2>
          <img src={video.snippet.thumbnails.default.url} alt="" />
          <p>{video.snippet.description}</p>
        </a>
      </li>
    )
  }
}
