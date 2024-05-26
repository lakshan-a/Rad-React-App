import React from 'react';
import './App.css';
import NavBar from './view/common/Navbar/NavBar';
import MainContent from './view/common/MainContent/MainContent';
import Footer from './view/common/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
       <BrowserRouter>
          <NavBar/>
          <MainContent/>
          <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
