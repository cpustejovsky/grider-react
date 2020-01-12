import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoItem key={video.etag} video={video} />
  })
  return (
    <div>
      <h1>Video List</h1>
      <div className="ui relaxed divided list">
        {videoItems}
      </div>
    </div>
  )
}

export default VideoList;
