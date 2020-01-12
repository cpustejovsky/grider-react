import React, { Component } from "react";

export default class VideoDetail extends Component {
  checkVideoSelection() {
    const selectedVideo = this.props.selectedVideo || this.props.videos[0];
    if (selectedVideo) {
      console.log(selectedVideo);
      const embedUrl = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
      return (
        <div>
          <div className="ui embed">
            <iframe title="video player" src={embedUrl} />
          </div>
          <div className="ui segment">
            <h4 className="ui header">{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>

          <h1>☝️ Search for a Video ☝️</h1>
        </div>
      );
    }
  }
  render() {
    console.log(this.props.videos[0])
    return this.checkVideoSelection();
  }
}
