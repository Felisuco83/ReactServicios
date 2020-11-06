import logo from "./../../logo.svg";
import "./App.css";
import Customers from "./../Customers";
import BuscarCustomers from "./../BuscarCustomers";
import CochesPaco from "./../CochesPaco";
// import Departamentos from "./../EmpleadosDepartamentos/Departamentos";
import Router from "./../Router";
import EmpleadosRouter from "./../RutasEmpleados/EmpleadosRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Departamentos from "./../Crud/Departamentos";
import MenuDepartamentos from "../Crud/MenuDepartamentos";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Customers /> */}
      {/* <BuscarCustomers /> */}
      {/* <CochesPaco /> */}
      {/* <Departamentos /> */}
      {/* <EmpleadosRouter />
      <hr />
      <Router /> */}
      <Router />
    </div>
  );
}

export default App;
