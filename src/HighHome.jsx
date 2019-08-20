import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Home from './home';
import Cookies from 'universal-cookie';
import SideBar from "./sidebar";

class HighHome extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        filterlist: [],
        mainlist: [],
        welcome: ""
      }

    componentDidMount() {
        fetch("http://localhost:8080/products") 
        .then(res => res.json())
        .then(json => {
          this.setState({ 
            mainlist: json,
            filterlist: json
          });
        }); 
 
    }

    handleChange(e) {
        
        let thislist = [];
        let createdlist = [];

        if (e.target.value !== "") {
          thislist = this.state.mainlist; 
          createdlist = thislist.filter(item => {
                const lc = item.productName.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
          createdlist = this.state.mainlist;
        }
        this.setState({
          filterlist: createdlist
          });
    }


    render() { 
     let welcome;
     const cookie= new Cookies();
     let sidebar;
     sidebar = <SideBar />
      if (this.props.location.state != null) {
        welcome = <div class="alert alert-success">
        {this.props.location.state.welcome} {cookie.get("username")} !
        </div>
      }else {
         
      }
   
        return (  
            <div>
              
               {welcome}
                <SearchBar handleChange={this.handleChange} />
                <Home filterlist={this.state.filterlist } />
            </div>
        );
    }
}
 
export default HighHome;