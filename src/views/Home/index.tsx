import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Outlet } from 'react-router-dom';

import MainMenu from '@/components/MainMenu';

const { Header, Content, Footer, Sider } = Layout;

const breadcrumbItems: ItemType[] = [
  {
    title: 'User',
  },
  {
    title: 'Bill',
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='min-h-screen'>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <MainMenu></MainMenu>
      </Sider>
      <Layout className='site-layout'>
        <Header
          style={{ margin: '0 16px', padding: 0, background: colorBgContainer }}
        >
          <Breadcrumb className='py-4' items={breadcrumbItems}></Breadcrumb>
        </Header>
        <Content
          style={{
            margin: '16px 16px 0',
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
        <Footer className='text-center p-0 h-12 leading-12'>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
