import React from 'react';
import { ButtonUniaMovie } from '../../Styled-Components/button.style';
import { FontUniaMovie } from '../../Styled-Components/font.styled';
import { ContainerHome, ContainerLogin, ItemLogin } from '../../Styled-Components/home.styled';
import { useHistory } from 'react-router-dom';

export function HomeComponent() {
  //Hook of router
  const history = useHistory();
  return (
    <ContainerHome>
      <ContainerLogin>
        {/* Login app */}
        <ItemLogin>
          <FontUniaMovie fontFamily="'Pacifico', cursive" fontColor="white">UniaM</FontUniaMovie>
          <ButtonUniaMovie
            onClick={() => history.push('/signIn')}
            fontFamily="'Pacifico', cursive"
            buttonBackground="#F04500"
            buttonBorder="#F04500"
            fontColor="white"
            fontSize="25px">
            Login
          </ButtonUniaMovie >
        </ItemLogin>
        {/* Font discover */}
        <FontUniaMovie
          fontColor="white" fontFamily="'Roboto', sans-serif;"
          fontSize="80px"
          fontPositionTop="40%"
          fontPositionLeft="58%"
          fontWidth="40%">
          Discover a new world
        </FontUniaMovie>
      </ContainerLogin>
    </ContainerHome>
  )
}