import React from 'react';

export const PlanContext = React.createContext({
  workingDays: [],
  setPlanData: () => {},
});

export const PlanProvider = PlanContext.Provider;