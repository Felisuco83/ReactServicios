import React, { Component } from "react";
import Global from "./../../Global";
import axios from "axios";
import { timers } from "jquery";
import { Redirect } from "react-router-dom";

export default class UpdateDepartamento extends Component {
  numeroRef = React.createRef();
  nombreRef = React.createRef();
  locRef = React.createRef();

  modificarDepartamento = (e) => {
    e.preventDefault();
    var dpto = {
      Numero: parseInt(this.numeroRef.current.value),
      Nombre: this.nombreRef.current.value,
      Localidad: this.locRef.current.value,
    };
    console.log(dpto);
    var request = "api/departamentos/";
    var url = Global.urlapicruddpt + request;
    axios.put(url, dpto).then((res) => {
      this.setState({ status: true });
    });
  };

  state = {
    status: false,
  };

  render() {
    if (this.state.status == true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Modificar departamento</h1>
        <form onSubmit={this.modificarDepartamento}>
          <label>Número: </label>
          <input
            type="number"
            ref={this.numeroRef}
            name="cajanumero"
            defaultValue={this.props.iddepartamento}
            readOnly={true}
          ></input>
          <label>Número: </label>
          <input
            type="text"
            ref={this.nombreRef}
            name="cajanombre"
            defaultValue={this.props.nombre}
          ></input>
          <label>Localidad: </label>
          <input
            type="text"
            ref={this.locRef}
            name="cajaloc"
            defaultValue={this.props.localidad}
          ></input>
          <button className="btn btn-info">Modificar Departamento</button>
        </form>
      </div>
    );
  }
}
