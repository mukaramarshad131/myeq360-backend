import { Col, Row } from 'antd';

import ChartDonut from '@/pages/components/chart/view/chart-donut';
import ChartRadial from '@/pages/components/chart/view/chart-radial';
import { skillAssessmentData, skillLevels } from '@/projectData';

import MappedComponent from '../mapped-componet';

import LineChart from './line-charts';
import ProgressIndicator from './progress-indicator';

function SkillAssessmentResult() {
  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12} xs={24}>
          <ChartDonut series={[20, 25, 78, 90]} dataLable={skillLevels} />
        </Col>
        <Col lg={12} md={12} sm={12} xs={24}>
          <ChartRadial series={[60, 85, 78, 90]} dataLable={skillLevels} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="my-3">
        <MappedComponent array={skillAssessmentData} Component={ProgressIndicator} />
      </Row>
      <Row gutter={[16, 16]}>
        <MappedComponent array={skillAssessmentData} Component={LineChart} />
      </Row>
    </div>
  );
}

export default SkillAssessmentResult;
