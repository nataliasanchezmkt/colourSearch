import React, { Component } from 'react';
import './App.css'

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
      <div style = {{width:'50vh', height:'50vh', margin:'50px 30px', backgroundColor:this.state.color}}>
        
      </div>
      </section>
    );
  }
}

export default Box