import React, { FC, useContext } from 'react';
import '../../index.css';
import { Context } from '../../Common/Context/user.context';

export const HomeUserComponent: FC = () => {
  const { userInformation } = useContext(Context);
  const response = JSON.parse(userInformation).response;
  return (
    <div className="home-user">
      {
        (userInformation) && (
          <>
            <h1>Welcome to UniaM, { response.name}</h1>
          </>
        )
      }
    </div>
  )
}