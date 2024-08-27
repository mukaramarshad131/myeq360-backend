import { Col, Row } from 'antd';
import { t } from 'i18next';

import logo2 from '@/assets/images/eqlogo (2).png';
import logo from '@/assets/images/eqlogo.png';
import ChartDonut from '@/pages/components/chart/view/chart-donut';
import ChartLine from '@/pages/components/chart/view/chart-line';
import { reportButtonsItems, skillAssessmentData, skillLevels, skills } from '@/projectData';

import MappedComponent from '../../components/mapped-componet';
import ChartCard from '../../components/skill-assessment-result/chart-card';

import CompitencyLevels from './compitency-levels';
import OtherCompetency from './other-competency';

function SinglePageReport() {
  const rd = skillAssessmentData[4];
  const sm = skillAssessmentData[1];

  const modifiedSkillAssessmentData = JSON.parse(JSON.stringify(skillAssessmentData));
  modifiedSkillAssessmentData.splice(1, 1);
  modifiedSkillAssessmentData.splice(2, 1);
  const renderSingleButton = (button: any) => (
    <button
      key={button.id}
      className="flex w-1/4 items-center justify-center rounded-xl px-4 py-2 font-medium text-black shadow-none md:m-0"
      style={{
        backgroundColor: '#3D9176',
        color: '#fff',
        margin: 'auto',
        marginTop: 20,
        padding: '10px 15px ',
      }}
    >
      <span className="ml-2 text-base font-normal">{button.title}</span>
    </button>
  );

  const renderFlexButtons = (buttonsArray: any) => {
    return buttonsArray.map((button: any) => (
      <button
        key={button.id}
        className="flex w-1/4 items-center justify-center rounded-xl px-4 py-2 font-medium text-black shadow-none md:m-0"
        style={{
          backgroundColor: '#3D9176',
          color: '#fff',
          margin: 'auto',
          marginTop: 20,
          padding: '10px 15px ',
        }}
      >
        <span className="ml-2 text-base font-normal">{button.title}</span>
      </button>
    ));
  };
  return (
    <div style={{ width: '80%', maxWidth: '1200px', margin: ' auto', marginBottom: 30 }}>
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
          {rd?.info && (
            <div className="text-[15px]" dangerouslySetInnerHTML={{ __html: rd?.info }} />
          )}
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
      <OtherCompetency data={modifiedSkillAssessmentData} />
      {renderSingleButton(reportButtonsItems['1'][0])}
      {renderSingleButton(reportButtonsItems['1'][1])}

      <div className=" flex flex-row items-center justify-center">
        {renderFlexButtons(reportButtonsItems['2'])}
      </div>
    </div>
  );
}

export default SinglePageReport;
