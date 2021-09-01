import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  Counters  from "./counters";

let contador=0;
  setInterval(() => {
    const Seis=Math.floor(contador/100000)
    const Cinco=Math.floor(contador/10000)
    const Cuatro=Math.floor(contador/1000)
    const Tres=Math.floor(contador/100)
    const Dos=Math.floor(contador/10)
    const Uno=Math.floor(contador/1)  
    console.log(Cinco,Cuatro,Tres, Dos, Uno);
    contador++;
    ReactDOM.render(
      <React.StrictMode>
        <Counters one = {Uno} two={Dos} three={Tres} four={Cuatro} five={Cinco} six={Seis}></Counters>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
