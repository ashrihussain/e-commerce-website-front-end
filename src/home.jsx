import React, { Component } from "react";
import "./navbar";
import Product from "./product";
import Detailed from "./detailed";
import "./product.css";
import "./navbar.css";
import SideBar from "./sidebar";
import { BrowserRouter as Router, Route, Switch, Link, } from "react-router-dom";
import { relative } from "path"; 
import AddProduct from "./AddProduct"; 
import Modal from 'react-awesome-modal';
import SearchBar from "./SearchBar"; 
 


const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "200px",
  width: "100%",
  flexDirection: "row",
  justifyContent: "flex-start",
  overFlow: "auto",
  whiteSpace: "nowrap",
  position: "relative"
};

const horizontalScroll = {
  display: "inline-block"
};

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoaded: false,
      productSelected: false,
      productId: null,
      visible : false
    };
    this.handleProductSelected = this.handleProductSelected.bind(this); 
  }

  handleProductSelected = productId => {
    this.state.productSelected = !this.state.productSelected;
    this.state.productId = productId;
  };

  componentDidMount() {
    this.setState({
      products: this.props.filterlist
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.filterlist
    });
  }

  
 
  state = {};
  render() {
    return (
      <div class="holder"> 
      <div style={divStyle}>
        {this.state.products.map(product => (
          <Product
            key={product.pid}
            onDelete={this.props.onDelete}
            product={product}
            productSelected={this.handleProductSelected}
            onIncrement={this.props.onIncrement}
            ref = {this.updateProductElement}
            closeModal = {this.state.closeModal}
          />
          
        ))}
        {/* <Route exact path="/home/:pid" Component={Detailed} /> */}
       
      </div>
    
       <div >  
       </div>
      
       </div>
    );
  }
}

export default Home;
