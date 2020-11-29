import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { Store } from 'antd/lib/form/interface';
import '../../../index.css';
import { useHistory } from 'react-router-dom';
import { FormLogin, ContainerButtonLogin, SignInContainer, ImageLogin } from '../../../Styled-Components/login.style';
import { FontUniaMovie } from '../../../Styled-Components/font.styled';
import { FooterComponent } from '../../Footer/footer.component';
import ImgLogin from '../../../assets/marvel-studio.png';
import { useSignIn } from '../../../hooks/Auth/Sign/signIn.hook';

/**
 * Destructurin object
 */
const { Item } = Form;

export const SignInComponent: FC = () => {

  /**
   * Hooks
   */
  const history = useHistory();
  const [form] = Form.useForm();
  const { SignIn } = useSignIn();
  /**
   * Redirect
   */
  const redirectRegister = () => history.push('/register');
  const homereDirect = () => history.push('/');

  /**
   * Send information
   * @param values 
   */
  const handleValues = async (values: Store) => {
    await SignIn(values);
  }

  return (
    <>
      <SignInContainer>
        {/* Form */}
        <FormLogin>
          <FontUniaMovie
            fontColor="white"
            fontFamily="'Roboto', sans-serif;"
            fontSize="80px"
            fontPositionTop="40%"
            fontPositionLeft="28%"
            fontWidth="70%">
            Login
        </FontUniaMovie>
          <FontUniaMovie
            style={{ marginTop: "-10%" }}
            fontColor="white"
            fontFamily="'Roboto', sans-serif;"
            fontSize="15px"
            fontPositionLeft="32%"
            fontWidth="100%">
            Login to the application
        </FontUniaMovie>
          <Form onFinish={handleValues} form={form} layout='vertical'>
            {/* Email */}
            <Item label="Email" name="email" rules={[{ type: 'email', message: 'Format no valid' }, { required: true, message: 'Field requerid' }]}  >
              <Input />
            </Item>
            {/* Password */}
            <Item label="Password" name="password" rules={[{ required: true, message: 'Field requerid' }]}  >
              <Input type="password" />
            </Item>
            <Item>
              <ContainerButtonLogin>
                <Button type="primary" htmlType="submit">
                  Continue
              </Button>
                <Button onClick={redirectRegister}>
                  Register
                </Button>
                <Button type="primary" onClick={homereDirect}>
                  Home
                </Button>
              </ContainerButtonLogin>
            </Item>
          </Form>
          <FontUniaMovie
            style={{ marginTop: "5%", textAlign: 'center' }}
            fontColor="white"
            fontFamily="'Roboto', sans-serif;"
            fontSize="10px"
            fontWidth="100%">
            By selecting Accept and subscribe, you agree to start your subscription immediately and that you will not be able to cancel the contract or receive a refund for monthly or annual subscriptions if you have already used the digital content. We'll send you a renewal notice 30 days before annual renewals take effect. If you do not cancel before your free trial ends on December 2, 2020, we will charge you the standard annual or monthly fee on a recurring basis based on your registered payment method. You can cancel the service at any time and the cancellation will take effect when the billing period ends.
        </FontUniaMovie>
        </FormLogin>
        {/* Image */}
        <ImageLogin Img={ImgLogin} alt="" />
      </SignInContainer>
      <FooterComponent />
    </>
  )
}