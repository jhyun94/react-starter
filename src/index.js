import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';

const YT_key = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA'

class App extends React.Component {
  constructor(props){
    super(props);

  this.state = {
    selectedVideo: null
  };

  this.SearchYT('s2000')
}




  SearchYT(term){
    YTSearch({key: YT_key, term: term}, (videos) => {
      this.setState({selectedVideo: videos[0]})
    }) 
  }

  render() {
    return (
      <div>
        <SearchBar onNewSearchTerm={ (term) => this.SearchYT(term) } />
        <VideoDetail selectedVideo={this.state.selectedVideo} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));