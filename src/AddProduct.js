import React, { Component } from 'react';
import axios from 'axios';
import Admin from './Admin';

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.handleProdName = this.handleProdName.bind(this);
    this.handleProdPrice = this.handleProdPrice.bind(this);
    this.handleProdDescription = this.handleProdDescription.bind(this);
    this.genProdType = this.genProdType.bind(this);
    this.genProdTemp = this.genProdTemp.bind(this);
    this.genProdAllergen = this.genProdAllergen.bind(this);
    this.genProdExtras = this.genProdExtras.bind(this);
    this.submitProdAdd = this.submitProdAdd.bind(this);
    this.renderAdd = this.renderAdd.bind(this);
    this.state = {
        submit: false,
        name: '',
        price: 0,
        description: '',
        type: null,
        inStock: true,
        temperature: null,
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
    let addedAllergens = []
    let addedExtras = []
    
    for(let key in this.state.allergens){
      if(this.state.allergens[key]) {
        addedAllergens.push(key)
      }
    }
    for(let key in this.state.extras){
      if(this.state.extras[key]) {
        addedExtras.push(key)
      }
    }
    let newProduct = Object.assign({}, this.state, {
      allergens: addedAllergens,
      extras: addedExtras
    });

   axios.post('https://irequest-be.herokuapp.com/products',  newProduct )
   .then(response=>{
     console.log(response)
   })
   .catch(error=>{
     console.log(error)
   })
   this.setState({ submit: true })
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
// genProdType(val){
//     return (e)=> {
//       e.preventDefault();
//       this.setState({ type: val })
//   }
// }

genProdType(e) {
  console.log(e.target.value)
  const val = e.target.value
    this.setState({ type: val })
  // const hotOrCold = e.target.value
}

genProdTemp(e) {
  console.log(e.target.value)
  const val = e.target.value
    this.setState({ temperature: val })
  // const hotOrCold = e.target.value
}

  genProdAllergen(allergen){
    return (e)=> {
      // e.preventDefault();
      var newAllergen = Object.assign({}, this.state.allergens, {[allergen]: !this.state.allergens[allergen]})
      this.setState({ allergens: newAllergen})
  }  
}
    genProdExtras(extra){
    return (e)=> {
      // e.preventDefault();
      var newExtras = Object.assign({}, this.state.extras, {[extra]: !this.state.extras[extra]})
      this.setState({ extras: newExtras})
  }  
}

renderAdd(bool) {
  const colorClass = bool
    ? 'success'
    : 'primary';
  const viewIcon = bool
    ? 'check'
    : ' ';
  return (
    <button id='addBtn' className={`btn viewed-done-btn btn-${colorClass}`}>Submit&nbsp; 
      <i className={`fa fa-${viewIcon}`} aria-hidden="true"></i>
    </button>
  );
}

  render() {
    //   console.log('PRODUCT!!!', this.props.selectedItem);
      // const {price, description, name, type, allergens, extras} = this.props.selectedItem;
    return (

<div>
<div>&nbsp;</div>
<section className='container-fluid'>
<form method="post" name="addProduct" id="addProduct">
<h2>Add product:</h2>
<div className="row">
    <div className="col-3">
    <label htmlFor="addName">Name:</label>
    <input type="text" className="form-control" id="addName" aria-describedby="addName" placeholder="Type name" onChange={this.handleProdName}/>
    </div>
<div className="col-3">
                <label htmlFor="type">Food or Drink:</label>
                <select className="form-control" id="type"  onChange={this.genProdType}>
                  <option className="card-text" value={null}>Please select...</option>
                  <option className="card-text" value="food">Food</option>
                  <option className="card-text" value="drink">Drink</option>
                  <option className="card-text" value="na">N/A</option>
                </select>
              </div>
              <div className="col-3">
                <label htmlFor="temperature">Hot or Cold:</label>
                <select className="form-control" id="temperature"  onChange={this.genProdTemp}>
                  <option className="card-text" value={null}>Please select...</option>
                  <option value="hot">Hot</option>
                  <option value="cold">Cold</option>
                  <option value="na">N/A</option>
                  </select>
              </div>
              <div className="col-3">
    <label htmlFor="addPrice">Price (pence):</label>
    <input type="number" className="form-control" id="addPrice" aria-describedby="addPrice" placeholder="Type price"  onChange={this.handleProdPrice}/>
    </div>
</div>

  {/* <div className="col-2">
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
  </div> */}
  <div>&nbsp;</div>
<div className="row">
  <div className="col-6">Allergens:</div>
  <div className="col-6">Extras:</div>
</div>

<div className="row">
  <div className="col-6">  
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

<div className="col-6">  
      <div className="form-check-inline">
      <label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="milk" onClick={this.genProdExtras('milk')}/>
Milk
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="sugar" onClick={this.genProdExtras('sugar')}/>
  Sugar
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="ketchup" onClick={this.genProdExtras('ketchup')}/>
Ketchup
</label>
</div>
<div className="form-check-inline">
<label className="form-check-label">
  <input className="form-check-input" type="checkbox" value="mustard" onClick={this.genProdExtras('mustard')}/>
Mustard
</label>
</div>
</div>
</div>

<div>&nbsp;</div>

<span id="addBtn" className="span-width" onClick={this.submitProdAdd}>{this.renderAdd(this.state.submit)}</span>

</form>
        </section>
        <div>&nbsp;</div>
      </div>

    )
  }
}
export default AddProduct
