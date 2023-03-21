import React from 'react';
import background from "../images/1239284.jpg"
function ContactUs(props) {
    return (
        <div className='contact-container' style={{
            backgroundImage:`url("${background}")`,
            backgroundSize:"cover",
            height:"650px"
           
        
        }}>
          <div
           style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            color:"white",
            height:"500px"
           }}
           
          >

          <h2 style={{padding:"5px"}}>K.Venkata Sylesh</h2> 
          <h2 style={{padding:"5px"}}>Y.Sai Pavan Kumar </h2>
          <h2 style={{padding:"5px"}}>CH.Govardhan Satvik</h2>
          <h2 style={{padding:"5px"}}>P.Sai Likhith</h2>
          <h2 style={{padding:"5px"}}>M.Sai Krishna</h2>
          </div>
        </div>
    );
}

export default ContactUs;