import { ReactNode } from "react";

export interface IUserContext {
  userInformation: any;
  setUserInformation: any;
}

export interface IPropsContext {
  children: ReactNode;
}