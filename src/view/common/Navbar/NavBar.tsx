import React, { Component } from 'react'
import icon from '../../../images/plant-based-(2).png';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  
  render() {

    function onSingInClick(){
      alert("button Clicked !")
    }

    return (
        <div className="p-4 bg-[#444544] flex">


        <h1 className="text-2xl text-secondary">Organic Shop</h1>
        <img className='h-8 w-8 ml-2' src={icon} alt="" />

        <ul className='list-none text-2xl mx-auto'>
            <li className='inline-block mr-5 text-[#fff] cursor-pointer hover:text-green-400'><Link to='/'>Home</Link> </li>
            <li className='inline-block mr-5 text-[#fff] cursor-pointer hover:text-green-400'><Link to='/about'>About</Link></li>
            <li className='inline-block mr-5 text-[#fff] cursor-pointer hover:text-green-400'><Link to='/contact'>Contact</Link></li>
        </ul>

        <div>
         <button type="submit" className="flex w-full justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm
                hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <Link to={'/Login'}>Sign in</Link> 
          </button>
        </div>

       </div>
    )
  }
}   


