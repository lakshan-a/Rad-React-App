import { ProductModel } from './ProductModel'


export interface CartItems{

    product: ProductModel,
    itemCount : number
}

interface ModifyCartProps{
  data: CartItems
}

