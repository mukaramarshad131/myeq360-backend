import { Row } from 'antd';
import { t } from 'i18next';

import MappedComponent from '../mapped-componet';
import ChartCard from '../skill-assessment-result/chart-card';

import Compitency from './compitency';

function OtherCompetency({ data }: any) {
  return (
    <ChartCard borderNone borderWidth="12px" borderBottom borderColor="#3b4970">
      <div className="bg-[#d6dbe3] px-[20px] py-3">
        <h1 className="text-center text-lg font-bold text-themeBlue">
          {t('common.otherCompitency')}
        </h1>
        <Row>
          <MappedComponent array={data} Component={Compitency} />
        </Row>
      </div>
    </ChartCard>
  );
}

export default OtherCompetency;
