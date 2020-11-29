import React, {FC} from 'react';
import { FontUniaMovie } from '../../Styled-Components/font.styled';
import { FooterStyled, ContainerFotterStyled } from '../../Styled-Components/footer.style';



export const FooterComponent: FC = () => {
  return (
      <>
       <FooterStyled>
        <ContainerFotterStyled>
          <FontUniaMovie
            style={{ marginTop: "5%", textAlign: 'center' }}
            fontColor="white"
            fontFamily="'Roboto', sans-serif;"
            fontSize="10px"
            fontPositionTop="100%"
            fontWidth="100%">
            Privacy Policy
        </FontUniaMovie>
          <FontUniaMovie
            style={{ marginTop: "5%", textAlign: 'center' }}
            fontColor="white"
            fontFamily="'Roboto', sans-serif;"
            fontPositionTop="100%"
            fontSize="10px"
            fontWidth="100%">
            Subscription agreement
        </FontUniaMovie>
          <FontUniaMovie
            style={{ marginTop: "5%", textAlign: 'center' }}
            fontColor="white"
            fontFamily="'Roboto', sans-serif;"
            fontPositionTop="100%"
            fontSize="10px"
            fontWidth="100%">
            Help
        </FontUniaMovie>
          <FontUniaMovie
            style={{ marginTop: "5%", textAlign: 'center' }}
            fontColor="white"
            fontFamily="'Roboto', sans-serif;"
            fontPositionTop="100%"
            fontSize="10px"
            fontWidth="100%">
            Compatible devices
        </FontUniaMovie>
        </ContainerFotterStyled>
        <FontUniaMovie
          style={{textAlign: 'center'}}
          fontColor="white"
          fontFamily="'Roboto', sans-serif;"
          fontPositionTop="30%"
          fontSize="10px"
          fontPositionLeft="35%"
          fontWidth="35%">
          Unia M is a paid subscription service, its content is subject to availability. The Disney + service is marketed by The Walt Disney Company Colombia S.A., Calle 70 Bis No. 4 - 41, Bogotá D.C., Colombia and the NIT number is 800.236.937.
          Unia M is a paid subscription service, its content is subject to availability. The Disney + service is marketed by The Walt Disney Company Colombia S.A., Calle 70 Bis No. 4 - 41, Bogotá D.C., Colombia and the NIT number is 800.236.937.
          Unia M is a paid subscription service, its content is subject to availability. The Disney + service is marketed by The Walt Disney Company Colombia S.A., Calle 70 Bis No. 4 - 41, Bogotá D.C., Colombia and the NIT number is 800.236.937.
        </FontUniaMovie>
      </FooterStyled>
      </>
  );
}