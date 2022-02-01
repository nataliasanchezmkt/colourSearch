import React from 'react';
import '../App.css'
import CardItem from './CardItem'

function AllColours (props)  {
    return (
       <section className='container section4cards'>
         

{props.stateColour.map((valor,posicion)=> <CardItem key={posicion} color={valor} deleteColour = {props.deleteColour}/>)}



    
       </section>
    );
};

export default AllColours;