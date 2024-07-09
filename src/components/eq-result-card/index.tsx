import { Col, Row } from 'antd';

import ChartDonut from '@/pages/components/chart/view/chart-donut';
import ChartLine from '@/pages/components/chart/view/chart-line';
import ChartRadial from '@/pages/components/chart/view/chart-radial';
import { resultLineChart } from '@/projectData';

import ChartCard from './chart-card';

function EQResultCard() {
  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12} xs={24}>
          <ChartDonut
            series={[20, 25, 78, 90]}
            dataLable={['Meeting', 'Developing', 'Exceeding', 'Emerging']}
          />
        </Col>
        <Col lg={12} md={12} sm={12} xs={24}>
          <ChartRadial
            series={[60, 85, 78, 90]}
            dataLable={['Meeting', 'Developing', 'Exceeding', 'Emerging']}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {resultLineChart?.map((item: any) => {
          return (
            <Col lg={8} md={12} sm={12} xs={24} key={item.key}>
              <ChartCard title={item?.title}>
                <ChartLine series={item.series} dataLable={item.dataLable} height={150} />
              </ChartCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default EQResultCard;
