import React from 'react';

class SearchBar extends React.Component{

  constructor(props) {
    super(props)


  }
  render() {
    return (
      <div><input
       onChange={ (event) => this.onInputChange(event.target.value) }/>
      </div>
    )
  }

  onInputChange(term){
    this.props.onNewSearchTerm(term);
  }
}

export default SearchBar;