import React, { Component } from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videos = props.videos.map( (video) => {
		return <VideoListItem />
	})
	return (
		<ul className="col-md-4 list-group">
			{videos}
		</ul>
	)
} 

export default VideoList;