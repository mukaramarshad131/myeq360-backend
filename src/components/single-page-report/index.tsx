import { Col, Row } from 'antd';
import { t } from 'i18next';

import logo2 from '@/assets/images/eqlogo (2).png';
import logo from '@/assets/images/eqlogo.png';
import ChartDonut from '@/pages/components/chart/view/chart-donut';
import ChartLine from '@/pages/components/chart/view/chart-line';
import { skillAssessmentData, skillLevels, skills } from '@/projectData';

import MappedComponent from '../mapped-componet';
import ChartCard from '../skill-assessment-result/chart-card';

import CompitencyLevels from './compitency-levels';
import OtherCompetency from './other-competency';

function SinglePageReport() {
  const rd = skillAssessmentData[4];
  const sm = skillAssessmentData[1];
  return (
    <div style={{ width: '80%', maxWidth: '1200px', margin: '0 auto' }}>
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <div className="flex gap-4">
            <img src={logo2} alt="" className="h-[100px] max-lg:h-20" />
            <div className="flex flex-col">
              <div className="flex flex-wrap">
                <h1 className="text-nowrap text-4xl font-bold tracking-[1px] text-themeBlue">
                  Nayimo David
                </h1>
                <img src={logo} alt="" className="h-11 max-h-11 min-h-11" />
              </div>
              <p className="text-lg font-semibold text-themeGreen">ASSESMENT OVERVIEW</p>
              <p className="text-lg">1234@gmail.com</p>
            </div>
          </div>
          <h1 className="text-lg font-bold text-themeText">Compitency Levels:</h1>
          <MappedComponent array={skills} Component={CompitencyLevels} />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <ChartDonut series={[50, 50]} dataLable={skillLevels?.slice(0, 2)} />
        </Col>
      </Row>
      <h1 className="text-center text-[22px] font-bold text-themeText">
        {t('common.singleResultTitle')}
      </h1>
      <h1 className="text-[22px] font-semibold text-themeText">
        {t('common.topCompitency')}:<br />
        <span className="font-semibold text-[#324B71]">
          {t(rd?.abbrevation)} - {t(rd?.title)} ({t(rd?.skillabrevation)})
        </span>
      </h1>
      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col lg={10} md={12} sm={24} xs={24}>
          <ChartCard title={t(rd?.title)} bottomLine borderNone titleCenter titleSize="20px">
            <ChartLine series={rd?.series} dataLable={rd?.dataLable} height={150} />
          </ChartCard>
        </Col>
        <Col lg={14} md={12} sm={24} xs={24}>
          {/* eslint-disable-next-line */}
          {rd?.info && <div className="text-[15px]" dangerouslySetInnerHTML={{ __html: rd?.info }} />}
        </Col>
      </Row>
      <h1 className="text-[22px] font-semibold text-themeText">
        {t('common.lowCompitency')}:<br />
        <span className="font-semibold text-[#324B71]">
          {t(sm?.abbrevation)} - {t(sm?.title)} ({t(sm?.skillabrevation)})
        </span>
      </h1>
      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col lg={10} md={12} sm={24} xs={24}>
          <ChartCard title={t(rd.title)} borderNone bottomLine titleCenter titleSize="20px">
            <ChartLine series={sm?.series} dataLable={sm?.dataLable} height={150} />
          </ChartCard>
        </Col>
        <Col lg={14} md={12} sm={24} xs={24}>
          {/* eslint-disable-next-line */}
          {sm.info && <div className="text-[15px]" dangerouslySetInnerHTML={{ __html: sm.info }} />}
        </Col>
      </Row>
      <OtherCompetency />
    </div>
  );
}

export default SinglePageReport;
