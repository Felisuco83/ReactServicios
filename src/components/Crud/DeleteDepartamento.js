import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";

export default class DeleteDepartamento extends Component {
  state = { status: false };
  eliminarDepartamento = () => {
    var request = "/api/departamentos/" + this.props.iddepartamento;
    var url = Global.urlapicruddpt + request;
    axios.delete(url).then((res) => {
      this.setState({
        status: true,
      });
    });
  };
  render() {
    if (this.state.status) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1 style={{ color: "red" }}>
          Desea eliminar el departamento {this.props.iddepartamento}
        </h1>
        <button onClick={this.eliminarDepartamento} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    );
  }
}
