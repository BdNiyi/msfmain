import React from 'react';
import './ffirst.css';
import './ssecond.css';
import Arcade from './assets/images/icon-arcade.svg';
import Advanced from './assets/images/icon-advanced.svg';
import Pro from './assets/images/icon-pro.svg';

function Second() {
  
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
<div className='pihead'>Select your plan</div>
<p className='pip'>You have the option of monthly or yearly billing.</p>
  <div className='plan'>
    < div className='plan1'>
     <img  className='planimg' src={Arcade} alt='arcade'/>
      <div className='planname'>Arcade</div>
      <div className='planprice'>$9/mo</div>
    </div>
    <div className='plan2'>
        <img  className='planimg' src={Advanced} alt='advanced'/>
      <div className='planname'>Advanced</div>
      <div className='planprice'>$12/mo</div>
    </div>
    <div className='plan3'>
        <img className='planimg' src={Pro} alt='pro'/>
      <div className='planname'>Pro</div>
      <div className='planprice'>$15/mo</div>
    </div>
  </div>
    <div className='toggle'>
        <div className='toggle1'>Monthly</div>
       <div className='toggle3'></div>
       <div className='toggle2'>Yearly</div>
        </div>
<button className='goback'>Go Back</button>
    <button type='submit' className='nextstep'>Next Step</button>
</div>
</div>
  );
}

export default Second