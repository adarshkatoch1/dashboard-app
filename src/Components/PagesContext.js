import { createContext, useContext, useState } from 'react';

const PagesContext = createContext();

export const usePagesContext = () => {
  return useContext(PagesContext);
};

export const PagesProvider = ({ children }) => {
  const [pagesData, setPagesData] = useState([]);

  const updatePagesData = (newData) => {
    setPagesData(newData);
  };

  return (
    <PagesContext.Provider value={{ pagesData, updatePagesData }}>
      {children}
    </PagesContext.Provider>
  );
};
