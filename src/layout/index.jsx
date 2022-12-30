import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
import './index.scss'
import Head from './components/header'
import Navbar from './components/navbar'

const DefaultLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='DefaultLayout'>
      <Navbar/>
      <Layout>
        <Header style={{background: colorBgContainer}}>
          <Head/>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: colorBgContainer,height: '100%' }}>
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;