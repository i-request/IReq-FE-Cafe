import React, {Component} from 'react';
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props)
    this.fetchProducts = this.fetchProducts.bind(this)
    this.state = {
      products: [],
      formSettings: {
        name: null,
        price: null,
        description: null
      }
    }
  }
  componentDidMount() {
    this.fetchProducts()
  }
  fetchProducts() {
    return axios.get('http://localhost:9007/products')
      .then(res => {
      console.log(res.data)
      this.setState({products: res.data})
        })
      .catch(console.log)
  }

  render( ) {
    return (
      <div>
      <h1>Admin</h1>
      <section className='container'>
      <form method="post" name="productUpdate" id="productUpdate">
        <h2>Select Product:</h2>
        <div className="row">
  <div className="col-6">
    <label for="productSearch">Search product</label>
    <input type="text" className="form-control" id="productSearch" aria-describedby="emailHelp" placeholder="Type product here"/>
  </div>
  <div className="col-6">
  <label for="productList">Select product from list</label>
  <select className="form-control" id="filteredList">

  {this.state.products.map((product, index) => {
     return (
         <option className="card-text" key={index}>{product.name}</option>

         )
     })}
 </select>
  </div>
  </div>
  <div>&nbsp;</div>
<div>OR</div>
<div>&nbsp;</div>
 <div className="row">
     <div className="col-2">
     <label for="productSearch">Drink or Food</label>
     <select className="form-control" id="productType">
      <option value="1">Drink</option>
      <option value="2">Food</option>
    </select>
     </div>
     <div className="col-2">
     <label for="productSearch">Hot or Cold</label>
     <select className="form-control" id="hotOrCold">
      <option value="1">Hot</option>
      <option value="2">Cold</option>
    </select>
     </div>
     <div className="col-6">
     <label for="productSearch">Select product from list</label>
     <select className="form-control" id="hotDrink">

     {this.state.products.map((product, index) => {
        return (
            <option className="card-text" key={index}>{product.name}</option>

            )
        })}
    </select>
     </div>
     <div className="col-2">
  <label className="form-check-label">
<input type="checkbox" className="form-check-input"/>
In Stock
    </label>
    <small id="stockHelp" className="form-text text-muted">Un-tick if out of stock.</small>
       </div>
  </div>

  <h2>Change stock status:</h2>
 <div className="form-group">
  </div>
<h2>Product:</h2>
 <div className="row">
  <div className="col-3">
  <label for="currentDescription">Current name</label>
    <input type="text" className="form-control" id="oldName" aria-describedby="oldName" disabled placeholder='Current product name{}'/>
  </div>
  <div className="col-3">
  <label for="currentPrice">Current price (pence)</label>
    <input type="number" className="form-control" id="oldPrice" aria-describedby="emailHelp" disabled placeholder="Current product price{}"/>
  </div>
  <div className="col-3">
  <label for="newDescription">New name</label>
  <input type="text" className="form-control" id="newName" aria-describedby="newName" placeholder="Type new name"/>
  </div>
  <div className="col-3">
  <label for="newPrice">New price (pence)</label>
  <input type="number" className="form-control" id="newPrice" aria-describedby="emailHelp" placeholder="Type new price (pence)"/>
  </div>
</div>
<div>&nbsp;</div>
<div className="row">
  <div className="form-group col-6">
    <label for="currentProductDescription">Current description</label>
    <textarea className="form-control" id="currentProductDescription" rows="3" placeholder="Current product description from server{}" disabled></textarea>
  </div>

 <div className="form-group col-6">
    <label for="newProductDescription">New description</label>
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
