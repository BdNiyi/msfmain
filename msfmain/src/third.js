import './ffirst.css';
import './ssecond.css';
import './tthird.css';
import { useState } from 'react';
import { usePlan } from './PlanContext';

function Third({ goBack, goToNext }) {
  const { isYearly, setSelectedAddOns: saveAddOnsToContext } = usePlan(); // rename for clarity
  const [selectedAddOns, setSelectedAddOns] = useState({
    add1: false,
    add2: false,
    add3: false,
  });

  const canProceed = Object.values(selectedAddOns).some(Boolean);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedAddOns(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleNextStep = () => {
    saveAddOnsToContext(selectedAddOns); // ✅ now saving to context
    goToNext();
  };

  return (
    <div className='Personalinfo'>
      <div className='pihead'>Pick add-ons</div>
      <p className='pip'>Add-ons help enhance your gaming experience.</p>

      <div className='Adds'>
        {/* Add-on 1 */}
        <div className={`Add1 ${selectedAddOns.add1 ? 'checked' : ''}`}>
          <div>
            <input
              type="checkbox"
              id="add1"
              name="add1"
              className='checkbox'
              checked={selectedAddOns.add1}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className='addnamep'>
            <div className='addname'>Online service</div>
            <p className='addp'>Access to multiplayer games</p>
          </div>
          <p className='addprice'>+{isYearly ? "$10/yr" : "$1/mo"}</p>
        </div>

        {/* Add-on 2 */}
        <div className={`Add2 ${selectedAddOns.add2 ? 'checked' : ''}`}>
          <div>
            <input
              type="checkbox"
              id="add2"
              name="add2"
              className='checkbox'
              checked={selectedAddOns.add2}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className='addnamep2'>
            <div className='addname2'>Larger storage</div>
            <p className='addp2'>Extra 1TB of cloud save</p>
          </div>
          <p className='addprice2'>+{isYearly ? "$20/yr" : "$2/mo"}</p>
        </div>

        {/* Add-on 3 */}
        <div className={`Add3 ${selectedAddOns.add3 ? 'checked' : ''}`}>
          <div>
            <input
              type="checkbox"
              id="add3"
              name="add3"
              className='checkbox'
              checked={selectedAddOns.add3}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className='addnamep3'>
            <div className='addname3'>Customizable Profile</div>
            <p className='addp3'>Custom theme on your profile</p>
          </div>
          <p className='addprice3'>+{isYearly ? "$20/yr" : "$2/mo"}</p>
        </div>
      </div>

      <div className='button'>
        <button className='goback' onClick={goBack}>Go Back</button>
        <button
          type='submit'
          className='nextstep2'
          onClick={handleNextStep}
          disabled={!canProceed}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Third;
