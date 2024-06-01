import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './view/common/DefaultContent/DefaultLayout';
import { Login } from './view/pages/Login/Login';

function App() {
  return (
    <div>
       <BrowserRouter>
        
       <Routes>
       <Route 
          path='/' Component={DefaultLayout}>
        </Route>

        <Route 
          path='/login' Component={Login}>
        </Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
