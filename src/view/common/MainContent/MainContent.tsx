import React, { Component } from 'react'
import {Route,Routes} from 'react-router-dom' 
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Home from '../../pages/Home/Home'

export default class MainContent extends Component {
  render() {
    return (
      <div className='md:px-12 max-2x1 mx-auto '>

          <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="/about" Component={About}></Route>
              <Route path="/contact" Component={Contact}></Route>
          </Routes>
        
      </div>
    )
  }
}
