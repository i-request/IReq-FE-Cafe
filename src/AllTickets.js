import React, {Component} from 'react';

class AllTickets extends Component {
  render() {
    console.log(this.props.order)
    return (
      <div>
        {this.props.orders.map((item, i, arr) => {

          return (
            <div>

              <div className="test uk-card uk-card-default uk-width-1-5@m">
                <div className="uk-card-header">
                  <div className="uk-grid-small uk-flex-middle uk-grid">
                    <div className="uk-width-auto">
                      <img width="60" height="60" src="http://www.myunox.com/cms/wp-content/uploads/2013/03/coop.jpg"/>
                    </div>
                    <div className="uk-width-expand">
                      <h3 className="uk-card-title uk-margin-remove-bottom">{item.user_details.user_name} <br /> Order Id: {item.order_id}</h3>
                    </div>
                  </div>
                </div>
                <div className="uk-card-body">
                  <table className="uk-table">

                    <caption className="caption-style">Additional Instructions <br /> <p>{item.additional_instructions.message}</p></caption>

                    <thead>
                      <tr>
                        <th className="ticket-header">Product</th>
                        <th className="ticket-header">Size</th>
                        <th className="ticket-header">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>

                      {item.order_content.map((order, index) => {
                        return (
                          <tr>
                            <td className="order-details" key={index}>{order.item.name}</td>
                            <td className="order-details" key={index}>{order.size}</td>
                            <td className="order-details" key={index}>{order.quantity}</td>
                          </tr>
                        )
                      })
                     }
                    </tbody>
                  </table>
                  <ul className="uk-list uk-list-striped"></ul>
                </div>
                <div className="uk-card-footer">
                  <a href="#" className="uk-button uk-button-text">Read more</a>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    )
  }
}
export default AllTickets
