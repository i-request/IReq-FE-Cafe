import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class TestModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h3 ref={subtitle => this.subtitle = subtitle}>Checkout - step 1</h3>
          <form>
          <div className="modal-dialog" role="document">
          <div className="modal-content">
              <div className="modal-body">

                  <div className="row">
                      <div className="col-6">

                          <input type="text" className="form-control" id="custName" aria-describedby="custName" placeholder="Name" onChange={this.handleCustName} />
                      </div>

                      <div className="col-6">

                          <input type="email" className="form-control" id="custEmail" aria-describedby="custEmail" placeholder="Email address" onChange={this.handleCustName} />
                      </div>
</div>
<div>&nbsp;</div>
<div className="row">
                      <div className="col-4">

                          <input type="telephone" className="form-control" id="custMobile" aria-describedby="custMobile" placeholder="Mobile no." onChange={this.handleCustMobile} />
                      </div>



                      <div className="col-4">

                          <input type="text" className="form-control" id="companyName" aria-describedby="companyName" placeholder="Company" onChange={this.handleCustCompany} />
                      </div>

                      <div className="col-4">

                          <select className="form-control" id="productType" onChange={this.handleFloor}>
                              <option className="card-text" value={null}>Please select...</option>
                              <option className="card-text" value="B">B</option>
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
                      </div>
<div>&nbsp;</div>
                      <div className="row">
                      <div className="form-group col-12">

                          <textarea className="form-control" id="custAdditionalInfo" rows="1" placeholder="Additional information" ></textarea>
                      </div>

                  </div>

                  <div className="row">
                      <div className="form-group col-12">

                          <textarea className="form-control" id="custAdditionalInfo" rows="5" placeholder="{order_contents}">order_contents</textarea>
                          </div>
                          </div>

                  <div class="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Close</button>
                      <button type="button" className="btn btn-primary" onClick={this.submitCustOrder}>Pay</button>
                  </div>
              </div>
          </div>
      </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default TestModal;