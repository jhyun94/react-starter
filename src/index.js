import React from 'react'
import ReactDOM from 'react-dom'
// component that generates html
const App = () => {
  return <div>Hi!</div>;
}
// take the component and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));