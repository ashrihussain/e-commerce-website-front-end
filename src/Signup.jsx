import React, { Component } from 'react';
import Cookies from 'universal-cookie';

class Signup extends Component {
    state = {  
        username:  "",
        password : "",
        emailAddress: "",
        firstName: "",
        residentAddress: "",
        contactNumber: "",
        status: "Shopper",
        profileimg: "",
        disabled: true,
        isCheckedOut: false
    }

  
    handleNew = e =>
    {
        const cookie = new Cookies();

         e.preventDefault(); 
 

        fetch(`http://localhost:8080//login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({  
            username: this.state.username,  
            password: this.state.password,
            emailAddress: this.state.emailAddress,
            firstName: this.state.firstName,
            residentAddress: this.state.residentAddress,
            contactNumber: this.state.contactNumber,
            status: this.state.status,
            profileimg: this.state.profileimg,
            
        })
      });
        console.log("USER ADDED")
        this.setState({
            isCheckedOut: true
          })
    }

    
    handleAddUsername = event => {
        this.setState({
            username: event.target.value
        });
    }
    handleAddPassword = (event) => {
        this.setState({password: event.target.value});
    }
 
    hadnleAddEmail = (event) => {
        this.setState({emailAddress: event.target.value});
    }  
    
    handleAddfname = (event) => {
        this.setState({firstName: event.target.value});
    }
    handleAddRadreess = event => {
        this.setState({
            residentAddress: event.target.value
        });
    }
    handleAddContact = (event) => {
        this.setState({contactNumber: event.target.value});
    }
 
    handleAddImg = (event) => {
        this.setState({profileimg: event.target.value});
    }  
    
   

    render() { 
        let alert;
        if(this.state.isCheckedOut) {
            alert =   <div class="alert alert-success">
            Congratulations! Your account was successfully created! Please login with your account to start shopping! 
            </div>
          }
        return (  
            <div class="container"> 
            <form onSubmit={this.handleNew}> 
             <div class="fadeIn first">
                <div class="loginicon"> <img src={this.state.profileimg} id="icon" placeholder="http://laurauinteriordesign.com/wp-content/uploads/2018/03/avatar-placeholder.png" /></div>
            </div>
            {alert}
                <h3> Enter required details to sign up now!</h3>
             <input type="text" className="fadeIn second" name="profilpic" placeholder="Profile Picture URL"  onChange={this.handleAddImg}/>

            <input type="text" id="uname" required className="fadeIn second" name="username" placeholder="Username"  onChange={this.handleAddUsername} required/>
            <input type="text" className="fadeIn second" name="password" placeholder="Password"   onChange={this.handleAddPassword} required/>
            <input type="text" className="fadeIn second" name="email" placeholder="Email address"  onChange={this.hadnleAddEmail} required/>
            <input type="text" className="fadeIn second" name="fname" placeholder="First name"   onChange={this.handleAddfname} required/>
            <input type="text" className="fadeIn second" name="raddress" placeholder="Residential address"  onChange={this.handleAddRadreess} required/>
            <input type="text" className="fadeIn second" name="contact" placeholder="Contact number"  onChange={this.handleAddContact} required/> 
  
            
            <input type="submit"   value="Register!" /> 
            
            </form>
        </div>
        );
    }
}
 
export default Signup;