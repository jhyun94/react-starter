import React from 'react';

const VideoListItem = (props) => {
  return (
    <li onClick={ () => props.setVideo(props.video)} className="video-list-item">
      <img src={props.video.snippet.thumbnails.default.url} />
      <h5>{props.video.snippet.title}</h5>
    </li>
  )
}


export default VideoListItem;
