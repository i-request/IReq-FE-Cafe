import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import AllTickets from './AllTickets';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets :[
        { _id: "mongoID",
          order_num: 5,
          isComplete: false,
          isViewed: false,
          isCanceled: false,
          delivery: false,
          order_content: [ 
            {
              _id: "mongoID",
              type: "food",
              name: "Super hot dog",
              extras: ["cheese", "ketchup", "catsup"],
              price: 500,
              inStock: true,
              allergens: ["meat", "dairy", "egg"]
            },
            {
            _id: "mongoID",
            type: "food",
            name: "Panini (ham and cheese)",
            extras: ["ketchup"],
            price: 550,
            inStock: true,
            allergens: ["meat", "dairy", "egg"]
            },
                        {
            _id: "mongoID",
            type: "drink",
            name: "Pepsi",
            extras: [""],
            price: 50,
            inStock: true,
            allergens: [""]
            }
          ],
          additional_instructions: "test message",
          user_details : {
            id : "mongoID",
            user_name: "Joe Bloggs",
            email : "joebloggs@hotmail.com", 
            phone_num : "01617991075", 
            user_company : "Co-Op",
            user_company_img : "co-op.png",
            user_floor : 5
          }
        },
        { _id: "mongoID",
          order_num: 6,
          isComplete: false,
          isViewed: false,
          isCanceled: false,
          delivery: true,
          order_content: [ 
            {
              _id: "mongoID",
              type: "food",
              name: "Sausage roll",
              extras: ["ketchup"],
              price: 100,
              inStock: true,
              allergens: ["meat", "dairy", "egg"]
            },
            {
            _id: "mongoID",
            type: "drink",
            name: "Filter coffee",
            extras: ["milk"],
            price: 200,
            inStock: true,
            allergens: ["dairy"]
            }
          ],
          additional_instructions: "test message",
          user_details : {
            id : "mongoID",
            user_name: "Jane Doe",
            email : "jane.doe@gmail.com", 
            phone_num : "07977123456", 
            user_company : "Silverchip",
            user_company_img : "silverchip.png",
            user_floor : 2
          }
        },{ _id: "mongoID",
        order_num: 5,
        isComplete: false,
        isViewed: false,
        isCanceled: false,
        delivery: false,
        order_content: [ 
          {
            _id: "mongoID",
            type: "food",
            name: "Super hot dog",
            extras: ["cheese"],
            price: 500,
            inStock: true,
            allergens: ["meat", "dairy", "egg"]
          },
          {
          _id: "mongoID",
          type: "food",
          name: "Panini (ham and cheese)",
          extras: ["ketchup"],
          price: 550,
          inStock: true,
          allergens: ["meat", "dairy", "egg"]
          },
                      {
          _id: "mongoID",
          type: "drink",
          name: "Pepsi",
          extras: [""],
          price: 50,
          inStock: true,
          allergens: [""]
          },
          {
            _id: "mongoID",
            type: "drink",
            name: "Breakfast Tea",
            extras: ["milk"],
            price: 50,
            inStock: true,
            allergens: [""]
            }
        ],
        additional_instructions: "test message",
        user_details : {
          id : "mongoID",
          user_name: "Joe Bloggs",
          email : "joebloggs@hotmail.com", 
          phone_num : "01617991075", 
          user_company : "Co-Op",
          user_company_img : "co-op.png",
          user_floor : 5
        }
      },
      { _id: "mongoID",
        order_num: 6,
        isComplete: false,
        isViewed: false,
        isCanceled: false,
        delivery: true,
        order_content: [ 
          {
            _id: "mongoID",
            type: "food",
            name: "Sausage roll",
            extras: ["ketchup"],
            price: 100,
            inStock: true,
            allergens: ["meat", "dairy", "egg"]
          },
          {
          _id: "mongoID",
          type: "drink",
          name: "Filter coffee",
          extras: ["milk"],
          price: 200,
          inStock: true,
          allergens: ["dairy"]
          },
          {
            _id: "mongoID",
            type: "drink",
            name: "Breakfast Tea",
            extras: ["milk"],
            price: 50,
            inStock: true,
            allergens: [""]
            }
        ],
        additional_instructions: "test message",
        user_details : {
          id : "mongoID",
          user_name: "Jane Doe",
          email : "jane.doe@gmail.com", 
          phone_num : "07977123456", 
          user_company : "Silverchip",
          user_company_img : "silverchip.png",
          user_floor : 2
        }
      }
      ]
    }
  }
render() {
  return (
    <div>
      <NavBar />
      <AllTickets tickets={this.state.tickets}/>
    </div>
  );
}
}

export default App;
