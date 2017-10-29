import React, { Component } from 'react';
import axios from 'axios';
import Admin from './Admin';

class AddProduct extends Component {
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

  stockedProduct(bool) {
    const stocked = bool
    return bool ? <input type="checkbox" className="form-check-input" checked="check" /> : <input type="checkbox" className="form-check-input" />
  }

  renderDone(bool) {
    const doneColorClass = bool
      ? 'success'
      : 'danger';
    const doneIcon = bool
      ? 'check'
      : 'times';
    return (
      <button id='doneBtn' className={`btn viewed-done-btn btn-${doneColorClass}`}>Done
        <i className={`fa fa-${doneIcon}`} aria-hidden="true"></i>
      </button>
    );

  }

  render() {
      console.log('PRODUCT!!!', this.props.selectedItem);
      const {price, description, name} = this.props.selectedItem;
    return (

<div>
<section className='container'>
<form method="post" name="addProduct" id="addProduct">
<h2>Add product:</h2>
<div className="row">
    <div className="col-4">
    <label for="addName">Name:</label>
    <input type="text" className="form-control" id="addName" aria-describedby="addName" placeholder="Type name" />
    </div>
    <div className="form-group col-6">
    <label for="addDescription">Description:</label>
    <textarea className="form-control" id="addDescription" rows="1" placeholder="Add description"></textarea>
  </div>
    <div className="col-2">
    <label for="addPrice">Price (pence):</label>
    <input type="number" className="form-control" id="addPrice" aria-describedby="addPrice" placeholder="Type price" />
    </div>
</div>

<div className="row">
  <div className="col-2">Type:</div>
  <div className="col-2">Temperature:</div>
  <div className="col-4">Allergens:</div>
  <div className="col-4">Extras:</div>
  </div>

<div className="row">
  <div className="col-2">
      <div class="form-check">
  <label className="form-check-label">
  <input id="radio1" name="type" type="radio" className="form-check-input" value="food"/>
Food
</label>
</div>
<div class="form-check">
<label className="form-check-label">
  <input id="radio2" name="type" type="radio" className="form-check-input" value="drink"/>
Drink
</label>
</div>
       </div>

        <div className="col-2">
      <div class="form-check">
  <label className="form-check-label">
  <input id="radio3" name="temp" type="radio" className="form-check-input" value="hot"/>
Hot
</label>
</div>
<div class="form-check">
<label className="form-check-label">
  <input id="radio4" name="temp" type="radio" className="form-check-input" value="cold"/>
Cold
</label>
</div>
  </div>

  <div className="col-4">  
      <div className="form-check-inline">
      <label className="form-check-label">
  <input className="form-check-input" type="checkbox" value=""/>
  Dairy
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value=""/>
  Gluten
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="nuts"/>
  Nuts
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="eggs"/>
  Eggs
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="peanuts"/>
  Peanuts
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="fish"/>
  Fish
</label>
</div>
</div>

<div className="col-4">  
      <div className="form-check-inline">
      <label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="milk"/>
  Milk
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="sugar"/>
  Sugar
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="ketchup"/>
  Ketchup
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="mustard"/>
  Mustard
</label>
</div>
</div>
</div>
<div>&nbsp;</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>
        </section>
        <div>&nbsp;</div>
      </div>

    )
  }
}
export default AddProduct
