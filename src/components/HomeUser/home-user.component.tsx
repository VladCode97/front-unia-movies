import React, { FC } from 'react';
import '../../index.css';

export const HomeUserComponent: FC = (props: any) => {
  const user = JSON.parse(localStorage.getItem('user') as string);
  console.log(user);
  return (
    <div className="home-user">
      {
        (user) && (
          <>
            <h1>Welcome to UniaM, {user.response.name}</h1>
          </>
        )
      }
    </div>
  )
}