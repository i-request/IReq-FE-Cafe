import React, {Component} from 'react';

class Admin extends Component {
  render( ) {
    return (
      <div>
      <h1>Admin</h1>
      <section className='container'>
      <form>
  <div className="form-group">
    <label for="productSearch">Search product</label>
    <input type="text" className="form-control" id="productSearch" aria-describedby="emailHelp" placeholder="Type product here"/>
  </div>

  <div className="row">
     <div className="col-3">
     <label for="productSearch">Or select: Drink or Food</label>
     <select className="form-control" id="exampleSelect1">
      <option>Drink</option>
      <option>Food</option>
    </select>
     </div>
     <div className="col-3">
     <label for="productSearch">Hot or Cold</label>
     <select className="form-control" id="hotOrCold">
      <option>Hot</option>
      <option>Cold</option>
    </select>
     </div>
     <div className="col-6">
     <label for="productSearch">Select product from list</label>
     <select className="form-control" id="hotDrink">
      <option>Breakfast Tea (rg)</option>
      <option>Latte (rg)</option>
    </select>
     </div>
  </div>


  <div className="form-group">
  <label className="form-check-label">
<input type="checkbox" className="form-check-input"/>
In Stock
    </label>
    <small id="stockHelp" className="form-text text-muted">Un-tick if out of stock.</small>
  </div>

  <div className="row">
  <div className="col-3">
  <label for="currentDescription">Current product name</label>
    <input type="text" className="form-control" id="oldName" aria-describedby="oldName" disabled placeholder="Current product name"/>
  </div>
  <div className="col-3">
  <label for="currentPrice">Current price (in pence)</label>
    <input type="number" className="form-control" id="oldPrice" aria-describedby="emailHelp" disabled placeholder="Current product price"/>
  </div>
  <div className="col-3">
  <label for="newDescription">New name</label>
  <input type="text" className="form-control" id="newName" aria-describedby="newName" placeholder="Type new name"/>
  </div>
  <div className="col-3">
  <label for="newPrice">New price (in pence)</label>
  <input type="number" className="form-control" id="newPrice" aria-describedby="emailHelp" placeholder="Type new price (in pence)"/>
  </div>
</div>
<div>&nbsp;</div>
<div className="row">
  <div className="form-group col-6">
    <label for="currentProductDescription">Current product description</label>
    <textarea className="form-control" id="currentProductDescription" rows="3" placeholder="Current product description from server" disabled></textarea>
  </div>

  <div className="form-group col-6">
    <label for="newProductDescription">New product description</label>
    <textarea className="form-control" id="newProductDescription" rows="3" placeholder="New product description from server"></textarea>
  </div>
</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</section>
</div>
    )
  }
}
export default Admin
