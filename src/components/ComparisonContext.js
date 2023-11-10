import React, {useContext, useState} from 'react';

const ComparisonContext = React.createContext(null); // application wide state for keeping track of comparisons
const UpdateComparisonContext = React.createContext(null); // function to update state

export const useComparisonContext = () => {
  return useContext(ComparisonContext);
};

export const useUpdateComparisonContext = () => {
  return useContext(UpdateComparisonContext);
};

export const ComparisonContextProvider = ({children}) => {
  const [selectedBrands, setSelectedBrands] = useState({
    brand1: null,
    brand2: null,
  });

  const setBrand = (brandName, brandInfo) => {
    setSelectedBrands(prevSelectedBrands => ({
      ...prevSelectedBrands,
      [brandName]: brandInfo,
    }));
  };

  return (
    <ComparisonContext.Provider value={selectedBrands}>
      <UpdateComparisonContext.Provider value={setBrand}>
        {children}
      </UpdateComparisonContext.Provider>
    </ComparisonContext.Provider>
  );
};
