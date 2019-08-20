import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Home from './home';
import AdminHome from './AdminHome';
import AdminNavBar from "./AdminNavBar";
import SideBar from "./sidebar";


class HighHomeAdmin extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        filterlist: [],
        mainlist: []
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
        let sidebar;
        sidebar = <AdminNavBar />
        return (  
            <div>
                 
                <SearchBar handleChange={this.handleChange} />
                <AdminHome filterlist={this.state.filterlist} />
            </div>
        );
    }
}
 
export default HighHomeAdmin;