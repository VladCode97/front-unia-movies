import React, { FC } from 'react';
import { Button, Form, Input, message } from 'antd';
import { Store } from 'antd/lib/form/interface';
import '../../../index.css';
import { useHistory } from 'react-router-dom';
/**
 * Destructurin object
 */
const { Item } = Form;

export const SignInComponent: FC = () => {

  const history = useHistory();

  //Hook
  const [form] = Form.useForm();

  const redirectRegister = () => history.push('/register');

  const homereDirect = () => history.push('/');


  const handleValues = async (values: Store) => {
    const response = await (await fetch('https://api-rest-unia-movie.herokuapp.com/Auth/SignIn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values })
    })).json()
    if (response && response !== 'User no found') {
      localStorage.setItem('user', JSON.stringify(response));
      setTimeout(() => {
        history.push('/homeUser');
      }, 2000);
    } else {
      message.info('User no found');
    }
  }

  return (
    <div className="form-create">
      <h1 className="title-form-create">Sign in</h1>
      <Form onFinish={handleValues} form={form} layout='vertical'>
        {/* Email */}
        <Item label="Email" name="email" rules={[{ type: 'email', message: 'Format no valid' }, { required: true, message: 'Field requerid' }]}  >
          <Input />
        </Item>
        {/* Password */}
        <Item label="Password" name="password" rules={[{ required: true, message: 'Field requerid' }]}  >
          <Input.Password />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Item>
      </Form>
      <Button onClick={redirectRegister}>Register</Button>
      <Button type='text' onClick={homereDirect}>Home</Button>
    </div>
  )
}