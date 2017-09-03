import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideos: videos[0]
      });
    })
  }

    render(){
      return (
        <div>
          <SearchBar />
          <VideoDetail video={this.state.selectedVideos} />
          <VideoList
            onVideoSelect={ selectedVideos => this.setState({selectedVideos}) }
            videos={this.state.videos} />
        </div>
      );
    }
}
// take the component and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));