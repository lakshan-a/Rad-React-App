import {Component} from "react";

export class ClassComponent extends Component {
    
    constructor(props : {}){
        super(props);
        this.state ={
            data : '123'
        }
    }

    render() {
        return (
            <>
            <h1></h1>
            <button></button>
            </>
        );
    }
}