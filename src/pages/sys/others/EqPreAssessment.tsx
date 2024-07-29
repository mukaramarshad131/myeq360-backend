import { ArrowRightOutlined } from '@ant-design/icons';
import { Col, Input, Row, Select } from 'antd';
import Color from 'color';

import Card from '@/components/card';
import { EqTestPreAssessment, EqTestPreAssessmentSelect } from '@/constants';

interface EqTestPreAssessmentItem {
  id: number;
  desc: string;
  bg: any;
  color: string;
  bg_toString_color: string;
}

const selectAge = <Select defaultValue="Select Age" options={EqTestPreAssessmentSelect['1']} />;
const selectEducation = (
  <Select
    defaultValue="Professional Certificate / License"
    options={EqTestPreAssessmentSelect['2']}
  />
);

const selectCountry = (
  <Select defaultValue="select Counrty" options={EqTestPreAssessmentSelect['3']} />
);

function EqPreAssessment() {
  return (
    <>
      <div className="p-5">
        {' '}
        <Input size="large" addonAfter={selectAge} defaultValue="What is your age?" readOnly />
        <Input
          size="large"
          className="mb-5 mt-4 "
          addonAfter={selectEducation}
          defaultValue="What is the highest degree or level of education you have completed?"
        />
        <Row gutter={[16, 16]} justify="center" className="">
          {EqTestPreAssessment().map((data: EqTestPreAssessmentItem) => (
            <Col lg={12} md={24} span={24} key={data.id}>
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
                <fieldset>
                  <legend>{data.desc}</legend>
                  <Row gutter={[16, 16]}>
                    {data.options.map((option: any) => (
                      <Col lg={12} md={12} span={24} key={data.id}>
                        <div className=" flex flex-row items-center" key={option.value}>
                          <input
                            className="mr-4"
                            type="radio"
                            id={option.value}
                            name={`question-${data.id}`}
                            value={option.value}
                          />
                          <label htmlFor={option.value}>{option.label}</label>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </fieldset>
              </Card>
            </Col>
          ))}
        </Row>
        <Input
          size="large"
          className="mt-3 "
          addonAfter={selectCountry}
          defaultValue="What country is your ZIP code in?"
        />
      </div>
      <div className="mt-10 flex flex-row items-center justify-between">
        <p className=" ml-12 text-xl">Demographic data is for research purposes only</p>
        <div className="relative h-12 w-12 rounded-full bg-green">
          <ArrowRightOutlined
            style={{
              fontSize: '23px',
              color: '#fff',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
    </>
  );
}

export default EqPreAssessment;
