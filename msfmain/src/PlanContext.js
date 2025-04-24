import { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({
    name: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
  });

  const [selectedAddOns, setSelectedAddOns] = useState({
    add1: false,
    add2: false,
    add3: false,
  });

  return (
    <PlanContext.Provider
      value={{
        isYearly,
        setIsYearly,
        selectedPlan,
        setSelectedPlan,
        selectedAddOns,
        setSelectedAddOns,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => useContext(PlanContext);
