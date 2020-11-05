import axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";
import { Redirect } from "react-router-dom";

export default class InsertarDepartamento extends Component {
  cajaNumeroRef = React.createRef();
  cajaNombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();

  state = {
    mensaje: "",
    status: false,
  };

  nuevoDepartamento = (e) => {
    e.preventDefault();
    var num = parseInt(this.cajaNumeroRef.current.value);
    var nom = this.cajaNombreRef.current.value;
    var loc = this.cajaLocalidadRef.current.value;
    var dept = {
      numero: num,
      nombre: nom,
      localidad: loc,
    };
    var request = "/api/departamentos";
    var url = Global.urlapicruddpt + request;
    axios.post(url, dept).then((res) => {
      this.setState({
        mensaje: "Nuevo departamento " + num,
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
        <h1>Nuevo departamento</h1>
        <form onSubmit={this.nuevoDepartamento}>
          <label>Número: </label>
          <input
            type="number"
            name="cajanumero"
            className="form-control"
            ref={this.cajaNumeroRef}
          ></input>
          <label>Nombre: </label>
          <input
            type="text"
            name="cajanombre"
            className="form-control"
            ref={this.cajaNombreRef}
          ></input>
          <label>Localidad: </label>
          <input
            type="text"
            name="cajalocalidad"
            className="form-control"
            ref={this.cajaLocalidadRef}
          ></input>
          <button className="btn btn-success">Insertar departamento</button>
        </form>
      </div>
    );
  }
}
