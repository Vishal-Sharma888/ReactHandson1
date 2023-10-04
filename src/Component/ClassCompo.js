import React from 'react'
import './Style.css'

class Card2 extends  React.Component{
    render(){
        return( 
    <div className='newcard2'> 
       <center><h2><b>This is created using class Component</b></h2>
        <p>This is done using external CSS</p>
        <p>This is done using inline CSS</p></center>
    </div>
   );
}}
export default Card2;