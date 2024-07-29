import { Col, Row } from 'antd';
import Color from 'color';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/card';
import { EqTestInstructions } from '@/constants';
import { useThemeToken } from '@/theme/hooks';

interface EqTestInstructionsItem {
  id: number;
  desc: string;
  bg: any;
  color: string;
  bg_toString_color: string;
}

function EqAssessmentTest() {
  const themeToken = useThemeToken();
  const navigate = useNavigate();
  const handleBegin = () => {
    navigate('/eqPreAssessment');
  };
  return (
    <div className="p-5">
      <h1 className="mb-10 text-center text-2xl">Welcome to STRUT’s Emotional Intelligence 360</h1>
      <p className="mb-4 text-base">You’ll be asked a series of questions about how well you:</p>
      <Row gutter={[16, 16]} justify="center">
        {EqTestInstructions().map((data: EqTestInstructionsItem) => (
          <Col lg={8} md={12} span={24} key={data.id}>
            <Card
              style={{
                height: '100%',
                padding: 20,
                borderRadius: '10px',
                color: data.color,
                background: `linear-gradient(135deg, ${Color(data.bg)
                  .alpha(0.2)
                  .toString()}, ${Color(data.bg_toString_color)
                  .alpha(0.2)
                  .toString()}) rgb(255, 255, 255)`,
              }}
            >
              <p>{data.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <p className="mt-4 text-base">
        There are no right answers and this is the first step on your journey to understanding your
        EQ at your own pace.
      </p>
      <div className=" mt-16 flex items-center justify-center">
        <button
          className="font-mediumtext-black m-auto flex w-1/4 items-center justify-center rounded-lg px-4 py-2 shadow-none md:m-0"
          style={{ backgroundColor: themeToken.colorPrimary, color: '#fff' }}
          onClick={handleBegin}
        >
          <span className="ml-2  font-normal">Begin</span>
        </button>
      </div>
    </div>
  );
}

export default EqAssessmentTest;
