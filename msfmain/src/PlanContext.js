import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <PlanContext.Provider value={{ isYearly, setIsYearly, selectedPlan, setSelectedPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => useContext(PlanContext);
