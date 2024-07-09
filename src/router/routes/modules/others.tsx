import { SvgIcon } from '@/components/icon';
import BlankPage from '@/pages/sys/others/blank';

import { AppRouteObject } from '#/router';

const others: AppRouteObject[] = [
  {
    path: 'blank',
    element: <BlankPage />,
    meta: {
      label: 'sys.menu.blank',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/blank',
    },
  },
];

export default others;
