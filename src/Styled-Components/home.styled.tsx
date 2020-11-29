import Styled from 'styled-components';
import BakcgroundHome from '../assets/home-background.png';

/**
 * Container
 */
export const ContainerHome = Styled.div`
  background: black;
`;

export const ContainerLogin = Styled.div`
  background: url(${BakcgroundHome}) no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

/**
 * Items container
 */
export const ItemHome: any = Styled.div`
  background: ${(props: any) => props.backgroundItem};
  
`;

export const ItemLogin = Styled(ItemHome)`
  display: grid;
  grid-template-columns: 50px 100px;
  grid-gap: 100px;
  position: absolute;
  left: 70%;
  top: 10%;
`;

export const HomeUser = Styled.div`
  height: 100vh;
  background: rgb(26, 29, 41);
`;

export const HeaderUser = Styled.header`
  height: 10vh;
`;


export const ContentUser = Styled.div`
`;

