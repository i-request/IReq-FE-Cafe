import React, { Component } from 'react';
import axios from 'axios';
import Admin from './Admin';

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.handleProdName = this.handleProdName.bind(this)
    this.handleProdPrice = this.handleProdPrice.bind(this)
    this.handleProdDescription = this.handleProdDescription.bind(this)
    this.genProdType = this.genProdType.bind(this)
    this.genProdAllergen = this.genProdAllergen.bind(this)
    this.genProdExtras = this.genProdExtras.bind(this)
    this.state = {
        name: '',
        price: 0,
        description: '',
        type: '',
        inStock: null,
        temperature: '',
        allergens: {
            dairy: false,
            gluten: false,
            nuts: false,
            eggs: false,
            peanuts: false,
            fish: false
        },
        extras: {
            milk: false,
            sugar: false,
            ketchup: false,
            mustard: false
        }
    }
  }
  submitProdAdd(e) {
    e.preventDefault();
    let name = this.state.name
    let price = this.state.price
    let description = this.state.description
    this.props.handleAddSubmit(name, price, description)
}
handleProdName(e) {
    e.preventDefault();
    let val = e.target.value
    this.setState({ name: val })
}
handleProdPrice(e) {
    e.preventDefault();
    let val = e.target.value
    this.setState({ price: val })
}
handleProdDescription(e) {
    e.preventDefault();
    let val = e.target.value
    this.setState({ description: val })
}
genProdType(val, key){
    return (e)=> {
      e.preventDefault();
      this.setState({ [key]: val })
  }
}
  genProdAllergen(allergen){
    return (e)=> {
      e.preventDefault();
      var newAllergen = Object.assign({}, this.state.allergens, {[allergen]: !this.state.allergens[allergen]})
      this.setState({ allergens: newAllergen})
  }  
}
genProdExtras(extra){
    return (e)=> {
      e.preventDefault();
      var newExtras = Object.assign({}, this.state.extras, {[extra]: !this.state.extras[extra]})
      this.setState({ extras: newExtras})
  }  
}



  render() {
    //   console.log('PRODUCT!!!', this.props.selectedItem);
      // const {price, description, name, type, allergens, extras} = this.props.selectedItem;
    return (

<div>
<div>&nbsp;</div>
<section className='container'>
<form method="post" name="addProduct" id="addProduct">
<h2>Add product:</h2>
<div className="row">
    <div className="col-4">
    <label for="addName">Name:</label>
    <input type="text" className="form-control" id="addName" aria-describedby="addName" placeholder="Type name" onChange={this.handleProdName}/>
    </div>
    <div className="form-group col-6">
    <label for="addDescription">Description:</label>
    <textarea className="form-control" id="addDescription" rows="1" placeholder="Add description" defaultValue="addDescription" onChange={this.handleProdDescription}></textarea>
  </div>
    <div className="col-2">
    <label htmlFor="addPrice">Price (pence):</label>
    <input type="number" className="form-control" id="addPrice" aria-describedby="addPrice" placeholder="Type price"  onChange={this.handleProdPrice}/>
    </div>
</div>

<div className="row">
  <div className="col-2">Type:</div>
  <div className="col-2">Hot or Cold:</div>
  <div className="col-4">Allergens:</div>
  <div className="col-4">Extras:</div>
  </div>

<div className="row">
  <div className="col-2">
      <div className="form-check">

      <label class="custom-control custom-radio">
  <input id="radio1" name="type" type="radio" className="custom-control-input" onClick={this.genProdType('food', 'type')}/>
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Food</span>
</label>
</div>

<div className="form-check">
<label class="custom-control custom-radio">
  <input id="radio2" name="type" type="radio"  className="custom-control-input" value="drink" onClick={this.genProdType('drink', 'type')}/>
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Drink</span>
</label>
</div>
       </div>

        <div className="col-2">
      <div className="form-check">
  <label class="custom-control custom-radio">
  <input id="radio3" name="temp" type="radio"  className="custom-control-input" value="hot" onClick={this.genProdType('hot', 'temperature')}/>
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Hot</span>
</label>
</div>
<div className="form-check">
<label class="custom-control custom-radio">
  <input id="radio4" name="temp" type="radio"  className="custom-control-input" value="cold" onClick={this.genProdType('cold', 'temperature')}/>
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Cold</span>
</label>
</div>
  </div>

  <div className="col-4 display: inline-block">  
      <div className="form-check-inline">
      <label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="dairy" onClick={this.genProdAllergen('dairy')}/>
  Dairy
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="gluten" onClick={this.genProdAllergen('gluten')}/>
  Gluten
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="nuts" onClick={this.genProdAllergen('nuts')}/>
  Nuts
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="eggs" onClick={this.genProdAllergen('eggs')}/>
  Eggs
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="peanuts" onClick={this.genProdAllergen('peanuts')}/>
  Peanuts
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="fish" onClick={this.genProdAllergen('fish')}/>
  Fish
</label>
</div>
</div>

<div className="col-4">  
      <div className="form-check-inline">
      <label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="milk" onChange={this.genProdExtras('milk')}/>
  Milk
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="sugar" onChange={this.genProdExtras('sugar')}/>
  Sugar
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="ketchup" onChange={this.genProdExtras('ketchup')}/>
  Ketchup
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="mustard" onChange={this.genProdExtras('mustard')}/>
  Mustard
</label>
</div>
</div>
</div>
<div>&nbsp;</div>

<button type="submit" className="btn btn-primary" onClick={this.submitProdAdd}>Submit</button>

</form>
        </section>
        <div>&nbsp;</div>
      </div>

    )
  }
}
export default AddProduct
