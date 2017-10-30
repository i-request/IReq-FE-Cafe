import React, { Component } from 'react';

class EditProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            description: ''
        }
        this.handleProdName = this.handleProdName.bind(this)
        this.handleProdPrice = this.handleProdPrice.bind(this)
        this.handleProdDescription = this.handleProdDescription.bind(this)
        this.submitProdEdit = this.submitProdEdit.bind(this)
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
    submitProdEdit(e) {
        e.preventDefault();
        let name = this.state.name || this.props.selectedItem.name
        let price = this.state.price || this.props.selectedItem.price
        let description = this.state.description || this.props.selectedItem.description
        this.props.handleEditSubmit(name, price, description)
    }

    render() {
        console.log('EDIT PRODUCT!!!', this.props.selectedItem);
        const { price, description, name } = this.props.selectedItem;
        return (

            <div>
                <div>&nbsp;</div>
                <section className='container'>
                    <form>
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
                                <input type="text" className="form-control" id="newName" aria-describedby="newName" placeholder="Type new name" onChange={this.handleProdName}/>
                            </div>
                            <div className="col-3">
                                <label htmlFor="newPrice">New price (pence)</label>
                                <input type="number" className="form-control" id="newPrice" aria-describedby="emailHelp" placeholder="Type new price (pence)"  onChange={this.handleProdPrice}/>
                            </div>
                        </div>
                        <div>&nbsp;</div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="currentProductDescription">Current description</label>
                                <textarea className="form-control" id="currentProductDescription" rows="3" placeholder='' value={description} disabled >{description}</textarea>
                            </div>

                            <div className="form-group col-6">
                                <label htmlFor="newProductDescription">New description</label>
                                <textarea className="form-control" id="currentProductDescription" rows="3" placeholder='Add new description' onChange={this.handleProdDescription} ></textarea>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={this.submitProdEdit}>Submit</button>
                    </form>
                </section>
            </div>
        )
    }
}
export default EditProduct
