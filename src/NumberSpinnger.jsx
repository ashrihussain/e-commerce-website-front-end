import React, { Component } from 'react';

class NumberSpinner extends Component {
    state = { 
        requiredQuantity: 1
     }

     

    render() { 
        return ( 
            <div class="wrap-num-product flex-w m-l-auto m-r-0">
            <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
              <i class="fs-16 zmdi zmdi-minus" /> -
            </div>

            <input
              class="mtext-104 cl3 txt-center num-product"
              type="number"
              name="num-product1"
              maxLength={this.props.product.quantity}
              value={this.props.requiredQuantity}
            />
            
            <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={this.props.qIncrease}>
              <i class="fs-16 zmdi zmdi-plus" /> +
              
            </div>
          </div>
         );
    }
}
 
export default NumberSpinner;