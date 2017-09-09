import React from 'react';

const VideoListItem = (props) => {
  console.log( props.video);
  return (
    <li>
      <img src={props.video.snippet.thumbnails.default.url} />
      <p>{props.video.snippet.title}</p>
    </li>
  )
}


export default VideoListItem;
