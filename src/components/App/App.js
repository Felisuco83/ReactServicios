import logo from "./../../logo.svg";
import "./App.css";
import Customers from "./../Customers";
import BuscarCustomers from "./../BuscarCustomers";
import CochesPaco from "./../CochesPaco";
import Departamentos from "./../EmpleadosDepartamentos/Departamentos";

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
      <Departamentos />
    </div>
  );
}

export default App;
