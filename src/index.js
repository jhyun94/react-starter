import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar';

class App extends React.Component {


  render() {
    return <SearchBar />
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));