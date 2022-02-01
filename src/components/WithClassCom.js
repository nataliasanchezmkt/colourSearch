// ejemplo de como hacer el cuadro de color ocn el input pero construido con class component (ejericio de la teoria del campus, el cual dejo en este practico a modo de recordatorio)
import React, { Component } from 'react';
import '../App.css'


class Box extends Component {
  constructor(props){
  super(props)
  this.state = {
    color: 'black'
  }}

  handleChange = (event) => {
    this.setState({color: event.target.value})
  }
  render() {
    



    return (
      <section className='container'>
        <input type="text" value={this.state.color} onChange={this.handleChange} className='set-order'/>
      <div style = {{backgroundColor:this.state.color}} className='block-style'
>
        
      </div>
      </section>
    );
  }
}

export default Box
