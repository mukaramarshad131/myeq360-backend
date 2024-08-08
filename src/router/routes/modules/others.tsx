import { SvgIcon } from '@/components/icon';
import Packages from '@/components/packages/packages';
// import SinglePageReport from '@/components/single-page-report';
import SinglePageReport from '@/components/single-page-report';
import AssessmentSurvey from '@/pages/assessment/AssessmentSurvey';
import EqAssessment from '@/pages/assessment/EqAssessment';
import EqAssessmentTest from '@/pages/assessment/EqAssessmentTest';
import EqPreAssessment from '@/pages/assessment/EqPreAssessment';
import AddToCart from '@/pages/cart/AddToCart';

import { AppRouteObject } from '#/router';

const others: AppRouteObject[] = [
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
    path: 'assessment',
    element: <EqAssessmentTest />,
    meta: {
      label: 'sys.menu.eqAssessmentTest',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/assessment',
    },
  },
  {
    path: 'assessment',
    element: <EqPreAssessment />,
    meta: {
      label: 'sys.eqPreAssessment',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/assessment',
    },
  },
  {
    path: 'assessment',
    element: <EqAssessment />,
    meta: {
      label: 'sys.eqAssessment',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/assessment',
    },
  },
  {
    path: 'single-page-report',
    element: <SinglePageReport />,
    meta: {
      label: 'sys.singlePageReport',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/single-page-report',
    },
  },
  {
    path: 'assessment',
    element: <AssessmentSurvey />,
    meta: {
      label: 'sys.assessment-survey',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/assessment',
    },
  },
  {
    path: 'cart',
    element: <AddToCart />,
    meta: {
      label: 'sys.addToCart',
      icon: <SvgIcon icon="ic_blank" className="ant-menu-item-icon" size="24" />,
      key: '/cart',
    },
  },
];

export default others;
