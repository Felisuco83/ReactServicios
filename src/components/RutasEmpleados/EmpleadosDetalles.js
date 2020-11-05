import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class EmpleadosDetalles extends Component {
  constructor(props) {
    super(props);
    console.log("Props Detalle" + this.props.idempleado);
  }
  state = {
    empleado: {},
    status: false,
  };

  mostrarEmpleado = () => {
    var request = "api/empleados/" + this.props.idempleado;
    var url = Global.urlempleados + request;
    axios.get(url).then((res) => {
      this.setState({
        empleado: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.mostrarEmpleado();
  };

  render() {
    return (
      <div>
        <h1>Detalles empleados</h1>
        {this.state.status == true && (
          <div>
            <h1 style={{ color: "blue" }}>
              Apellido: {this.state.empleado.apellido}
            </h1>
            <h1 style={{ color: "red" }}>
              Apellido: {this.state.empleado.oficio}
            </h1>
          </div>
        )}
      </div>
    );
  }
}
