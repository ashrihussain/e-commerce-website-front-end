import React, { Component } from 'react';   
import Cookies from 'universal-cookie';


class SingleReview extends Component {
    state = { 
        reviews: []
    }

  
        
    render() { 
        return ( 
            <div class="tab-content"> 

          
            <div class="review">         
           
										   		<div class="user-img" >
                                                       <img    src={this.props.review.user.profileimg} />
                                                   </div>
										   		<div class="desc">
										   			<h4>
										   				<span class="text-left">{this.props.review.user.username} </span>
										   				<span class="text-right">{this.props.review.date}</span>
										   			</h4>
										   			 
										   			<p> {this.props.review.review} </p> </div>
                                                       </div>

										   	</div>
                                             
         );
    }
}
 
export default SingleReview;