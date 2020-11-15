import Styled from 'styled-components';


/**
 * Container
 */
export const ContainerHome = Styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
`;

/**
 * Items container
 */
export const ItemHome: any = Styled.div`
  background: ${(props: any) => props.backgroundItem};
  position: relative;
  height: 100vh;
`;

export const DecorationHome: any = Styled.div`
  position: absolute;
  left: ${(props: any) => (props.decorationPositionLeft) ? props.decorationPositionLeft : 'auto'};
  top: ${(props: any) => (props.decorationPositionTop) ? props.decorationPositionTop : 'auto'};
  clip-path: ${(props: any) => props.poligonDecoration};
  background: ${(props: any) => props.backgroudDecoration};
  height: 300px;
  width: 100%;
`;