// MultiStepForm.js
import React, { useState } from 'react';
import First from './first';
import Second from './second';
import Third from './third';
import Fourth from './fourth';
import Fifth from './fifth';
import './ffirst.css';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <First goToNext={() => setCurrentStep(2)} />;
      case 2:
        return <Second goBack={() => setCurrentStep(1)} goToNext={() => setCurrentStep(3)} />;
        case 3:
        return <Third goBack={() => setCurrentStep(2)} goToNext={() => setCurrentStep(4)} />;
      case 4:
        return <Fourth goBack={() => setCurrentStep(3)} />;
      case 5:
        return <Fifth goBack={() => setCurrentStep(4)} />;
      
      // Add more cases for Step 3 and Step 4
      default:
        return <First goToNext={() => setCurrentStep(2)} />;
    }
  };

  const steps = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

  return (
    <div className="firstpagebody">
      <div className="sidebar">
        {steps.map((stepLabel, index) => {
          const stepNumber = index + 1;
          return (
            <div
              key={index}
              className={`sidebar${stepNumber}`}
              onClick={() => setCurrentStep(stepNumber)}
            >
              <div
                className="sidenum"
                style={{
                  backgroundColor: currentStep === stepNumber ? 'hsl(228, 100%, 84%)' :'',
                  color: currentStep === stepNumber ? 'hsl(229, 57%, 11%)' : '',
                }}
              >
                {stepNumber}
              </div>
              <div className={`sidebar${stepNumber}text`}>
                <div className="stepnum">Step {stepNumber}</div>
                <div className="stepdesc">{stepLabel}</div>
              </div>
            </div>
          );
        })}
      </div>
      {renderStep()}
    </div>
  );
}

export default MultiStepForm;
