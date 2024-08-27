import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { SvgIcon } from '@/components/icon';
import { CircleLoading } from '@/components/loading';

import { AppRouteObject } from '#/router';

const HomePage = lazy(() => import(`@/pages/dashboard/individual-dashboard`));

const dashboard: AppRouteObject = {
  order: 1,
  path: 'dashboard',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    label: 'sys.menu.dashboard',
    icon: <SvgIcon icon="ic-analysis" className="ant-menu-item-icon" size="24" />,
    key: '/dashboard',
  },
  children: [
    {
      index: true,
      path: 'individual-dashboard',
      element: <HomePage />,
      meta: { label: 'sys.menu.individual-dashboard', key: '/dashboard/individual-dashboard' },
    },
  ],
};

export default dashboard;
