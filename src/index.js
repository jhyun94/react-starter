import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search-bar';

const YT_key = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA'

class App extends React.Component {
  constructor(props){
    super(props);

  YTSearch({key: YT_key, term: 's2000'}, function(response){
    console.log(response)
    })  
  }

  render() {
    return <SearchBar />
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));