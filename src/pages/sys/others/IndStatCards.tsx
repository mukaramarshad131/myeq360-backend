import { Col, Row } from 'antd';

import { IndStats } from '@/constants';
import AnalysisCard from '@/pages/dashboard/analysis/analysis-card';

interface IndStatsItem {
  id: number;
  cover: string;
  title: string;
  des: string;
  bg: string;
  color: string;
  bg_toString_color: string;
}

function IndStatCard() {
  return (
    <div className="p-2">
      <Row gutter={[16, 16]} justify="center">
        {IndStats().map((data: IndStatsItem) => (
          <Col lg={6} md={12} span={24} key={data.id}>
            <AnalysisCard
              cover={data.cover}
              title={<h3 style={{ fontSize: '17px' }}>{data.title}</h3>}
              subtitle={data.des}
              style={{
                textAlign: 'center',
                color: '#808080',
                background: '#ECF5FE',
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default IndStatCard;
