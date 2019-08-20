import React, { Component } from "react";
import "./css/util.css";
import "./css/main.css";
import "./css/core-style.css";
import Cookies from 'universal-cookie';
import UserProfile from "./UserProfile";
import SingleReview from "./SingleReview";
import NumberSpinner from "./NumberSpinnger";
import Review from "./Review";  
import SimpleZoom from 'react-simple-zoom';
import SideBar from "./sidebar";
import Login from "./login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
 

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      counter: 0,
      username: UserProfile.getName(),
      requiredQuantity: 1,
      cartItems: [],
      reviews: [],
      isAdded: false,
      isLoggedIn: false
    };
  }

  quantityIncrement = () => {

    this.setState({
      requiredQuantity: this.state.requiredQuantity + 1

    })
    
    {console.log(this.state.requiredQuantity)}
  }


  handleAddCart = e => {
        e.preventDefault();
        this.setState({
          isAdded: true
        }) 
   

    const cookies = new Cookies() ;


    fetch("http://localhost:8080/oitems", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        quantity: this.state.requiredQuantity,
        status: "cart",
        product: {
          pid: this.props.match.params.prodId
        },
        user: {
          username: cookies.get("username")
        }
      })
    });
   
  }

  componentDidMount() {
    fetch(`http://localhost:8080/products/${this.props.match.params.prodId}`)
      .then(data => data.json())
      .then(json => {
        this.setState({
          product: json
        });
      });

      fetch(`http://localhost:8080/reviews/${this.props.match.params.prodId}`)
      .then(data => data.json())
      .then(json => {
        this.setState({
          reviews: json
        });
      });

      const cookies = new Cookies(); 

      if(cookies.get("username") === "")
      { 
          this.setState({
            isLoggedIn: false 
          })

      }
      else {

        this.setState({
          username: cookies.get("username"),
          isLoggedIn: true

        })
      }
      
  }

  render() {
 
   const normalImage = this.state.product.prodImage
   const hsImage = this.state.product.prod_hsimage

   let sidebar;
   sidebar = <SideBar />
   let addtocart;

   if(this.state.isAdded) {
      addtocart =     <div> 
        <div class="alert alert-success">
     "" {this.state.product.productName} " added to Cart!
    </div>
    </div> 
      
   }

    return (
      <div> 
      <div class="row row-pb-lg">
      <div class="col-md-10 col-md-offset-1">
        <div class="product-detail-wrap   m-t-100">
          <div class="row">
           
          
                <div class="product-img m-l-30" >
                  <img src={this.state.product.prodImage} class="product-img" /> 
                </div>
              
             
            
            <div class="col-md-20">
           
              <div class="desc">
             
                <h3>{this.state.product.productName}</h3>
               
                <p class="price">
                  <span>$ {this.state.product.price}</span> 
                  </p>
                  
                 <p> <span>In Stock: {this.state.product.quantity}</span> </p>
                   
               
                <p> {this.state.product.prod_desc} </p>
                <div class="size-wrap">
                  <p class="size-desc">
                    Size: 
                    <a href="#" class="size size-1">xs</a>
                    <a href="#" class="size size-2">s</a>
                    <a href="#" class="size size-3">m</a>
                    <a href="#" class="size size-4">l</a>
                    <a href="#" class="size size-5">xl</a>
                    <a href="#" class="size size-5">xxl</a>
                  </p>
                </div>
                <div class="row row-pb-sm">
                  <div class="col-md-4 ">
                    <div class="m-r-300"> 
                    <NumberSpinner product={this.state.product} qIncrease={this.quantityIncrement} requiredQuantity={this.state.requiredQuantity} />
                    <div class="customreview">
                
                
                </div>
                </div>

                          </div>
                </div>


                {addtocart}

                {this.state.isLoggedIn ? 
                                  <p><a class="btn btn-primary btn-addtocart"  onClick={this.handleAddCart}>  Add to Cart</a></p>
                    :
                    <p><a class="btn btn-primary btn-addtocart"  >  <Link to="/login"> Add to Cart</Link></a></p>

              
              
              
              
              }
                
             
              </div> 
              <p>Customer Reviews: </p>
              
        {this.state.reviews.map( review => (
                <SingleReview review={review} />
              ))}  
              
              
            </div>
            <div class="m-t-50">  <Review productId={this.props.match.params.prodId} /> </div> 
            
          </div> 
        
        </div>  
      </div>
    </div> 
    </div>
    );
  }
}

export default Detail;
