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
