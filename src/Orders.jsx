import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import OrderItem from './order_item';
import OrderItems from './OrderItems';
import SideBar from "./sidebar";


class Orders extends Component {
    state = { 
      orders: []
     }

    componentDidMount() {
      const cookie = new Cookies();

      fetch(`http://localhost:8080/orders/${cookie.get("username")}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          orders: json
        });
      }); 

     }


    render() { 
      let sidebar;
      sidebar = <SideBar />
        return (  
          <div> 
            <div className="page">
            <form className="bg0 p-t-75 p-b-85">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                    <div className="m-l-25 m-r--38 m-lr-0-xl">
                      <div className="wrap-table-shopping-cart">
                        <table className="table-shopping-cart">
                          <tr className="table_head">
                            <th className="column-1">Your purchase history</th>
                            
                          </tr>
                          {this.state.orders.map( order => (  
                              <OrderItems orders= {order}/>  
                          ))} 
                        </table>
                      </div>
    
                      
                    </div>
                  </div>
    
                     
                     
                </div>
              </div>
            </form>
          </div>

          </div>
        );
    }
}
 
export default Orders;