import Product from '../view/common/Product/Product'


export interface CartItems{

    product: Product,
    itemCount : number
}

interface ModifyCartProps{
  data: CartItems
}

