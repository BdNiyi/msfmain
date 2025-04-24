import './ffirst.css';
import './ssecond.css';
import Arcade from './assets/images/icon-arcade.svg';
import Advanced from './assets/images/icon-advanced.svg';
import Pro from './assets/images/icon-pro.svg';
import Switch from '@mui/material/Switch';
import { usePlan } from './PlanContext';



const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Second({ goBack, goToNext }) {
  const { isYearly, setIsYearly, selectedPlan, setSelectedPlan } = usePlan();

  const handleToggle = () => {
    setIsYearly(prev => !prev);
  };

  // Pricing based on mode
  const pricing = {
    arcade: isYearly ? "$90/yr" : "$9/mo",
    advanced: isYearly ? "$120/yr" : "$12/mo",
    pro: isYearly ? "$150/yr" : "$15/mo"
  };

  return (

      <div className='Personalinfo'>
        <div className='pihead'>Select your plan</div>
        <p className='pip'>You have the option of monthly or yearly billing.</p>

        <div className='plan'>
        <div
  className={`plan1 ${selectedPlan === 'Arcade' ? 'active-plan' : ''}`}
  onClick={() => setSelectedPlan('Arcade')}
>
  <img className='planimg' src={Arcade} alt='arcade' />
  <div className='planname'>Arcade</div>
  <div className='planprice'><span className='price-text'>{pricing.arcade}</span></div>
  {isYearly && <div className='free-label'>2 months free</div>}
</div>

<div
  className={`plan2 ${selectedPlan === 'Advanced' ? 'active-plan' : ''}`}
  onClick={() => setSelectedPlan('Advanced')}
>
  <img className='planimg' src={Advanced} alt='advanced' />
  <div className='planname'>Advanced</div>
  <div className='planprice'><span className='price-text'>{pricing.advanced}</span></div>
  {isYearly && <div className='free-label'>2 months free</div>}
</div>

<div
  className={`plan3 ${selectedPlan === 'Pro' ? 'active-plan' : ''}`}
  onClick={() => setSelectedPlan('Pro')}
>
  <img className='planimg' src={Pro} alt='pro' />
  <div className='planname'>Pro</div>
  <div className='planprice'><span className='price-text'>{pricing.pro}</span></div>
  {isYearly && <div className='free-label'>2 months free</div>}
</div>

        </div>

        <div className='toggle'>
          <div className={`toggle1 ${!isYearly ? 'active-toggle' : ''}`}>Monthly</div>
          <Switch {...label} className='realtog' checked={isYearly} onChange={handleToggle}
  sx={{
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#02295a',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#02295a',
    },
  }}
/>

          <div className={`toggle2 ${isYearly ? 'active-toggle' : ''}`}>Yearly</div>
        </div>
      <div className='button'>
        <button className='goback' onClick={goBack}>Go Back</button>
        <button
  type='submit'
  className='nextstep2'
  onClick={goToNext}
  disabled={!selectedPlan}
>
  Next Step
</button>

        </div>
      </div>
  );
}

export default Second;
