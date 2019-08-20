import React, { Component } from 'react';

class SearchBar extends Component {
    state = {  }  


    render() { 
        return ( 
          <div class="md-form active-cyan active-cyan-2 mb-3">
            <input class="form-control" type="text" placeholder="Search" onChange={this.props.handleChange} aria-label="Search" />
          </div>
         );
    }
}
 
export default SearchBar;