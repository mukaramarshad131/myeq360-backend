import { lazy } from 'react';

const SinglePageReport = lazy(() => import('@/components/single-page-report'));

function OnePageReport() {
  return <SinglePageReport />;
}

export default OnePageReport;
