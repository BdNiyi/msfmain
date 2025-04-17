import React from 'react';
import './ffirst.css';

function first() {
  return (
    <div className='firstpagebody'>
        {/* Sidebar start */}
        <div className='sidebar'>

<div className='sidebar1'>
    <h2>1</h2>
    <h2>Step 1</h2>
    <h2>Your info</h2>
</div>
<div className='sidebar2'>
    <h2>2</h2>
<h2>Step 2</h2>
<h2>Select plan</h2>
</div>
<div className='sidebar3'> 
    <h2>3</h2>
    <h2>Step 3</h2> 
    <h2>Add-ons</h2>
</div>
<div className='sidebar4'> 
    <h2>4</h2>
<h2>Step 4</h2> 
<h2>Summary</h2>
 </div>
</div>

 {/* Sidebar end */} 

{/* Step 1 start */} 

Personal info
Please provide your name, email address, and phone number.

Name
e.g. Stephen King

Email Address
e.g. stephenking@lorem.com

Phone Number
e.g. +1 234 567 890

Next Step

    </div>
  )
}

export default first