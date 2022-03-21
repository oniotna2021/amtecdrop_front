import React from 'react'

import ReactDOM from 'react-dom'

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

export default class App extends React.Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  
  render() {   
    return (
      <div>I'm the app</div>
    ); 
  }
}

// the setTimeout simulates the time it takes react to load, and is not part of the solution
setTimeout(() => 
  // the show/hide functions are passed as props
  ReactDOM.render(
    <App
      hideLoader={hideLoader}
      showLoader={showLoader} 
      />,
    document.getElementById('app')
  )
, 1000);