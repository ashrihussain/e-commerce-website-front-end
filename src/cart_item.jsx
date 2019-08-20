import React, { Component } from "react";
import "./css/cart.css";
import UserProfile from "./UserProfile";
import Cookies from 'universal-cookie'; 


class CartItem extends Component {

  state = {
    orderList: []
  }

  constructor (props){
    super(props); 
    this.state ={
      cartItem: props.cartItem
    }
  }

  calculateTotalPrice = (price, quantity) => {
    let total = price * quantity;
    return total;
  }
  
  componentDidMount() {
    const cookies = new Cookies();
    fetch(`http://localhost:8080/orderItems/cart/orderItem/${cookies.get("username")}`)
    .then(res => res.json())  
    .then(json => {
      this.setState({
        orderList: json
      });
    });
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      cartItem: nextProps.cartItem
    })

  }


  render() {
    return (
      <tr class="table_row">
        <td class="column-1">
             <div class="how-itemcart1">
            <img
              src={this.state.cartItem.product.prodImage}
              alt="IMG"
              class="thumbnail"
            />
          </div>
        </td>
        <td class="column-2">{this.state.cartItem.product.productName}</td>
        <td class="column-3">$ {this.state.cartItem.product.price}</td>
        <td class="column-4">{this.state.cartItem.quantity}</td>
        <td class="column-5">$ {this.calculateTotalPrice(this.state.cartItem.product.price, this.state.cartItem.quantity)}</td>
        <td class="column-6">
           <button type="button" onClick={ () =>this.props.removeCartItem(this.props.cartItem.id)} class="close m-r-40" aria-label="Close">
         <span aria-hidden="true">&times;</span>
        </button></td>
      </tr>
    );
  }
}

export default CartItem;
