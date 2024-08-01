import { ArrowRightOutlined } from '@ant-design/icons';
import { Col, Input, Row, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/card';
import { EqTestPostAssessment } from '@/constants';

const { Option } = Select;

interface EqTestPostAssessmentItem {
  id: number;
  desc: string;
  bg: any;
  color: string;
  bg_toString_color: string;
  type: string;
  options?: any;
}
const selectCountry = (
  <Select defaultValue="Select Option">
    <Option value="$0-$29,999">$0-$29,999</Option>
    <Option value="$30,000-$44,999">$30,000-$44,999</Option>
    <Option value="$45-$64,999">$45-$64,999</Option>
    <Option value="$115000+">$115000+</Option>
  </Select>
);

function EqPostAssessment() {
  const navigate = useNavigate();

  const handleResult = () => {
    navigate('/singlePageReport');
  };
  return (
    <div className="p-10">
      <h1 className="mb-4 text-center text-2xl">Last step before your results!</h1>
      <Row gutter={[16, 16]} justify="center" className="">
        {EqTestPostAssessment().map((data: EqTestPostAssessmentItem) => (
          <Col lg={24} md={24} span={24} key={data.id}>
            <Card
              style={{
                height: '100%',
                padding: 20,
                borderRadius: '10px',
                color: '#595757',
                background: '#ECF5FE',
              }}
            >
              <legend style={{ fontSize: '16px', marginBottom: 20 }}>{data.desc}</legend>
              <Row gutter={[16, 16]}>
                {data.options.map((option: any) => (
                  <Col lg={6} md={12} span={12} key={data.id}>
                    <div className=" flex flex-row items-center" key={option.value}>
                      <input
                        className="mr-4"
                        type={data?.type}
                        id={option.value}
                        name={`question-${data.id}`}
                        value={option.value}
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      <Input
        size="large"
        className="mt-3 "
        addonAfter={selectCountry}
        defaultValue="Which income group does your household fall under?"
        readOnly
      />
      <div className="mt-10 flex flex-row items-center justify-between">
        <p className=" text-xl">Demographic data is for research purposes only</p>

        <div onClick={handleResult} className="relative h-12 w-12 rounded-full bg-green">
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
    </div>
  );
}

export default EqPostAssessment;
