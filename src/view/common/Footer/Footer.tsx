import React, { Component } from 'react'
import icon from '../../../images/plant-based-(2).png';


export default class Footer extends Component {
  render() {
    return (
      <div className="p-4 bg-[#444544] flex">
        <h1  className="text-1xl text-secondary text-center">Organic Shop</h1>
        <img className='h-8 w-8 ml-2' src={icon} alt="" />
      </div>
    )
  }
}
