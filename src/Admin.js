import React, { Component } from 'react';
import axios from 'axios';
import Stock from './Stock';
import EditProduct from './EditProduct';
import AddProduct from './AddProduct';
// import ReactDOM from 'react-dom';

class Admin extends Component {
  constructor(props) {
    super(props)
    this.fetchProducts = this.fetchProducts.bind(this)
    this.handleOnSelect = this.handleOnSelect.bind(this)
    // this.updateStockData = this.updateStockData.bind(this)
    // this.stockedProduct = this.stockedProduct.bind(this)
    this.toggleStock = this.toggleStock.bind(this)
    this.toggleAdd = this.toggleAdd.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleStock = this.handleStock.bind(this)
    // this.handleProdEdit = this.handleProdEdit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.state = {
      products: [],
      selectedItem: null,
      showStock: false,
      showEdit: false,
      showAdd: false,
      type: []
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

  // updateStockData(e) {
  //   e.preventDefault();
  //   console.log(e)
  //   const _id = e.toString()
  //   const bool = e.inStock
  //   return axios.put(`http://localhost:9007/products/${_id}?inStock=${bool}`)
  //     .then(res => {
  //       // console.log(res)

  //     })
  //     .catch(console.log)
  // }

  handleStock(e) {
    e.preventDefault();
    const bool = this.state.selectedItem.inStock
    let newSelected = Object.assign({}, this.state.selectedItem, { inStock: !this.state.selectedItem.inStock })
    this.setState({ selectedItem: newSelected })
    console.log(bool)
    return axios.put(`http://localhost:9007/products/${this.state.selectedItem._id}?inStock=${!bool}`)
      .then(console.log("DONE!!!"))
      .catch(console.log)
  }

  handleOnSelect(e) {
    console.log(this.state.products)
    // console.log(e.target)
    // find the specific product thats id matches product id from e
    const selectedItem = this.state.products.find((product) => product._id === e.target.value);
    // Once found, populate selectedItem on state
    this.setState({ selectedItem })
  }

  // handleProdEdit(e) {
  //   e.preventDefault();
  //   const nameStr = this.state.name

  //   // const priceNum = this.state.selectedItem.price
  //   // const descriptionStr = this.state.selectedItem.description
  //   let newName = Object.assign({}, this.state.selectedItem, { name: this.state.selectedItem.name })
  //   this.setState({ newName })
  //       console.log(nameStr)
  //   console.log(newName)
  //   // console.log(name)
  //   return axios.put(`http://localhost:9007/products/${this.state.selectedItem._id}?name=${nameStr}`)
  //     .then(console.log("DONE!!!"))
  //     .catch(console.log)
  // }

  handleEditSubmit(name, price, description) {
   let id = this.state.selectedItem._id
   let numPrice = Number(price)
    this.setState({ selectedItem: { name: name, price: price, description: description }})
    return axios.put(`http://localhost:9007/products/${id}?name=${name}`)
    .then(()=> {
    return axios.put(`http://localhost:9007/products/${id}?price=${numPrice}`)
    })
    .then(() => {
      return axios.put(`http://localhost:9007/products/${id}?description=${description}`)
    })
    .catch(console.log)
  }

  handleAddSubmit({addProduct}) {
    // let id = this.state.selectedItem._id
    // let numPrice = Number(price)
     this.setState({ selectedItem: {} })
     return axios.post(`http://localhost:9007/products/`)
     .then(console.log("DONE!!!"))
     .catch(console.log)
   }
  //  name: name, price: price, description: description, type: type, allergens: allergens, extras: extras 


  // stockedProduct() {
  //   console.log(this.state.selectedItem)
  //   return this.state.selectedItem.inStock ? <input type="checkbox" className="form-check-input" defaultChecked="check" /> : <input type="checkbox" className="form-check-input" />
  // }

  toggleStock(e) {
    e.preventDefault();
    // console.log(e.target.id)
    this.setState({ showStock: !this.state.showStock, showEdit: false, showAdd: false })
  }
  toggleEdit(e) {
    e.preventDefault();
    // console.log(e.target.id)
    this.setState({ showEdit: !this.state.showEdit, showAdd: false, showStock: false })
  }
  toggleAdd(e) {
    e.preventDefault();
    // console.log(e.target.id)
    this.setState({ showAdd: !this.state.showAdd, showEdit: false, showStock: false })
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
                  <option className="card-text" value="food">Food</option>
                  <option className="card-text" value="drink">Drink</option>
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
                  <option className="card-text" value={null} >Please select...</option>
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
            <div>&nbsp;</div>
            <div className="row">
              <div className="col-4">{this.state.selectedItem && <button
                type="submit" id="stockBtn"
                className="btn btn-danger"
                onClick={this.toggleStock.bind(this)}
              >
                Toggle Stock
                </button>}</div>

              <div className="col-4">{this.state.selectedItem && <button
                type="submit" id="editBtn"
                className="btn btn-info"
                onClick={this.toggleEdit.bind(this)}
              >
                Edit Product
                </button>}</div>

              <div className="col-4">{this.state.selectedItem && <button
                type="submit" id="addBtn"
                className="btn btn-warning"
                onClick={this.toggleAdd.bind(this)}
              >
                Add Product
                </button>}</div>
            </div>

          </form>
        </section>
        <span id="">{this.state.showStock && <Stock selectedItem={this.state.selectedItem} handleStock={this.handleStock} />}</span>
        {this.state.showEdit && <EditProduct selectedItem={this.state.selectedItem}  handleProdEdit={this.handleProdEdit} handleEditSubmit={this.handleEditSubmit}/>}
        {this.state.showAdd && <AddProduct selectedItem={this.state.selectedItem} handleProdAdd={this.handleProdAdd} handleAddSubmit={this.handleAddSubmit}/>}
      </div>
    )
  }
}
export default Admin
