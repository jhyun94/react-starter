import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchbar';
import VideoDetail from './components/video-detail'
const YT_KEY = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: {}
    }
  }

  videoSearch(term) {
    YTSearch({ key: YT_KEY, term: term }, videos => {
      this.setState({videos});
      this.setState({selectedVideo: videos[0]});
    });
  }

  render(){
    return (
      <div>
        <SearchBar
          onSearchTermChange={ (term) => this.videoSearch(term)}/>
        <VideoDetail  
          video={this.state.selectedVideo}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));