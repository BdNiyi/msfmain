import { useState } from 'react';
import './ffirst.css';
import './ssecond.css';
import './ffourth.css';
import './ffifth.css';       // new styles for the thank-you page
import ThankYouIcon from './assets/images/icon-thank-you.svg'; // new icon for the thank-you page
import { usePlan } from './PlanContext';

function Fourth({ goBack }) {
  const { selectedPlan, isYearly, selectedAddOns = {} } = usePlan();
  const [confirmed, setConfirmed] = useState(false);

  // Pricing and add-on logic (updated)
  const addOnDetails = [
    { name: "Online service", price: isYearly ? 10 : 1, selected: selectedAddOns.add1 },
    { name: "Customizable Profile", price: isYearly ? 20 : 2, selected: selectedAddOns.add3 },
    { name: "Larger Storage", price: isYearly ? 20 : 2, selected: selectedAddOns.add2 },
  ];

  const selectedAddOnsList = addOnDetails.filter(add => add.selected);
  const planPrice = isYearly ? selectedPlan?.priceYearly || 0 : selectedPlan?.priceMonthly || 0;
  const addOnsPrice = selectedAddOnsList.reduce((sum, add) => sum + add.price, 0);
  const total = planPrice + addOnsPrice;
  const billingSuffix = isYearly ? "/yr" : "/mo";

  // If confirmed, show the thank-you page
  if (confirmed) {
    return (
      <div className="thankyou">
        <img
          src={ThankYouIcon}
          alt="Thank you"
          className="thankyou-icon"
        />
        <h2 className="thankyou-head">Thank you!</h2>
        <p className="thankyou-sub">
          Thanks for confirming your subscription!<br/>
          We hope you have fun using <strong>{selectedPlan?.name}</strong> ({isYearly ? "Yearly" : "Monthly"}). If you ever need support, please feel free 
          to email us at support@loremgaming.com.
        </p>
      </div>
    );
  }

  // Otherwise, show the regular summary
  return (
    <div className='Personalinfo'>
      <div className='pihead'>Finishing up</div>
      <p className='pip'>Double-check everything looks OK before confirming.</p>
  

      <div className='Summary'>
        <div className='summarybody'>
          <div className='summaryH'>
            <div className='summaryhead'>
              {selectedPlan?.name} ({isYearly ? "Yearly" : "Monthly"})
{/*${isYearly ? selectedPlan?.priceYearly : selectedPlan?.priceMonthly}{billingSuffix}*/}
            </div>
            <div className='summarytext' onClick={goBack}>Change</div>
          </div>
          <div className='summaryprice'>
            ${planPrice}{billingSuffix}
          </div>
        </div>
        <hr className='summline' />

        {selectedAddOnsList.map((add, idx) => (
          <div className='summarychoice1' key={idx}>
            <div className='summarychoiceA'>{add.name}</div>
            <div className='summarychoiceprice'>+${add.price}{billingSuffix}</div>
          </div>
        ))}
      </div>

      <div className='total'>
        <div className='tots'>
          Total (per {isYearly ? "year" : "month"})
        </div>
        <div className='totalprice'>
          ${total}{billingSuffix}
        </div>
      </div>

      <div className='button'>
        <button className='goback' onClick={goBack}>Go Back</button>
        <button
          type='button'
          className='nextstep3'
          onClick={() => setConfirmed(true)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Fourth;
