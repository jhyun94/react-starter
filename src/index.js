import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const  YT_API = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA';

YTSearch({key: YT_API, term: 'surfboards'}, function(data){
	console.log(data);
})


class App extends Component {
	constructor(props){
		super(props)


		this.state = {
			terms: '',
			videos: []
		}

		YTSearch({key: YT_API, term: 'surfboards'}, (videos) =>{
			this.setState({videos});
		})

	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos}/>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.querySelector('.container'));