import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import AllTickets from './AllTickets';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [
        { //start of order obj
          order_id: 1,
          order_num: 10,
          order_complete: false,
          order_viewed: false,
          order_content: [ //user order (basket content)
          {//ITEM 1
              item: {
                type: "food",   //type of item in basket
                name: "burger", //name of item in basket
                product_id: 100 //product id of item in basket
              },
            size : "sm", //size of item added to basket
            quantity : 1,//quantity of items order for specific item
            price : 2 //individual price of item in basket
          },
          {//ITEM 2
            item: {
              type: "drink",
              name: "coffee",
              product_id: 90
            },
            size: "xl",
            quantity: 1,
            price: 1
          }
        ],//CLOSE ORDER CONTENT
        user_details : {
            id : 1, //user id
            email : "jonathan@forwardmarketingonline.co.uk", //user email
            phone_num : "01617991075", //user contact number
            user_company : "co-op", //user company
            user_floor : 5, //floor user is on
            allergens : {nuts : true, dairy : false, gluten : false} //user allergens
          }
        } //end of order obj
      ]
    }
  }
render() {
  return (
    <div>
      <NavBar />
      <AllTickets orders={this.state.orders}/>
    </div>
  );
}
}

export default App;
