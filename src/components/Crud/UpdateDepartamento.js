import React, { Component } from "react";
import Global from "./../../Global";
import axios from "axios";

export default class UpdateDepartamento extends Component {
  render() {
    return (
      <div>
        <h1>
          Modificar departamento {this.props.iddepartamento},{this.props.nombre}
          ,{this.props.localidad}
        </h1>
      </div>
    );
  }
}
