import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const get =()=>{
  const id = JSON.parse(localStorage.getItem("id"))
  if(id)return id;else return null
  }
  const [users, setUsers] = useState(get());

  return (
    <AppContext.Provider value={{ users, setUsers }}>
      {children}
    </AppContext.Provider>
  );
};
