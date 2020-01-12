import React, { Component } from 'react'


export default class VideoDetail extends Component {
  render() {
    return (
      <div>
        <h1>There are {this.props.videos.length} videos.</h1>
      </div>
    )
  }
}
