import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
const  YT_API = 'AIzaSyDWgIFckPKsS74hGznX8HJpTh4cCVRwGGA';

const App = () => {
	return (
		<div>
	 		<SearchBar />
	 	</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));