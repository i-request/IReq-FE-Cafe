import React, { Component } from 'react';
import axios from 'axios';
import Stock from './Stock';
import EditProduct from './EditProduct';
import AddProduct from './AddProduct';
import ReactDOM from 'react-dom';

class Admin extends Component {
  constructor(props) {
    super(props)
    this.fetchProducts = this.fetchProducts.bind(this)
    this.handleOnSelect = this.handleOnSelect.bind(this)
    this.updateinStockData = this.updateinStockData.bind(this)
    this.stockedProduct = this.stockedProduct.bind(this)
    this.toggleBtn = this.toggleBtn.bind(this)
    this.state = {
      products: [],
      selectedItem: null,
      showStock: false,
      showEdit: false,
      showAdd: false
    }
    

  }
  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts() {
    return axios.get('http://localhost:9007/products')
      .then(res => {
        // console.log(res.data)
        this.setState({ products: res.data })
      })
      .catch(console.log)
  }

  updateinStockData(id, bool) {
    const _id = id.toString()
    return axios.put(`http://localhost:9007/products/${_id}?inStock=${bool}`)
      .then(res => {
        // console.log(res)
      })
      .catch(console.log)
  }

  handleOnSelect(e) {
    console.log(this.state.products)
    // console.log(e.target.value)
    // console.log(e.target)
    // find the specific product thats id matches product id from e
    const selectedItem = this.state.products.find((product) => product._id === e.target.value);
    // Once found, populate selectedItem on state
    this.setState({selectedItem})
  }

  stockedProduct() {
    console.log(this.state.selectedItem)
    return this.state.selectedItem.inStock ? <input type="checkbox" className="form-check-input" defaultChecked="check" /> : <input type="checkbox" className="form-check-input" />
  }
  
    toggleBtn(e) {     
      e.preventDefault();
      console.log(e.target.id)
      const showBtn = e.target.id
      this.setState({ showEdit: !this.state.showEdit })
    
  }


  render() {
    return (
      <div>
        <section className='container'>
          <form method="post" name="productSelect" id="productSelect">
            <h2>Select product:</h2>
            {/* <div className="row">
              <div className="col-6">
                <label htmlFor="productSearch">Search product</label>
                <input type="text" className="form-control" id="productSearch" aria-describedby="emailHelp" placeholder="Type product here" />
              </div>
              <div className="col-6">
                <label htmlFor="productList">Select product from list</label>
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
            <div>&nbsp;</div> */}
            <div className="row">
              <div className="col-3">
                <label htmlFor="productSearch">Drink or Food</label>
                <select className="form-control" id="productType" onChange={this.handleOnSelect}>
                <option className="card-text" value={null}>Please select...</option>

                {this.state.products.map((product, index) => {
                    return (
                      <option className="card-text" value={product._id} key={index}>{product.type}</option>
                    )
                  })}

                  <option value="hot drink">Drink</option>
                  <option value="food">Food</option>
                </select>
              </div>
              <div className="col-3">
                <label htmlFor="productSearch">Hot or Cold</label>
                <select className="form-control" id="hotOrCold">
                <option className="card-text" value={null}>Please select...</option>
                  <option value="1">Hot</option>
                  <option value="2">Cold</option>
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="productSearch">Select product from list</label>
                <select className="form-control" id="hotDrink" onChange={this.handleOnSelect}>
                  <option className="card-text" value={null}>Please select...</option>
                  {this.state.products.map((product, index) => {
                    product.type === "hot drink"
                    return (
                      <option className="card-text" value={product._id} key={index}>{product.name}</option>
                    )
                  })}
                </select>
              </div>

            </div>
            {/* {this.state.showEdit && <ChangeStock selectedItem={this.state.selectedItem} />}
            <div>&nbsp;</div>
            <div><h3>Update stock / remove from menu</h3></div>
            <div className="form-group">
                <label className="form-check-label">
                  <span>{this.stockedProduct(this.state.selectedItem.inStock)}</span>
                  In Stock
                </label>
                <small id="stockHelp" className="form-text text-muted">Un-tick if out of stock and to be removed from the menu.</small>
            </div> */}
                {/* <button 
                  type="submit" 
                  className="btn btn-primary"
                >
                  Submit
                </button>    */}
                
                {this.state.selectedItem && <button 
                  type="submit" id="stockBtn"
                  className="btn btn-danger" 
                  onClick={this.toggleBtn.bind(this)}
                >
                  Toggle Stock
                </button>}

                {this.state.selectedItem && <button 
                  type="submit" id="editBtn"
                  className="btn btn-info" 
                  onClick={this.toggleBtn.bind(this)}
                >
                  Edit Product
                </button>}

                {this.state.selectedItem && <button 
                  type="submit" id="addBtn"
                  className="btn btn-warning" 
                  onClick={this.toggleBtn.bind(this)}
                >
                  Add Product
                </button>}

          </form>
        </section>
            {this.state.showEdit && <Stock selectedItem={this.state.selectedItem} />}
            {this.state.showEdit && <EditProduct selectedItem={this.state.selectedItem} />}
            {this.state.showEdit && <AddProduct selectedItem={this.state.selectedItem} />}
      </div>
    )
  }
}
export default Admin
