import React, { Component } from 'react'
import CartItems from '../../../Models/CartItems';


interface ModifyCartProps{

}
interface ModifyCardState{
    itemCount : number 

}

export default class ModifyCart extends Component<ModifyCartProps,ModifyCardState> {

  public static itemList: CartItems[] = [];

    constructor(props:ModifyCartProps){
        super(props);
        this.state = {
           itemCount: 1
        }
    }
 
    

  render() {

    let {itemCount} = this.state;

    const increaseItemCount = ()=>{
       this.setState({
        itemCount: ++itemCount
       })
        // alert('add');

    }

    const decreaseItemCount = ()=>{
      if(itemCount>1){
        this.setState({
            itemCount: --itemCount
           })
      }else{
          alert('Iteam Count can\' be less than one')
      }
        // alert('remove');

    }


    return (
        <div className='w-full  p-[2.4px] text-center ml-'> 

        <button className=" text-[8px bg-white] bg-yellow-300 rounded-lg h-6 w-8" onClick={decreaseItemCount}> - </button>
        <small className="text-[20px]"> {this.state.itemCount} </small>
        <button className=" text-[8px bg-white] bg-yellow-300 rounded-lg h-6 w-8" onClick={increaseItemCount}> + </button>

        </div>
    )
  }
}