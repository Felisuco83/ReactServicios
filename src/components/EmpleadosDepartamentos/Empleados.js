import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";

export default class Empleados extends Component {
  state = {
    empleados: [],
    status: false,
  };
  componentDidUpdate = () => {
    var url =
      Global.urlempleados +
      "api/Empleados/EmpleadosDepartamento/" +
      this.props.dpto;
    axios.get(url).then((res) => {
      this.setState({
        empleados: res.data,
        status: true,
      });
      console.log(this.state.empleados);
    });
  };
  render() {
    if (this.state.empleados.length > 0) {
      return (
        <React.Fragment>
          {this.state.empleados.map((empleado, index) => {
            <li key={index}>{empleado.apellido}</li>;
          })}
        </React.Fragment>
      );
    } else {
      return <li> No hay empleados para ese departamento </li>;
    }
  }
}
