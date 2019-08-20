import React, { Component } from 'react';
 
import Cookies from 'universal-cookie';
import Login from "./login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
 

class Review extends Component {
 
     

    state = { 
        showResults: false, 
        username: "",
        isAdded: false,
        isLoggedIn: false
     }

     componentDidMount() { 
    const cookies = new Cookies();
    const username = cookies.get("username");
    this.setState({
        username: username
    })



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

     saveReview = e => {

        e.preventDefault(); 
        const review = e.target.elements.review.value; 
        this.setState({
            isAdded: true
        })
    
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        const currDate =  date;


        fetch(`http://localhost:8080/reviews`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({  
          review: review,  
          date: currDate,
          user: {
            username: this.state.username
          },
          prod_id: {
            pid : this.props.productId
          },
        })
        
     })}



     showResult = e => {
         e.preventDefault();
         if (this.state.showResults == false){
            this.setState({
                showResults: true
            }
            )
         }
         else {
            this.setState({
                showResults: false
            }
            )
         }
    }
    
   
    render() { 

        let alert;

        if(this.state.isAdded) {
          alert =   <div class="alert alert-info">
                Your review has been placed! 
                </div>
        }
        return (  
    <div class="container">
	    <div class="row" >
		<div class="col-md-7">
    	<div class="well well-sm"> 
        {this.state.isLoggedIn ? 
                <button class="btn btn-outline-dark"   onClick={this.showResult}>Add review</button> 
                :
                <p><a class="btn btn-primary btn-addtocart"  >  <Link to="/login"> Add Review?</Link></a></p>
        }
            { this.state.showResults ?
            <div class="review">
            <form onSubmit={this.saveReview}>
            <div class="col-md-2">
                   
                        
                    </div>  
                <input class="texts" type="text" name="review" placeholder="Leave a review" /> 
                {alert}
                
                <button type="submit" class="btn"> Submit</button>
            </form>
        </div>
            
            
            : null }

                
            
            </div> 
            
		    </div>
	    </div>
    </div>
         );
    }
}
 
export default Review;