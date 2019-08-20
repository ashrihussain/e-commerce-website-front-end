import React, { Component } from 'react';
import "./product.css"
import Cookies from 'universal-cookie';


class UpdateProduct extends Component {


    componentDidMount() {
        fetch("http://localhost:8080/products") 
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            products: json,
            isClicked: false,
            disabled: true,
            visible: false,
            updateDisabled: false,
            visibleAlert: false,
            updateSelected: false,
            saveSelected: false
          });
        }); 
    }



    constructor(props) {
        super(props);
        this.state = {   
            pname: "",
            price: 0,
            quantity: 0,
            image: '',
            description: '',
            status: ''};
     
         
            this.handleChangePrice = this.handleChangePrice.bind(this);
            this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
            this.handleChangeStatus = this.handleChangeStatus.bind(this);

      }
      handleUpdate = e => { 
        e.preventDefault();
        

        this.setState({
            disabled: false,
            updateDisabled: false,
            visibleAlert: true,
            updateSelected: true
        }) 
    }
      
    updateProduct = () => { 
      console.log(this.props.product) 
      fetch(`http://localhost:8080/products/${this.props.product.pid}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({  
          productName: this.state.pname,  
          quantity: this.state.quantity,
          price: this.state.price,
          prodStock: this.state.quantity,
          prodImage: this.state.image,
          status: this.state.status,
          prod_desc: this.state.description
        })
      });
 
    }

    handleChangePrice = (event) => {
        this.setState({price: event.target.value});
    }
    handleChangeQuantity = (event) => {
        this.setState({quantity: event.target.value});
    }
   
    handleChangeStatus = (event) => {
        this.setState({status: event.target.value});
    }
  

    state = {  }
    render() {  
        return (  
      <form id="updateProductForm" onSubmit={this.updateProduct}>
      <div>
        {/* <span class="close">&times;</span> */}
        <div class="col-50">
            <br></br>
            <h3>Update Product</h3>
          
            <label for="price"><i class="fa fa-envelope"></i> Price</label>
            <input type="text" id="price" placeholder= {this.props.product.price} onChange={this.handleChangePrice} /> 
            <label for="quantity"><i class="fa fa-institution"></i> Amount in Stock</label>
            <input type="text" id="quantity"placeholder= {this.props.product.quantity}  onChange={this.handleChangeQuantity}/> 
            <label for="status"><i class="fa fa-institution"></i> Status</label>   
              <select placeholder={this.props.product.status} form="updateProductForm" onChange={this.handleChangeStatus}>
                <option value="Available">Available </option>
                <option value="Unavailable"> Unavailable</option> 
              </select> 
              <br></br> 
              <hr />
            <input type="submit" value="Update Product"  class="updatebtn"/> 
          
            <a class="updatebtn" onClick={this.props.closeModal}> Close </a>
          </div>
            
      </div>
      </form>
         );
    }
}
 
export default UpdateProduct;