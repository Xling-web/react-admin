import React from 'react'
import { Layout } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.scss'

export default function Login(){

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };

    return( 
        <Layout>
            <div className="login">
              <div className="login-form">
                <h3>后台系统</h3>
                <Form
                  name="normal_login"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: '请输入您的用户名！',
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: '请输入您的密码！',
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="密码"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" block> 登录 </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
        </Layout>
    )
}