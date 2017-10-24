import React, {Component} from 'react';

class AllTickets extends Component {
  render() {
    return (
      <section class="container-fluid">
      <div class="row">
        {this.props.tickets.map((item, i, arr) => {
          return (
            <div key={i}>
              <div className="card rounded border border-primary mb-3 card-margin">
              <div className="card-header" key={i}><img className="rounded" width="40" height="40" alt='Company Logo' hspace="5" src={`/images/${item.user_details.user_company_img}`}/><span className="left align-top padded">{item.user_details.user_name}</span><span className="right">Order ID: <strong>{item._id}</strong></span></div>
              <div className="card-block">
              <table className="uk-table">
                <caption className="caption-style" key={i}>Additional Instructions<br />{item.additional_instructions}</caption>
                <thead>
                  <tr>
                    <td className="ticket-header">Order</td>
                    <td className="ticket-header">Extras</td>
                  </tr>
                </thead>
                <tbody>
                  {item.order_content.map((ticket, index) => {
                    return (
                      <tr key={index}>
                        <td className="order-details">{ticket.name}</td>
                        <td className="order-details">{item.order_content[index].extras}</td> 
                      </tr>
                    )
                  })
                 }
                </tbody>
              </table>
              <div class="card-footer bg-transparent border-primary"><a href="#" className="btn btn-primary">Viewed</a> <a href="#" className="btn btn-danger right">Done</a></div>
              </div>
            </div>
            </div>
          )
        })}
      </div>
      </section>
    )
  }
}
export default AllTickets
