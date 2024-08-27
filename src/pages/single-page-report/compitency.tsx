import { Col, Progress } from 'antd';
import { t } from 'i18next';

import { Props } from '../../components/skill-assessment-result/progress-indicator';

function Compitency({ item }: Props) {
  return (
    <Col lg={12} md={12} sm={24} xs={24} style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
      <div className="flex h-[50px] w-[60px] items-center justify-center rounded-full border-[3px] border-[#fff] bg-themeBlue text-xl text-[#fff]">
        {t(item.abbrevation)}
      </div>
      <div className="flex w-full flex-col">
        <div className="text-lg font-semibold text-themeText">{t(item.title)}</div>
        <div className="flex items-center gap-5">
          <Progress percent={item.percent} style={{ width: '50%' }} />
          <div className="text-[17px] font-semibold text-themeText">{t(item.skillLevel)}</div>
        </div>
      </div>
    </Col>
  );
}

export default Compitency;
