import React from 'react';
import { Card } from 'react-bootstrap';

function CardItem(props) {
    return (
        
        <Card className='card-style'>
       <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
        <Card.Title className='titleCardStyle'> {props.color}</Card.Title>
   
         <div style = {{backgroundColor: props.color}} className='block-style4card text-center'></div>
       
         </Card.Body>
         <div className='d-flex justify-content-end'>
         <button type='submit' className='deleteBtn' onClick={()=>props.deleteColour(props.color)}>Delete</button>
         </div>
         </Card>
  
         
    );
}

export default CardItem;