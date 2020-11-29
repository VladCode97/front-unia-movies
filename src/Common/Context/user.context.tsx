import React, { useState, createContext, useEffect } from "react";
import { IUserContext, IPropsContext } from '../Interfaces/user-context.interface';


export const Context = createContext({} as IUserContext);

/**
 * Context global
 * @param props 
 */
export const UserProviver = ({ children }: IPropsContext) => {
  const [userInformation, setUserInformation] = useState(
    window.sessionStorage.getItem("user")
  );

  /**
   * Effect to save user
   */
  useEffect(() => {
    if (userInformation !== null) {
      setUserInformation(window.sessionStorage.getItem("user"));
    }
  }, [userInformation, setUserInformation]);


  return (
    <Context.Provider value={{ userInformation, setUserInformation }}>
      {children}
    </Context.Provider>
  );
}

