import React from 'react';
import { FontUniaMovie } from '../../Styled-Components/font.styled';
import { ContainerHome, ItemHome } from '../../Styled-Components/home.styled';


export function HomeComponent() {
  return (
    <ContainerHome>
      {/* Information  */}
      <ItemHome backgroundItem="#131313">
        <FontUniaMovie
          fontSize="100px"
          fontWeight="600"
          fontPositionLeft="12%"
          fontPositionTop="10%"
          fontColor="white"
        >
          Unia movie
        </FontUniaMovie>
      </ItemHome>
      {/* Movies */}
      <ItemHome backgroundItem="#000" />
    </ContainerHome>
  )
}