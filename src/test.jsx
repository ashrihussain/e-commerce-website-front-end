import React, { Component } from 'react';
import Test1 from "./Test1";

class Test extends Component {

    constructor(props){
        super(props);
 
    }
    state = { 
        name: "rishan",
        isHungry: true
     }

    componentDidMount() {

    }

    handleButtonClick = () => {


    }

    render() { 
    let name;
        

        return (  
            <div>
                <h1> hi </h1> 
            {this.state.isHungry ? this.handleButtonClick : <Test1 pname={this.state.name}/>}
            </div>
        );
    }
}
 
export default Test;