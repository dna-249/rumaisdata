import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const get =()=>{
  const id = JSON.parse(localStorage.getItem("id"))
  console.log(id)
  if(id)return id;else return null
  }
  
  const Id = get()
  const [users, setUsers] = useState(null);
  const [userInfo2, setUserInfo2] = useState(null);
  useEffect(async()=> {
         await axios.get(`https://dnadata.vercel.app/user/one/${Id}`,{
        }).then(res =>{ setUsers(()=>res.data)}).catch(err=>console.log(err))
         }, [Id])
    
  
  return (
    <AppContext.Provider value={{users, setUsers,Id }}>
      {children}
    </AppContext.Provider>
  );
};
