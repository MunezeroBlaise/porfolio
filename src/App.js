import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from "./components/Navbar";
import Header from "./components/header";
import Particles from 'react-particles-js';


const App = () => {
  return (
       <>
           <Particles className={'particles-canvas'}
               params={{
                   particles: {
                       number: {
                           value: 30,
                           density: {
                               enable: true,
                               value_area: 900
                           }
                       },
                       shape: {
                           type: 'star',
                           stroke: {
                               width: 6,
                               color: "#f9ab00"
                           }
                       }
                   }
               }} />
          <NavbarCustom />
          <Header />

       </>
  );
}

export default App;
