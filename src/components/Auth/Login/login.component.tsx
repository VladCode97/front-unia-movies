import React from 'react';
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