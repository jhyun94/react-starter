import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const YT_key = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA';

export default class App extends Component{

  render(){
    return (
      <div>Hello</div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));