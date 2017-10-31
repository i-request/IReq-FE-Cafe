import React, { Component } from 'react';

class CheckoutModal extends Component {


    render() {
        return (

                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="custName">Name:</label>
                                        <input type="text" className="form-control" id="custName" aria-describedby="custName" placeholder="Type name" onChange={this.handleCustName} />
                                    </div>

                                    <div className="col-4">
                                        <label htmlFor="custEmail">Email:</label>
                                        <input type="email" className="form-control" id="custEmail" aria-describedby="custEmail" placeholder="Type name" onChange={this.handleCustName} />
                                    </div>

                                    <div className="col-4">
                                        <label htmlFor="custMobile">Mobile No:</label>
                                        <input type="telephone" className="form-control" id="custMobile" aria-describedby="custMobile" placeholder="Type mobile number" onChange={this.handleCustMobile} />
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-3">
                                        <label htmlFor="companyName">Company:</label>
                                        <input type="text" className="form-control" id="companyName" aria-describedby="companyName" placeholder="Type company name" onChange={this.handleCustCompany} />
                                    </div>

                                    <div className="col-3">
                                        <label htmlFor="productSearch">Floor</label>
                                        <select className="form-control" id="productType" onChange={this.handleFloor}>
                                            <option className="card-text" value={null}>Please select...</option>
                                            <option className="card-text" value="LG">LG</option>
                                            <option className="card-text" value="G">G</option>
                                            <option className="card-text" value="UG">UG</option>
                                            <option className="card-text" value="1">1</option>
                                            <option className="card-text" value="2">2</option>
                                            <option className="card-text" value="3">3</option>
                                            <option className="card-text" value="4">4</option>
                                            <option className="card-text" value="5">5</option>
                                            <option className="card-text" value="6">6</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-6">
                                        <label htmlFor="custAdditionalInfo">Additional information</label>
                                        <textarea className="form-control" id="custAdditionalInfo" rows="3" placeholder='Additional information' value="" ></textarea>
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={this.submitCustOrder}>Submit order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    );
}
}

export default CheckoutModal