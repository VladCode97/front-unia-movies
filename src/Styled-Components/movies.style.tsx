import Styled from 'styled-components';

export const MovieContainer = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 5px;
  
`;

export const ItemMovie = Styled.div`
  margin-top: 20%;
  padding: 50px;
  position: relative;
`;

export const ImageMovie: any = Styled.img.attrs((props: any) => ({ src: props.Img }))`
  width: 100%;
  margin: auto;
`;


