import React, { Component } from 'react'


interface ModifyCartProps{

}
interface ModifyCardState{
    itemCount : number 

}

export default class ModifyCart extends Component<ModifyCartProps,ModifyCardState> {

    constructor(props:ModifyCartProps){
        super(props);
        this.state = {
           itemCount: 1
        }
    }


  render() {
    return (
        <div className='w-full  p-[2.4px] text-center ml-'> 

        <button className=" text-[8px bg-white] bg-yellow-300 rounded-lg h-6 w-8"> - </button>
        <small className="text-[20px]"> 1 </small>
        <button className=" text-[8px bg-white] bg-yellow-300 rounded-lg h-6 w-8"> + </button>

        </div>
    )
  }
}