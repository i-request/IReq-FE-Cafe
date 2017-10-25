<div class="card">
  <div class="card-header">
  <img width="40" height="40" alt='Company Logo' src={`/images/${item.user_details.user_company_img}`}/>
  <h4 className="header" key={i}><div className='right'>Order ID: <strong>{item._id}</strong></div><br/><div className='left'>{item.user_details.user_name}</div></h4>
  </div>
  <div class="card-block">
  <table className="uk-table">

    <caption className="caption-style" key={i}>Additional Instructions / Extras<br /> <p>{item.additional_instructions}<br />{item.order_content[i].extras}</p></caption>

    <thead>
      <tr>
        <th className="ticket-header">Product</th>
        <th className="ticket-header">Size</th>
        <th className="ticket-header">Quantity</th>
      </tr>
    </thead>
    <tbody>

      {item.order_content.map((ticket, index) => {
        return (
          <tr key={index}>
            <td colSpan="3" className="order-details" key={index}>{ticket.name}</td>
            {/* <td className="order-details" key={index}>{ticket.size}</td>
            <td className="order-details" key={index}>{ticket.quantity}</td> */}
          </tr>
        )
      })
     }
    </tbody>
  </table>
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="card">
<div className="card-header">
    featured
    </div>
  <div className="uk-grid-small uk-flex-middle uk-grid">
    <div className="uk-width-auto">
      
    </div>
    <div className="uk-width-expand">
      
    </div>
  </div>
</div>
<div className="uk-card-body">
  <table className="uk-table">

    <caption className="caption-style" key={i}>Additional Instructions / Extras<br /> <p>{item.additional_instructions}<br />{item.order_content[i].extras}</p></caption>

    <thead>
      <tr>
        <th className="ticket-header">Product</th>
        <th className="ticket-header">Size</th>
        <th className="ticket-header">Quantity</th>
      </tr>
    </thead>
    <tbody>

      {item.order_content.map((ticket, index) => {
        return (
          <tr key={index}>
            <td colSpan="3" className="order-details" key={index}>{ticket.name}</td>
            {/* <td className="order-details" key={index}>{ticket.size}</td>
            <td className="order-details" key={index}>{ticket.quantity}</td> */}
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