import React from 'react';
import { useState } from 'react';
import './ffirst.css';


function First({ goToNext }) {
  // ...
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
      goToNext();
      // proceed to next step
      console.log('Form data:', form);
      //alert(`Submitted: ${JSON.stringify(form)}`);
    }
  };

  return (


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
    <button type='submit' className='nextstep'  onClick={goToNext}>Next Step</button>
</form>

</div>
  )
}

export default First