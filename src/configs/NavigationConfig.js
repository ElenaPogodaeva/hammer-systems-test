import { DashboardOutlined, UserOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'user-list',
      path: `${APP_PREFIX_PATH}/user-list`,
      title: 'sidenav.userlist',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: []
    },
  ],
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
