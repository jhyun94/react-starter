import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const  YT_API = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA';

YTSearch({key: YT_API, term: 'surfboards'}, function(data){
	
})


class App extends Component {
	constructor(props){
		super(props)


		this.state = {
			terms: '',
			videos: [],
			selectedVideo: null
		}

		YTSearch({key: YT_API, term: 'surfboards'}, (videos) =>{
			this.setState({videos, selectedVideo: videos[0]});
		})

	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					videos={this.state.videos}
					onVideoSelect={ (selectedVideo) => this.setState({selectedVideo})}/>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.querySelector('.container'));