import React, { Component } from 'react'
import { CartItems } from '../../Models/CartItems'

interface ShoppingCartProps{
    itemsList: CartItems[];
}



export default class ShoppingCart extends Component<ShoppingCartProps> {
  render() {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        
      </div>
    )

  }
}
