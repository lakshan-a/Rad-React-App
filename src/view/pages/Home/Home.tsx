import React, { Component } from 'react'
// import { Carousel } from "flowbite-react";
import Card from '../Card/Card';



export default class Home extends Component {

  constructor(props:{}){
    super(props);
    this.state={
      
    }
  }

  render() {
    return (
      <div className='flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    )
  }
}
