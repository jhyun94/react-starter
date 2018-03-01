import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term: ''};

	}

	onInputChange(e){
		this.setState({term: e.target.value})
		this.props.onVideoSearch(e.target.value)
	}

	render(){
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={ event => this.onInputChange(event)}/>
			</div>

		)
	}
}

export default SearchBar;