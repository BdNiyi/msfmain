import React from 'react';
import { useState } from 'react';
import './ffirst.css';

function First() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'This field is required';
    }
    if (!form.email.trim()) {
      newErrors.email = 'This field is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'This field is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // proceed to next step
      console.log('Form data:', form);
      alert(`Submitted: ${JSON.stringify(form)}`);
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

<form className='forform' onSubmit={handleSubmit} noValidate>
    <div className='formgroup'>
        <label className='formlabel'>Name</label>
        <input 
         type='text'
         name='name'
         className={`forminput ${errors.name ? 'error' : ''}`}
         placeholder='e.g. Stephen King'
         value={form.name}
         onChange={handleChange}
       />
       {errors.name && <span className='error-text'>{errors.name}</span>}
     </div>
    <div className='formgroup'>
        <label className='formlabel'>Email Address</label>
        <input type='email'
              name='email'
              className={`forminput ${errors.email ? 'error' : ''}`}
              placeholder='e.g. stephenking@lorem.com'
              value={form.email}
              onChange={handleChange}/>
               {errors.email && <span className='error-text'>{errors.email}</span>}
    </div>
    <div className='formgroup'>
        <label className='formlabel'>Phone Number</label>
        <input ype='tel'
              name='phone'
              className={`forminput ${errors.phone ? 'error' : ''}`}
              placeholder='e.g. +1 234 567 890'
              value={form.phone}
              onChange={handleChange}/>
              {errors.phone && <span className='error-text'>{errors.phone}</span>}
    </div>
    <button type='submit' className='nextstep'>Next Step</button>
</form>

</div>
    </div>
  )
}

export default First