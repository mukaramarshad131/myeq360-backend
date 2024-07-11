import { Col, Row } from 'antd';
import { t } from 'i18next';
import { Props } from '.';

function SkillCategories({item}:Props) {
  return (
    <Row gutter={[16, 16]}>
      <Col lg={17} md={16} sm={18}>
        {t(item.title)}
      </Col>
      <Col lg={7} md={8} sm={6} style={{ marginLeft: 'auto' }}>
        {t(`sys.skillLevels.${item.status}`)}
      </Col>
    </Row>
  );
}

export default SkillCategories;
