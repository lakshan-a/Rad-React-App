import {Component} from "react";
import spinash from '../../../images/products/spinach.png'
import beans from '../../../images/products/beans.png'
import tomato from '../../../images/products/tomato.png'
import {Product} from "../../common/Product/Product";

export class Home extends Component {

    constructor(props: {}) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        try {
            let response = await fetch('./product-data.json');
            let jsonData = await response.json();
            this.setState({data: jsonData});
        } catch (error) {
            console.error(
                'Error fetching data:',
                error);
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;
        return (
            <div className="flex">
                {/*Row 01  */}
                <div className="flex
                               flex-wrap
                               ml-[1px]
                               mt-10
                               mb-5
                               justify-center
                               items-center
                               mx-auto">
                    {
                        data.map((product: any) => (
                            <Product key={product.id}
                                     data={product}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}