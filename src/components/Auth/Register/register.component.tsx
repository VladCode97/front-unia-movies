import React, { FC } from 'react';
import { Button, Form, Input, message, Select } from 'antd';
import { Store } from 'antd/lib/form/interface';
import '../../../index.css';
import { useHistory } from 'react-router-dom';
import { FontUniaMovie } from '../../../Styled-Components/font.styled';
import { SignInContainer, FormLogin, ContainerButtonLogin, ImageLogin, } from '../../../Styled-Components/login.style';
import { FooterComponent } from '../../Footer/footer.component';
import ImgRegister from '../../../assets/marvel-studio.png';
import { useRegister } from '../../../hooks/Auth/Register/register.hook';
import UserDTO from '../../../Common/DTO/user.dto';
import { FormRegisterComponent } from './form-register.component';

/**
 * Destructurin object
 */
const { Item } = Form;
const { Option, OptGroup } = Select;

export const RegisterComponent: FC = () => {
  //Hook router
  const history = useHistory();
  //Hook
  const [form] = Form.useForm();
  //Hook register user
  const { registerUser } = useRegister();
  //Redirect
  const redirectRegister = () => history.push('/SignIn');
  const homereDirect = () => history.push('/');

  /**
   * Send information
   * @param values 
   */
  const handlerValues = async (values: Store) => {
    await registerUser(values as UserDTO);
    message.info("User create");
    setTimeout(() => {
      history.push("/SignIn");
      ;
    }, 2000)
  }

  return (
    <>
      <SignInContainer>
        {/* Form */}
        <FormLogin>
          <FontUniaMovie
            fontColor="white"
            fontFamily="'Roboto', sans-serif;"
            fontSize="70px"
            fontPositionTop="40%"
            fontPositionLeft="20%"
            fontWidth="70%">
            Register
        </FontUniaMovie>
          {/* Form */}
          <FormRegisterComponent form={form} handlerValues={handlerValues} redirectRegister={redirectRegister} homereDirect={homereDirect} />
          <FontUniaMovie
            style={{ marginTop: "5%", textAlign: 'center' }}
            fontColor="white"
            fontFamily="'Roboto', sans-serif;"
            fontSize="10px"
            fontWidth="100%">
            If you have already used the digital content. We'll send you a renewal notice 30 days before annual renewals take effect. If you do not cancel before your free trial ends on December 2, 2020, we will charge you the standard annual or monthly fee on a recurring basis based on your registered payment method.
        </FontUniaMovie>
        </FormLogin>
        {/* Image */}
        <ImageLogin Img={ImgRegister} alt="" />
      </SignInContainer>
      <FooterComponent />
    </>
  )
}