import {Component} from "react";
import spinash from "../../../images/products/spinach.png";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any;
}

interface ProductState {
    isActive: boolean
}

export class Product extends Component<ProductProps, ProductState> {

    constructor(props: ProductProps) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    render() {

        const {data} = this.props;
        const image = require('../../../images/products/' + data.image)
        return (
            // <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
            //     <div>
            //         <img className="h-[88px] w-[88px]" src={image} alt=""/>
            //     </div>
            //     <div className="flex">
                // <div>
                //     <h3 className="text-secondary text-[12px] pl-2">{data.name}</h3>
                // </div>
            //         <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
            //             <h3 className="text-[12px] pl-2">{data.price} <small className="text-[7px]">{data.currency}</small></h3>
            //         </div>
            //     </div>
            //     <div className="flex justify-center">
            //         {
            //             this.state.isActive ?
            //                 <ModifyCart data={{
            //                     product: data,
            //                     isAdded: this.state.isActive
            //                 }}/>
            //              :
            //         <button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]"
            //               onClick={this.addToCartOnClick}>Add to Cart</button>
            //         }
            //     </div>
            // </div>

            <div className="max-w-sm  bg-[#444445] rounded-lg ms-4 mt-4">
                <img className=' w-[400px] m-auto mt-5' src={image} alt="" />
                <a href="#">
                <div>
                        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white m-5">{data.name}</h3>
                    </div>
                </a>
                <div className="mb-5 mt-2.5 flex items-center m-5">
                <svg
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    5.0
                </span>
                </div>
                <div className="flex items-center justify-between m-5">
                {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span> */}
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{data.price} <small>{data.currency}</small></h3>

                {
                    this.state.isActive ?
                    
                    <ModifyCart data={{
                    product: data, 
                    isAdded:this.state.isActive}}
                    />
                    :
                    <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    onClick={this.addToCartOnClick}
                >
                    Add to cart
                </a>}
                </div>
            </div>





        );
    }
    private addToCartOnClick
        = () => {
        this.setState({
            isActive: true
        });
    }
}