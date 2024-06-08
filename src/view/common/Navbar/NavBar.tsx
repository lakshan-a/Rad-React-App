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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2 mr-3 text-[#fff]" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>

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


