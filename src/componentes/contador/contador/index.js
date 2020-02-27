import React, {Component} from 'react';
import"./contador.css"
import {Button} from 'reactstrap';


class Contador extends Component{
    state ={
        numero:0
      
      }
      aumentar =()=>{
        
       this.setState({numero: this.state.numero+1})
       
      }
      diminuir =()=>{
        if(this.state.numero===0){
          return alert("Negativo não")
        }
        else{
        this.setState({numero: this.state.numero-1})
     }}
      render(){
        return (
          <div>
          <h1 className="contador-titulo">
            {this.state.numero}
          </h1>    
          <Button color="danger" outline onClick={this.diminuir}> Diminuir</Button>
          <Button className="ml-2" color="success" outline onClick={this.aumentar}> Aumentar</Button>
         </div>
        )
      }
}
export default Contador;