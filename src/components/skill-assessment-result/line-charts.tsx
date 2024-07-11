import { Col } from 'antd';
import { t } from 'i18next';

import ChartLine from '@/pages/components/chart/view/chart-line';

import ChartCard from './chart-card';
import { Props } from './progress-indicator';

function LineChart({ item }: Props) {
  return (
    <Col lg={8} md={12} sm={12} xs={24} key={item.key}>
      <ChartCard title={t(`sys.skillCategories.${item.title}`)}>
        <ChartLine series={item.series} dataLable={item.dataLable} height={150} />
      </ChartCard>
    </Col>
  );
}

export default LineChart;
