import React, { FC, useState } from 'react';
import { FontUniaMovie } from '../../../Styled-Components/font.styled';
import { LoginContainer } from '../../../Styled-Components/login.style';
import { SignInComponent } from './signin.component';


export const LoginComponent = () => {
  return (
    <LoginContainer>
      {/* Login */}
      <SignInComponent />
      {/* Register */}
    </LoginContainer>
  )
}