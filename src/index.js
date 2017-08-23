import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA';
const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
    );
}
// take the component and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));