import React, { Component } from 'react';
import OrderItem from './order_item';
import "./hr.css"
class OrderItems extends Component {
    state = {  }
    render() { 
        return (
            <div> 
                            <hr class="hr1" />

            {this.props.orders.orderItems.map( orderItem=> 
            (  
                
    <OrderItem orderItem= { orderItem} orderid= {this.props.orders.id} date={this.props.orders.order_date} /> 
                 
        
            ))
            }
            <hr class="hr1" />

                        </div>  
           
         );
    }
}
 
export default OrderItems;