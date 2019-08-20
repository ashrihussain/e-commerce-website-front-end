import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import "./oitem.css";

class OrderItem extends Component {
    state = {  
        orderList: []
    }

     
  componentDidMount() {
     
  }

  calculateTotalPrice = (price, quantity) => {
    let total = price * quantity;
    return total;
  }


    render() { 
        return ( 
          <div>  
         
              <tr class="table_row">
              <td className="column-1">
                   <div class="how-itemcart1">
                     <div class ="orderrow">
                     {this.props.orderItem.product.id}                    
                     </div>
                     <div class="column1">
                  <b> <strong> Order ID:  {this.props.orderid}</strong></b>
                </div>
                   
                </div>
              </td>
              <td class="column-2">
                <div class="column2 m-l-30 m-r-30">
                Product: {this.props.orderItem.product.productName} 
                    </div></td>
              <td class="column-3">
                <div class="column3"> Price per item: $ {this.props.orderItem.product.price} </div></td>
              <td class="column-4">
              <div class="column4 m-l-30"> Items purchased:{this.props.orderItem.quantity} </div></td>

              <td class="column-5">
                
              <div class="column5 m-r-20">
              Total amount: ${this.calculateTotalPrice(this.props.orderItem.product.price, this.props.orderItem.quantity)} 

              </div>
              </td>
              <td class="column-6">
              <div class="column6">  Order placed on: {this.props.date} </div>
               </td>
            </tr> 
        </div>
         );
    }
}
 
export default OrderItem;