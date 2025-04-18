import React from 'react';
import { useState } from 'react';
import './ffirst.css';

function first() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (message.trim() === '') {
        setError('Please enter a message before submitting.');
      } else {
        setError('');
        // Do something with the message
        alert(`Submitted: ${message}`);
      }
    };
  return (
    <div className='firstpagebody'>
        {/* Sidebar start */}
<div className='sidebar'>

<div className='sidebar1'>
    <div className='sidenum'>1</div>
    <div className='sidebar1text'>
    <div className='stepnum'>Step 1</div>
    <div className='stepdesc'>Your info</div>
    </div>
</div>
<div className='sidebar2'>
    <div className='sidenum'>2</div>
    <div className='sidebar2text'>
<div className='stepnum'>Step 2</div>
<div className='stepdesc'>Select plan</div>
</div>
</div>
<div className='sidebar3'> 
    <div className='sidenum'>3</div>
    <div className='sidebar3text'>
    <div className='stepnum'>Step 3</div> 
    <div className='stepdesc'>Add-ons</div>
    </div>
</div>
<div className='sidebar4'> 
    <div className='sidenum'>4</div>
    <div className='sidebar4text'>
<div className='stepnum'>Step 4</div> 
<div className='stepdesc'>Summary</div>
</div>
 </div>
</div>

 {/* Sidebar end */} 

{/* Step 1 start */} 
<div className='Personalinfo'>
<div className='pihead'>Personal info</div>
<p className='pip'>Please provide your name, email address, and phone number.</p>

<form className='forform' onSubmit={handleSubmit}>
    <div className='formgroup'>
        <label className='formlabel'>Name</label>
        <input type="text" className='forminput' placeholder='e.g. Stephen King' required/>
    </div>
    <div className='formgroup'>
        <label className='formlabel'>Email Address</label>
        <input type="email" className='forminput' placeholder='e.g. stephenking@lorem.com' required/>
    </div>
    <div className='formgroup'>
        <label className='formlabel'>Phone Number</label>
        <input type="tel" className='forminput' placeholder='e.g. +1 234 567 890' required/>
    </div>
</form>
<button className='nextstep'>Next Step</button>
</div>
    </div>
  )
}

export default first