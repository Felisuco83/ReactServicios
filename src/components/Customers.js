import React, { Component } from "react";
import axios from "axios";

export default class Customers extends Component {
  urlcustomers = "http://northwind.netcore.io/customers?format=json";
  //ALMACENAMOS LOS CLIENTES EN STATE
  state = {
    customers: [],
    status: "",
  };
  cargarClientes = () => {
    axios.get(this.urlcustomers).then((res) => {
      this.setState({
        customers: res.data.customers,
        status: "success",
      });
    });
  };
  componentWillMount = () => {
    this.cargarClientes();
  };
  render() {
    if (this.state.customers.length > 0) {
      return (
        <div>
          <h1>Servicio Api Customers</h1>
          {this.state.customers.map((cliente) => {
            return <h2 key={cliente.id}>{cliente.contactName}</h2>;
          })}
        </div>
      );
    } else if (this.state.customers.length == 0) {
      return <h1>No hay clientes</h1>;
    } else if (this.state.status != "success") {
      return <h1>Cargando servicio</h1>;
    } else {
      return <h1>Algo ha ido mal</h1>;
    }
  }
}
