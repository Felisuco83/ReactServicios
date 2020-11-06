import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";
export default class Departamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };
  cargarDepartamentos = () => {
    var request = "/api/departamentos";
    var url = Global.urlapicruddpt + request;
    axios.get(url).then((res) => {
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.cargarDepartamentos();
  };
  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Numero</th>
              <th>Nombre</th>
              <th>Localidad</th>
            </tr>
          </thead>
          <tbody>
            {this.state.status == true &&
              this.state.departamentos.map((dpto, index) => {
                return (
                  <tr key={index}>
                    <td>{dpto.numero}</td>
                    <td>{dpto.nombre}</td>
                    <td>{dpto.localidad}</td>
                    <td>
                      <NavLink to={"/details/" + dpto.numero}>Detalles</NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
