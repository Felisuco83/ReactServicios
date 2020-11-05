import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";

export default class DetallesDepartamento extends Component {
  constructor(props) {
    super(props);
    this.setState({ iddepartamento: props.iddepartamento });
  }
  buscarDepartamento = () => {
    var request = "api/departamentos/" + this.props.iddepartamento;
    var url = Global.urlapicruddpt + request;
    axios.get(url).then((res) => {
      this.setState({
        departamento: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.buscarDepartamento();
  };
  state = {
    departamento: {},
    status: false,
    iddepartamento: 0,
  };
  render() {
    return (
      <div>
        <h1>Detalles departamento</h1>
        {this.state.status == true && (
          <React.Fragment>
            <a href="/">Volver al listado</a>
            <h1>Numero: {this.state.departamento.numero}</h1>
            <h1>Nombre: {this.state.departamento.nombre}</h1>
            <h1>Localidad: {this.state.departamento.localidad}</h1>
            <a
              href={
                "/update/" +
                this.state.departamento.numero +
                "/" +
                this.state.departamento.nombre +
                "/" +
                this.state.departamento.localidad
              }
            >
              Modificar
            </a>
          </React.Fragment>
        )}
      </div>
    );
  }
}
