import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = (props) => {
  var videolist = props.videos.map( (video) => {
    return <VideoListItem video={video}/>
  })


    return (
      <div>{videolist}</div>
    )
}

export default VideoList;