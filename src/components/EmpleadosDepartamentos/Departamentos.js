import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import Empleados from "./Empleados";

export default class Departamentos extends Component {
  seleccionado = React.createRef();
  state = {
    departamentos: [],
    status: false,
    dpto: 0,
  };
  componentDidMount = () => {
    var url = Global.urldepartamentos + "departamentos";
    axios.get(url).then((res) => {
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };
  cambiarSeleccionado = (e) => {
    var id = e.target.value;
    this.setState({ dpto: id });
    console.log(this.state.dpto);
  };
  render() {
    return (
      <div>
        {this.state.departamentos.length > 0 && (
          <select onChange={this.cambiarSeleccionado} ref={this.seleccionado}>
            {this.state.departamentos.map((dpto, index) => {
              return (
                <option key={index} value={dpto.Numero}>
                  {dpto.Nombre}
                </option>
              );
            })}
          </select>
        )}
        <ul>
          {this.state.seleccionado != 0 && <Empleados dpto={this.state.dpto} />}
        </ul>
      </div>
    );
  }
}
