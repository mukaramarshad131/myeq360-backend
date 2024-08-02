import { SvgIcon } from '@/components/icon';
import SinglePageReport from '@/components/single-page-report';
import IndividualDashboard from '@/pages/sys/others/blank';
import EqAssessment from '@/pages/sys/others/EqAssessment';
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
  {
    path: 'eqPreAssessment',
    element: <EqAssessmentTest />,
    meta: {
      label: 'sys.eqPreAssessment',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/eqPreAssessment',
    },
  },
  {
    path: 'eqAssessment',
    element: <EqAssessment />,
    meta: {
      label: 'sys.eqAssessment',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/eqAssessment',
    },
  },
  {
    path: 'singlePageReport',
    element: <SinglePageReport />,
    meta: {
      label: 'sys.singlePageReport',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/singlePageReport',
    },
  },
];

export default others;
