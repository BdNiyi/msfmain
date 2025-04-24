import './ffirst.css';
import './ssecond.css';
import './ffourth.css';
import { usePlan } from './PlanContext';

function Fourth({ goBack }) {
  const { selectedPlan, isYearly, selectedAddOns = {} } = usePlan();

  const pricing = {
    Arcade: isYearly ? 90 : 9,
    Advanced: isYearly ? 120 : 12,
    Pro: isYearly ? 150 : 15,
  };

  const addOnDetails = [
    { name: "Online service", price: isYearly ? 10 : 1, selected: selectedAddOns.add1 },
    { name: "Customizable Profile", price: isYearly ? 20 : 2, selected: selectedAddOns.add3 },
    { name: "Larger Storage", price: isYearly ? 20 : 2, selected: selectedAddOns.add2 },
  ];

  const selectedAddOnsList = addOnDetails.filter(add => add.selected);

  const planPrice = pricing[selectedPlan] || 0;
  const addOnsPrice = selectedAddOnsList.reduce((sum, add) => sum + add.price, 0);
  const total = planPrice + addOnsPrice;
  const billingSuffix = isYearly ? "/yr" : "/mo";

  console.log("Selected Addons from context:", selectedAddOns);

  return (
    <div className='Personalinfo'>
      <div className='pihead'>Finishing up</div>
      <p className='pip'>Double-check everything looks OK before confirming.</p>

      <div className='Summary'>
        <div className='summarybody'>
          <div className='summaryH'>
            <div className='summaryhead'>{selectedPlan} ({isYearly ? "Yearly" : "Monthly"})</div>
            <div className='summarytext'>Change</div>
          </div>
          <div className='summaryprice'>${planPrice}{billingSuffix}</div>
        </div>
        <hr className='summline' />

        {selectedAddOnsList.map((add, idx) => (
          <div className='summarychoice1' key={idx}>
            <div className='summarychoiceA'>{add.name}</div>
            <div className='summarychoiceprice'>+${add.price}/{isYearly ? "yr" : "mo"}</div>
          </div>
        ))}
      </div>

      <div className='total'>
        <div className='tots'>Total (per {isYearly ? "year" : "month"})</div>
        <div className='totalprice'>${total}/{isYearly ? "yr" : "mo"}</div>
      </div>

      <div className='button'>
        <button className='goback' onClick={goBack}>Go Back</button>
        <button type='submit' className='nextstep3'>Confirm</button>
      </div>
    </div>
  );
}

export default Fourth;
