
import { Form, Input, Select, Button } from 'antd';
import React, { FC } from 'react';
import { ContainerButtonLogin } from '../../../Styled-Components/login.style';


/**
 * Destructurin object
 */
const { Item } = Form;
const { Option, OptGroup } = Select;

export const FormRegisterComponent: FC <any> = (props: any) => {
  return (
    <>
      <Form onFinish={props.handlerValues} form={props.form} layout='vertical' style={{ marginTop: "-5%" }}
      >
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
          <Input type="password" />
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
          <ContainerButtonLogin>
            <Button type="primary" htmlType="submit">
              Continue
              </Button>
            <Button onClick={props.redirectRegister}>
              Login
                </Button>
            <Button type="primary" onClick={props.homereDirect}>
              Home
                </Button>
          </ContainerButtonLogin>
        </Item>
      </Form>

    </>
  )

}