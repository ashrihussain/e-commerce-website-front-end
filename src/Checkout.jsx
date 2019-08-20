import React, { Component } from 'react';
import "./css/checkout.css"
import Cookies from 'universal-cookie';
import SideBar from "./sidebar";

class Checkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      orderItems: [],
      isFired: false,
      isCheckedOut: false
      };
    } 


    state = { 

     }

    componentDidMount() { 
      const cookie = new Cookies();

      fetch(`http://localhost:8080/orderItems/cart/orderItem/${cookie.get("username")}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          orderItems: json
        });
      });
      console.log(this.state.orderItems);

    }
 
    confirmCheckout = e  => {
      e.preventDefault();
      var tempDate = new Date();
      var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()
      const currDate =  date;


      this.setState({
        isCheckedOut: true
      })
      const cookie = new Cookies();  


      fetch(`http://localhost:8080/products`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          orderItemList: this.state.orderItems 
        })
      })
      
      fetch(`http://localhost:8080/orders/${cookie.get("username")}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({  
          order_date: currDate,  
          status: "purchased",
          user: {
            username: cookie.get("username")
          },
          orderItems: this.state.orderItems
        })
      })
      
      fetch(`http://localhost:8080/orderItems/cart/orderItem/${cookie.get("username")}/purchased`, {
        method: "PUT"
        })     
       
    } 

    render() { 
      let sidebar;
      sidebar = <SideBar />
      let alert;

      if(this.state.isCheckedOut) {
        alert =   <div class="alert alert-success">
        Your order has been confirmed, Please contact support for any issues regarding your order. Thank you!  
        </div>
      }
        return (
          <div> 
<div class="main">  

<div class="row">
  <div class="col-75">
    <div class="containerCheckout">
      <form  onSubmit={this.confirmCheckout}>
      
        <div class="rowCheckout">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" />
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" />
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address"  />
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" />

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state"/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip"/>
              </div>
            </div>
          </div>
{alert}
          <div class="col-md-5">
						<div class="cart-detail">
							<h2>Payment Method</h2>
							<div class="form-group">
								<div class="col-md-12">
									<div class="radio">
									   <label><input type="radio" name="optradio"/>Direct Bank Tranfer</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="col-md-12">
									<div class="radio">
									   <label><input type="radio" name="optradio"/>Check Payment</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="col-md-12">
									<div class="radio">
									   <label><input type="radio" name="optradio"/>Paypal</label>
									</div>
								</div>
							</div>
              <div class="form-group">
								<div class="col-md-12">
									<div class="radio">
									   <label><input type="radio" name="optradio"/>Visa</label>
									</div>
								</div>
							</div>
              <div class="form-group">
								<div class="col-md-12">
									<div class="radio">
									   <label><input type="radio" name="optradio"/>Master Card</label>
									</div>
								</div>
							</div>
						</div>
					</div>
          
        </div>
    
        

        <input type="submit" value="Confirm Order" class="btn" />
      </form>
    </div>
  </div>
          
</div>

</div>
</div> 
          );
    }
}
 
export default Checkout;