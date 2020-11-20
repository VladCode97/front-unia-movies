import Styled from 'styled-components';

export const ButtonUniaMovie: any = Styled.button`
  font-family: ${(props: any) => props.fontFamily};
  font-size: ${(props: any) => props.fontSize};
  color: ${(props: any) => props.fontColor};
  background: ${(props: any) => (props.buttonBackground) ? props.buttonBackground : '#000'};
  border: 1px solid ${((props: any) => (props.buttonBorder) ? (props.buttonBorder) : '#000')};
  padding: 1%;
  cursor: pointer;
  outline: none;
`;