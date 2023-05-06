import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const breadcrumbItems: ItemType[] = [
  {
    title: 'User',
  },
  {
    title: 'Bill',
  },
];

const rootSubmenuKeys = ['sub1', 'sub2'];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuClick: MenuProps['onClick'] = (e) => {
    console.log('🚀 ~ file: index.tsx:53 ~ menuClick ~ e:', e.key);
    navigateTo(e.key);
  };

  const navigateTo = useNavigate();

  const location = useLocation();

  const [openKeys, setOpenKeys] = useState(['']);
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    console.log('🚀 ~ file: index.tsx:75 ~ keys:', keys);
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    console.log('🚀 ~ file: index.tsx:77 ~ latestOpenKey:', latestOpenKey);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

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
        <Menu
          theme='dark'
          defaultSelectedKeys={[location.pathname]}
          mode='inline'
          items={items}
          onClick={menuClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        />
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
