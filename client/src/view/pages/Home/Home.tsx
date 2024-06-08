import React, { Component } from 'react'
// import { Carousel } from "flowbite-react";
import Card from '../Card/Card';
import { promises } from 'fs';
import Product from '../../common/Product/Product';



export default class Home extends Component {

  constructor(props:{}){
    super(props);
    this.state={
      data:[]
    }
  }

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData =async () =>{
    try{

     let response = await fetch('./public/product-data.json');
     let jsonData = await response.json();
     this.setState({data:jsonData});

    }catch (error){
      // console.error('Erroe Fetching Data', error);
    }

  }

  render() {

    // @ts-ignore
    const {data} = this.state;

    return (
      <div className='flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto'>
        <Card data={''}></Card>
        <Card data={''}></Card>
        <Card data={''}></Card>
        <Card data={''}></Card>
        <Card data={''}></Card>
        <Card data={''}></Card>
        
        {
          data.map((product:any) => (
            <Product key={product.id}
                     data={product}/>
          ))
        }

      </div>
    )
  }
}
