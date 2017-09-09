import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = (props) => {
  var videolist = props.videos.map( (video) => {
    return <VideoListItem />
  })


    return (
      <div>{videolist}</div>
    )
}

export default VideoList;