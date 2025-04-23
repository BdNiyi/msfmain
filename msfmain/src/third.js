import './ffirst.css';
import './ssecond.css';
import './tthird.css';
import Switch from '@mui/material/Switch';
import { usePlan } from './PlanContext';



const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Second({ goBack, goToNext }) {
  const { isYearly, setIsYearly, selectedPlan, setSelectedPlan } = usePlan();

  const handleToggle = () => {
    setIsYearly(prev => !prev);
  };


  return (

      <div className='Personalinfo'>
        <div className='pihead'>Pick add-ons</div>
        <p className='pip'>Add-ons help enhance your gaming experience.</p>

  <div className='Adds'>
    <div className='Add1'>
      <div><input type="checkbox" id="add1" className='add1' /></div>
      <div className='addnamep'><div className='addname'>Online service</div>
      <p className='addp'>Access to multiplayer games</p></div>
      <p className='addprice'>+{isYearly ? "$10/yr" : "$1/mo"}</p>
    </div>
  </div>
      <div className='button'>
        <button className='goback' onClick={goBack}>Go Back</button>
        <button type='submit' className='nextstep2' onClick={goToNext}>Next Step</button></div>
      </div>
  );
}

export default Second;
