import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import EmpleadosDetalles from "./RutasEmpleados/EmpleadosDetalles";
import Departamentos from "./Crud/Departamentos";
import InsertarDepartamento from "./Crud/InsertarDepartamento";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/empleadosdetalles/:idempleado"
            component={Departamentos}
            render={(props) => {
              var idemp = props.match.params.idempleado;
              console.log("Id " + idemp);
              return <EmpleadosDetalles idempleado={idemp} />;
            }}
          />
          <Route exact path="/" component={Departamentos} />
          <Route exact path="/create" component={InsertarDepartamento} />
        </Switch>
      </BrowserRouter>
    );
  }
}
