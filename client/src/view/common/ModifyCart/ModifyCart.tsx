import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ModifyCartProps {
    data: any
}
interface ModifyCartState {
    itemCount: number
}

export class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {

    public static itemsList:CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 0
        }
    }

    componentDidMount() {
        const {itemCount}
            = this.state;

        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList
                .find(item=>
                    item.product.id ===
                    this.props.data.product.id)) {
                ModifyCart.itemsList.push(
                    {
                        product: this.props.data.product,
                        itemCount: itemCount
                    }
                );
                console.log(ModifyCart.itemsList);
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {
        let {itemCount}
            = this.state;
        let item
            = ModifyCart.itemsList
            .find(item =>
              item.product.id ===
                this.props.data
                    .product.id);
        if (item) {
            let index =
                ModifyCart.itemsList
                    .indexOf(item);
            ModifyCart.itemsList
                .splice(index, 1);
            ModifyCart.itemsList
                .push({
                    product: this.props.data.product,
                    itemCount: itemCount
                });

            console.log(ModifyCart.itemsList);
        }
    }

    render() {

        let {itemCount}
            = this.state;

        const increaseItemCount =
            () => {
          // alert('Add');
                this.setState({
                    itemCount: ++itemCount
                })
        }

        const decreaseItemCount =
            () => {
            // alert('Remove')
                if (itemCount > 0) {
                    this.setState({
                        itemCount: --itemCount
                    })
                } else {
                    alert('Item count ' +
                        'can\'t be less than 1' );
                }
            }

        return (
            <div className='  p-[2px] text-center '> 

        <button className=" text-[8px bg-white] bg-yellow-300 rounded-lg h-7 w-8" onClick={decreaseItemCount}> - </button>
        <small className="text-[20px] dark:text-white"> {this.state.itemCount} </small>
        <button className=" text-[8px bg-white] bg-yellow-300 rounded-lg h-7 w-8" onClick={increaseItemCount}> + </button>

        </div>
        );
    }
}