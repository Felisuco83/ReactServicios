import React, { Component } from "react";
import axios from "axios";
import Global from "./../Global";

export default class CochesPaco extends Component {
  marca = React.createRef();
  state = {
    coches: [],
    cochesFiltrado: [],
    status: false,
  };
  buscarCoches = () => {
    var url = Global.urlcochespaco + "webresources/coches";
    axios.get(url).then((res) => {
      this.setState({
        coches: res.data,
        cochesFiltrados: res.data,
        status: true,
      });
    });
  };
  filtrarPorMarca = (e) => {
    e.preventDefault();
    var coches = this.state.coches;
    var cochesFiltrados = [];
    // for (var coche of coches) {
    //   if (coche.marca == this.marca.current.value) {
    //     cochesFiltrados.push(coche);
    //   }
    // }
    cochesFiltrados = coches.filter((car) =>
      car.marca.toLowerCase().includes(this.marca.current.value.toLowerCase())
    );
    this.setState({ cochesFiltrados: cochesFiltrados });
    console.log(this.state.cochesFiltrados);
  };
  componentDidMount = () => {
    this.buscarCoches();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.filtrarPorMarca}>
          <label>Introduce marca: </label>
          <input type="text" ref={this.marca}></input>
          <button>Buscar Marca</button>
        </form>
        {this.state.status == true &&
          this.state.cochesFiltrados.map((coche, index) => {
            return (
              <React.Fragment key={index}>
                <h1 style={{ color: "blue" }}>Marca: {coche.marca}</h1>
                <h2>Modelo: {coche.modelo}</h2>
                <h3>Conductor: {coche.conductor}</h3>
                <img src={coche.imagen}></img>
              </React.Fragment>
            );
          })}
      </div>
    );
  }
}
