import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Admin from './Admin';

class Stock extends Component {
  constructor(props) {
    super(props)
    // this.handleStock = this.handleStock.bind(this)
  }

  updateStockData(id, bool) {
    const _id = id.toString()
    return axios.put(`http://localhost:9007/products/${_id}?inStock=${bool}`)
      .then(res => {
        // console.log(this.props.selectedItem.name)
      })
      .catch(console.log)
  }



  stockedProduct(bool) {
    const inStockColorClass = bool
      ? 'success'
      : 'danger';
    const inStockIcon = bool
      ? 'check'
      : 'times';
    return (
      <button id='stockBtn' className={`btn viewed-done-btn btn-${inStockColorClass}`}>In Stock
        <i className={`fa fa-${inStockIcon}`} aria-hidden="true"></i>
      </button>
    );

  }

  render() {
      console.log('STOCK!!!', this.props.selectedItem.inStock);
      const {inStock, _id} = this.props.selectedItem;
    //   console.log(inStock)
    return (

<div>
<div>&nbsp;</div>
<section className='container'>
  <form method="post" name="productUpdate" id="productUpdate">
            <h2>Stock:</h2>
            <div className="row">
            </div>

            <span id="stock" onClick={this.handleStock}>{this.stockedProduct(inStock)}</span>
          </form>
        </section>
      </div>
    )
  }
}
export default Stock
