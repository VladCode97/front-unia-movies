import Styled from 'styled-components';
/**
 * Container login
 */
export const LoginContainer = Styled.div`
    height: 100vh;
`;

/**
 * Container login
 */
export const SignInContainer = Styled.div`
    background: rgb(26, 29, 41);
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    grid-gap: 5px;
`;
/**
 * Items login
 */
export const ImageLogin: any = Styled.img.attrs((props: any) => ({ src: props.Img }))`
    margin-top: 20%;
    width: 80%;
`;

export const FormLogin = Styled.div`
    width: 50%;
    margin: auto;
`;

export const ContainerButtonLogin = Styled(SignInContainer)`
    height: auto;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 50px;
`;

