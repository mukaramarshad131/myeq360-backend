import { Col, Progress, Row } from 'antd';
import { t } from 'i18next';

import ChartCard from './chart-card';

export type Props = {
  item: any;
};
function ProgressIndicator({ item }: Props) {
  return (
    <Col lg={8} md={12} sm={12} xs={24} key={item.key} style={{ height: 'auto' }}>
      <ChartCard title={t(`sys.skillCategories.${item.title}`)} titleBorderWidth="5px" titleCenter>
        <Progress percent={item.percent} />
        {item.children?.map((ele: any) => {
          return (
            <Row key={ele.key} gutter={[16, 16]}>
              <Col lg={17} md={16} sm={18}>
                {t(`sys.${item.title}.${ele.title}`)}
              </Col>
              <Col lg={7} md={8} sm={6} style={{ marginLeft: 'auto' }}>
                {t(`sys.skillLevels.${ele.status}`)}
              </Col>
            </Row>
          );
        })}
      </ChartCard>
    </Col>
  );
}

export default ProgressIndicator;
