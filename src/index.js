import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      this.setState({ videos});
    })
  }

    render(){
      return (
        <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
        </div>
      );
    }
}
// take the component and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));