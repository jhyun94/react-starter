import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const  YT_API = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA';




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

	videoSearch(term) {
		YTSearch({key: YT_API, term: term}, (videos) => {
			this.setState({videos});
		})
	}

	render(){
		return (
			<div>
				<SearchBar onVideoSearch={ (term) => this.videoSearch(term) }/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					videos={this.state.videos}
					onVideoSelect={ (selectedVideo) => this.setState({selectedVideo})}/>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.querySelector('.container'));