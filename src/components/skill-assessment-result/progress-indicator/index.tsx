import { Col, Progress } from 'antd';
import { t } from 'i18next';

import MappedComponent from '@/components/mapped-componet';

import ChartCard from '../chart-card';

import SkillCategories from './skill-categories';

export type Props = {
  item: any;
};
function ProgressIndicator({ item }: Props) {
  return (
    <Col lg={8} md={12} sm={12} xs={24} key={item.key} style={{ height: 'auto' }}>
      <ChartCard title={t(item.title)} borderWidth="5px" titleCenter>
        <Progress percent={item.percent} />
        <MappedComponent array={item.children} Component={SkillCategories} />
      </ChartCard>
    </Col>
  );
}

export default ProgressIndicator;
