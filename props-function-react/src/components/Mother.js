import React, { Component } from 'react';
import Child from './Child';

class Mother extends Component {
  state = {
    message: null,
    childMsg: null,
  };

  orderMotherFunc = () => {
    const message = this.state.message;
    this.setState({ message: 'Va ranger ta chambre!' });
    return message;
  };

  responseToto = () => {
    const childMsg = this.state.childMsg;
    this.setState({ childMsg: "D'accord maman!" });
    return childMsg;
  };

  render() {
    return (
      <div>
        <h2>I'm the Mother</h2>
        <button className='App-button' onClick={this.orderMotherFunc}>
          Order's Mother
        </button>
        <p>{this.state.message}</p>

        <hr />
        <Child
          responseTotokMsg={this.responseToto}
          name='Toto'
          state={this.state}
        ></Child>
      </div>
    );
  }
}

export default Mother;
