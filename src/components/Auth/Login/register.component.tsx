import React, { FC } from 'react';
import { Button, Form, Input, message, Select } from 'antd';
import { Store } from 'antd/lib/form/interface';
import '../../../index.css';
import { useHistory } from 'react-router-dom';
/**
 * Destructurin object
 */
const { Item } = Form;
const { Option, OptGroup } = Select;

export const RegisterComponent: FC = () => {

  const history = useHistory();

  //Hook
  const [form] = Form.useForm();

  const redirectRegister = () => history.push('/register');

  const homereDirect = () => history.push('/');

  const handleValues = async (values: Store) => {
    console.log(values);
    const response = await (await fetch('https://api-rest-unia-movie.herokuapp.com/Auth/Register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values })
    })).json();
    message.info('User create');
    setTimeout(() => {
      history.push('/signIn');
    }, 3000);
  }

  return (
    <div className="form-create">
      <h1 className="title-form-create">Register</h1>
      <Form onFinish={handleValues} form={form} layout='vertical'>
        {/* Name */}
        <Item label="Name" name="name" rules={[{ required: true, message: 'Field requerid' }]}  >
          <Input />
        </Item>
        {/* Email */}
        <Item label="Email" name="email" rules={[{ type: 'email', message: 'Format no valid' }, { required: true, message: 'Field requerid' }]}  >
          <Input />
        </Item>
        {/* Password */}
        <Item label="Password" name="password" rules={[{ required: true, message: 'Field requerid' }]}  >
          <Input.Password />
        </Item>
        {/* Document */}
        <Item label="Document" name="document" rules={[{ required: true, message: 'Field requerid' }]}  >
          <Input />
        </Item>
        {/* age */}
        <Item label="Age" name="age" rules={[{ required: true, message: 'Field requerid' }]}  >
          <Input />
        </Item>
        {/* Document */}
        <Item label="Phone" name="phone" rules={[{ required: true, message: 'Field requerid' }]}  >
          <Input />
        </Item>
        {/* Subscriptions */}
        <Item name="Subscriptions" label="Subscriptions">
          <Select defaultValue="Basic" style={{ width: 200 }}>
            <OptGroup label="Plans">
              <Option value="5fb740c2768d035c78f1fec1">Basic</Option>
              <Option value="5fb74139d43f4418f4b3605b">Premium</Option>
            </OptGroup>
          </Select>
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