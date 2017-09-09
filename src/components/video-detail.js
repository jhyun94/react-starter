import React from 'react';

const VideoDetail = (props) => {
  const video = props.selectedVideo;
  if (!video){
    return <div>loading...</div>
  }
  const url = `https://youtube.com/embed/${video.id.videoId}`;

  return(
    <div className="detail-content col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive" src={url}></iframe>
      </div>
      <div className="detail">
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;
