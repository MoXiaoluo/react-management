import { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const menuItems: MenuItem[] = [
//   getItem('Option 1', '/page1', <PieChartOutlined />),
//   getItem('Option 2', '/page2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '/page301'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [
//     getItem('Team 1', '6'),
//     getItem('Team 2', '8'),
//   ]),
//   getItem('Files', '9', <FileOutlined />),
// ];

const menuItems = [
  {
    label: '项目一',
    key: '/page1',
    icon: <PieChartOutlined />,
  },
  {
    label: '项目二',
    key: '/page2',
    icon: <DesktopOutlined />,
  },
  {
    label: '项目三',
    key: 'sub1',
    icon: <UserOutlined />,
    children: [
      {
        label: '项目301',
        key: '/page301',
      },
    ],
  },
];

const rootSubmenuKeys = ['sub1', 'sub2'];

export default function MainMenu() {
  const navigateTo = useNavigate();
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState(['']);
  useEffect(() => {
    console.log('trigger when page loaded', menuItems);
    menuItems.forEach((item) => {
      const foundItem = item.children?.find((child) => {
        return child.key == location.pathname;
      });
      if (foundItem) {
        setOpenKeys([item.key]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menuClick: MenuProps['onClick'] = (e) => {
    console.log('🚀 ~ file: index.tsx:53 ~ menuClick ~ e:', e.key);
    navigateTo(e.key);
  };
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
    <Menu
      theme='dark'
      defaultSelectedKeys={[location.pathname]}
      mode='inline'
      items={menuItems}
      onClick={menuClick}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    />
  );
}
