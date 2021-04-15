import './App.css';
import React from 'react'
import Home from './views/Home'
import Routes from './Routes'

  class App extends React.Component{

    render(){
      return(
        <>
        <div className='container'>
          <Routes/>
        </div>
        </>
      )
    }
  }

export default App;
