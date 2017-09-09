import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = (props) => {
  var videolist = props.videos.map( (video) => {
    return <VideoListItem 
            video={video} 
            setVideo={props.setVideo}
            key={video.etag}/>
  })


    return (
      <div>{videolist}</div>
    )
}

export default VideoList;