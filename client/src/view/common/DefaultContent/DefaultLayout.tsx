import React, { Component } from 'react'
import NavBar from '../Navbar/NavBar'
import MainContent from '../MainContent/MainContent'
import Footer from '../Footer/Footer'

export default class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <MainContent/>
        <Footer/>
      </div>
      
    )
  }
}
