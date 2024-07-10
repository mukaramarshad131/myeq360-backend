import { SvgIcon } from '@/components/icon';
import IndividualDashboard from '@/pages/sys/others/blank';

import { AppRouteObject } from '#/router';

const others: AppRouteObject[] = [
  {
    path: 'blank',
    element: <IndividualDashboard />,
    meta: {
      label: 'sys.menu.blank',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/individual_dashboard',
    },
  },
];

export default others;
