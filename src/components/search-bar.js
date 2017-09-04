import React from 'react';

class SearchBar extends React.Component{

  render() {
    return (
      <div><input onChange={this.onInputChange} /></div>
    )
  }

  onInputChange(event){
    console.log(event.target.value);
  }
}

export default SearchBar;