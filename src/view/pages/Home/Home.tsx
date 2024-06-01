import React, { Component } from 'react'
// import { Carousel } from "flowbite-react";
import Card from '../Card/Card';
import { promises } from 'fs';



export default class Home extends Component {

  constructor(props:{}){
    super(props);
    this.state={

    }
  }

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData =async () =>{
    try{

     let response = await fetch('./public/product-data.json');
     let jsonData = await response.json();

    }catch (error){
      console.error('Erroe Fetching Data', error);
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
