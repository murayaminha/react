import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Contador from '../src/componentes/contador/contador/';
import './styles/global.css'

class App extends Component {
  render(){
    return <Contador />
  }
}
export default App;