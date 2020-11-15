import Styled from 'styled-components';

/**
 * Font
 */
export const FontUniaMovie: any = Styled.h1`
  font-size: ${(props: any) => props.fontSize};
  font-weight: ${(props: any) => props.fontWeight};
  color: ${(props: any) => (props.fontColor) ? props.fontColor : '#000'};
  position: relative;
  left: ${(props: any) => (props.fontPositionLeft) ? props.fontPositionLeft : 'auto'};
  top: ${(props: any) => (props.fontPositionTop) ? props.fontPositionTop : 'auto'};
`;