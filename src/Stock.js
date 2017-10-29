import React, { Component } from 'react';
import axios from 'axios';
import Admin from './Admin';

class Stock extends Component {
  constructor(props) {
    super(props)
  }

  updateinStockData(id, bool) {
    const _id = id.toString()
    return axios.put(`http://localhost:9007/products/${_id}?inStock=${bool}`)
      .then(res => {
        console.log(this.props.name)
      })
      .catch(console.log)
  }

//   stockedProduct(bool) {
//     const stocked = bool
//     return bool ? <input type="checkbox" className="form-check-input" checked="check" /> : <input type="checkbox" className="form-check-input" />
//   }

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
//   handleStock(_id) {
//     const t = this;
//     return (e) => {
//       let newState = this.props.selectedItem.map((item) => {
//         if (item._id === orderNum) {
//           item.isComplete = !item.isComplete
//           t.updateDoneData(item._id, item.isComplete)
//         }
//         return item;
//       })
//       this.setState({tickets: newState})
//     }
//   }
  render() {
      console.log('PRODUCT!!!', this.props.selectedItem);
      const {inStock} = this.props.selectedItem;
      console.log(inStock)
    return (

<div>
<section className='container'>
  <form method="post" name="productUpdate" id="productUpdate">
            <h2>Stock:</h2>
            <div className="row">
            </div>

            <span id="stock" >{this.stockedProduct(inStock)}</span>
          </form>
        </section>
      </div>
    )
  }
}
export default Stock
