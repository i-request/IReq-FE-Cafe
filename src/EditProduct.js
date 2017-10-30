import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Admin from './Admin';

class EditProduct extends Component {
  constructor(props) {
    super(props)
  }

//   updateinStockData(id, bool) {
//     const _id = id.toString()
//     return axios.put(`http://localhost:9007/products/${_id}?inStock=${bool}`)
//       .then(res => {
//         // console.log(this.props.name)
//       })
//       .catch(console.log)
//   }

//   stockedProduct(bool) {
//     const stocked = bool
//     return bool ? <input type="checkbox" className="form-check-input" checked="check" /> : <input type="checkbox" className="form-check-input" />
//   }

//   renderDone(bool) {
//     const doneColorClass = bool
//       ? 'success'
//       : 'danger';
//     const doneIcon = bool
//       ? 'check'
//       : 'times';
//     return (
//       <button id='doneBtn' className={`btn viewed-done-btn btn-${doneColorClass}`}>Done
//         <i className={`fa fa-${doneIcon}`} aria-hidden="true"></i>
//       </button>
//     );

//   }

  render() {
      console.log('EDIT PRODUCT!!!', this.props.selectedItem.name);
      const {price, description, name} = this.props.selectedItem;
    return (

<div>
    <div>&nbsp;</div>
<section className='container'>
  <form onSubmit={this.props.handleProdEdit}>
            <h2>Edit product:</h2>
            <div className="row">
              <div className="col-3">
                <label htmlFor="currentDescription">Current name</label>
                <input type="text" className="form-control" id="oldName" aria-describedby="oldName" disabled placeholder={name} />
              </div>
              <div className="col-3">
                <label htmlFor="currentPrice">Current price (pence)</label>
                <input type="number" className="form-control" id="oldPrice" aria-describedby="emailHelp" disabled placeholder={price} />
              </div>
              <div className="col-3">
                <label htmlFor="newDescription">New name</label>
                <input type="text" className="form-control" id="newName" aria-describedby="newName" placeholder="Type new name" />
              </div>
              <div className="col-3">
                <label htmlFor="newPrice">New price (pence)</label>
                <input type="number" className="form-control" id="newPrice" aria-describedby="emailHelp" placeholder="Type new price (pence)" />
              </div>
            </div>
            <div>&nbsp;</div>
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="currentProductDescription">Current description</label>
                <textarea className="form-control" id="currentProductDescription" rows="3" placeholder='' value={description} disabled>{description}</textarea>
              </div>

              <div className="form-group col-6">
                <label htmlFor="newProductDescription">New description</label>
                <textarea className="form-control" id="newProductDescription" rows="3" placeholder="New product description from server" value={description}></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
      </div>
    )
  }
}
export default EditProduct
