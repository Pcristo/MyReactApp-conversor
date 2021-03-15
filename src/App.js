import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./components/conversor"


function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <img src={logo} className="App-logo" alt="logo" />
       <div className="linha">
      <Conversor moedaA="USD" moedaB="EUR"></Conversor>
      <Conversor moedaA="EUR" moedaB="USD"></Conversor>
     </div>

      <div className="linha">
      <Conversor moedaA="USD" moedaB="EUR"></Conversor>
      <Conversor moedaA="EUR" moedaB="USD"></Conversor>
     </div>

      <div className="linha">
      <Conversor moedaA="USD" moedaB="EUR"></Conversor>
      <Conversor moedaA="EUR" moedaB="USD"></Conversor>
     </div>
    </div>
  );
}

export default App;
