import React, { Component } from 'react'
import { Console } from 'console';
// import { CartItems } from '../../../Models/CartItems';
import { CartItems } from '../../../Models/CartItems';


interface ModifyCartProps{

    data : any

}
interface ModifyCardState{
    itemCount : number 

}

export default class ModifyCart extends Component<ModifyCartProps,ModifyCardState> {

    public static itemsList: CartItems[] = []

    constructor(props:ModifyCartProps){
        super(props);
        this.state = {
           itemCount: 1
        }
    }
 
    componentDidMount(): void {
        const {itemCount} = this.state;
    
        if(this.props.data.isAdded)
        if(!ModifyCart.itemsList.find(item  => item.product.id == this.props.data.product.id)){
         
        ModifyCart.itemsList.push({
            product: this.props.data.product,
            itemCount: itemCount
        })
        }

        console.log(ModifyCart.itemsList)
      }

      componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCardState>, snapshot?: any): void {
          const {itemCount} = this.state;
          let item = ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id);

          if(item){
            let index = ModifyCart.itemsList.indexOf(item);
            ModifyCart.itemsList.splice(index,1);

            ModifyCart.itemsList.push({
              product: this.props.data.product,
              itemCount: itemCount
            });
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