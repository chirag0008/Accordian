import React, { useState } from 'react'
import './accordian.css';
const MyAccordian = ({question,answer}) => {
    const[show,setShow]=useState(false);
   

  return (
    <>
   <div className='div21'>
    <p className='pp btn  btn-outline-warning text-success' style={{}} onClick={()=>{setShow(!show)}}>{show?'-':'+'}</p>
    <h3 className='hdd3'>{question}</h3>
   </div>
   {show && <p>{answer}</p>}
    </>
  )
}

export default MyAccordian