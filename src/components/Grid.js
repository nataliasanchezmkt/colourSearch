import React, { useEffect, useState } from 'react';
import '../App.css'
import { Form } from 'react-bootstrap';
import AllColours from './AllColours'

const Grid = () => {


  
    let colourStorage=JSON.parse( localStorage.getItem('colourKey'))|| [];
 const [color, setColor] = useState('black');
     const [colourArray, setArray] = useState(colourStorage);

     useEffect(()=>{
       localStorage.setItem('colourKey',JSON.stringify(colourArray));
     },[colourArray])




    const handleSubmit=(e)=>{
      e.preventDefault();
      setArray([...colourArray,color]);
  
    }

    const deleteColour = (colour)=>{
      let newArray = colourArray.filter((item)=> item !== colour);
      setArray(newArray)
    }


  
    return (
   <body >
     <section  >
         <article >
         <h1 className='title-style  '>Search, pick and save your favourites colours✨</h1>

         </article>

         <article className='bigSection '>
       <Form className='w-100' onSubmit={handleSubmit} > 
       <Form.Group >
       <article className='innerSection '>
      <div style = {{backgroundColor: color}} className='block-style '></div>
      <input type="text" value={color}  onChange={e=>setColor(e.target.value)}  className='input-style ' placeholder='Ex: black or #453455'>

      </input>
  </article>
  <article className='d-flex justify-content-end'>
      <button type='submit' className='boton'>Add</button>
      </article>
      </Form.Group>
  </Form>
  </article>
  </section> 
   <AllColours stateColour={colourArray} deleteColour={deleteColour}></AllColours> 

  </body>
    );
};

export default Grid;