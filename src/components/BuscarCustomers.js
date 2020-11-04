import React, { Component } from "react";
import axios from "axios";
import Global from "./../Global";

export default class BuscarCustomers extends Component {
  state = {
    customer: {},
    status: false,
  };
  cajaCustomerRef = React.createRef();
  buscarCliente = (e) => {
    e.preventDefault();
    var idcliente = this.cajaCustomerRef.current.value;
    var request = "customers/" + idcliente + ".json";
    var url = Global.urlnorthwind + request;
    axios.get(url).then((res) => {
      this.setState({
        customer: res.data.customer,
        status: true,
      });
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.buscarCliente}>
          <label> ID Customer: </label>
          <input
            type="text"
            name="cajacustomer"
            ref={this.cajaCustomerRef}
          ></input>
          <button>Buscar cliente</button>
        </form>
        {this.state.status == true && (
          <div>
            <h1 style={{ color: "blue" }}>
              Name: {this.state.customer.contactName}
            </h1>
            <h2>Company: {this.state.customer.companyName}</h2>
            <h3>Ciudad: {this.state.customer.city}</h3>
            <h3>Oficio: {this.state.customer.contactTitle}</h3>
          </div>
        )}
      </div>
    );
  }
}
