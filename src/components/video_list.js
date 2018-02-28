import React, { Component } from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
	console.log(props.videos);
	const videos = props.videos.map( (video) => {
		console.log(video);
		return <VideoListItem key={video.id.videoId}/>
	})
	return (
		<ul className="col-md-4 list-group">
			{videos}
		</ul>
	)
} 

export default VideoList;