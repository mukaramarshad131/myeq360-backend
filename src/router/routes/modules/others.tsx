import { SvgIcon } from '@/components/icon';
import IndividualDashboard from '@/pages/sys/others/blank';
import EqAssessmentTest from '@/pages/sys/others/eqAssessmentTest';
import Packages from '@/pages/sys/others/packages';

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
  {
    path: 'packages',
    element: <Packages />,
    meta: {
      label: 'sys.menu.packages',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/packages',
    },
  },
  {
    path: 'eqAssessmentTest',
    element: <EqAssessmentTest />,
    meta: {
      label: 'sys.menu.eqAssessmentTest',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/eqAssessmentTest',
    },
  },
];

export default others;
