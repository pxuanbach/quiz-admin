import React from 'react';
import {
  CompassOutlined,
  DashboardOutlined,
  FormOutlined,
  HomeOutlined,
  LayoutOutlined,
  LineChartOutlined,
  TableOutlined,
  UserOutlined,
  BlockOutlined,
  LockOutlined,
  FolderAddOutlined,
  FileDoneOutlined
} from '@ant-design/icons';
// import { ReactComponent as NftIcon } from '@app/assets/icons/nft-icon.svg';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.dashboard',
    key: 'dashboard',
    url: '',
    icon: <DashboardOutlined />,
  },
  {
    title: 'common.dataTables',
    key: 'dataTables',
    url: '/data-tables',
    icon: <TableOutlined />,
  },
  {
    title: 'common.createTest',
    key: 'createTest',
    url: '/create-test',
    icon: <FolderAddOutlined />,
  },
  {
    title: 'Thống kê kết quả',
    key: 'resultTest',
    url: '/result-test',
    icon: <FileDoneOutlined />,
  },
  {
    title: 'common.authPages',
    key: 'auth',
    icon: <LockOutlined />,
    children: [
      {
        title: 'common.login',
        key: 'login',
        url: '/auth/login',
      },
      {
        title: 'common.signUp',
        key: 'singUp',
        url: '/auth/sign-up',
      },
      {
        title: 'common.forgotPass',
        key: 'forgotPass',
        url: '/auth/forgot-password',
      },
      {
        title: 'common.securityCode',
        key: 'securityCode',
        url: '/auth/security-code',
      },
      {
        title: 'common.newPassword',
        key: 'newPass',
        url: '/auth/new-password',
      },
    ],
  },
  {
    title: 'common.profilePage',
    key: 'profile',
    icon: <UserOutlined />,
    children: [
      {
        title: 'common.personalInfo',
        key: 'personalInfo',
        url: '/profile/personal-info',
      },
      {
        title: 'common.securitySettings',
        key: 'securitySettings',
        url: '/profile/security-settings',
      },
    ],
  },
];
