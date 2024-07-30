import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useState } from 'react';

import { EqPostAssessmnetQuestions } from '@/constants';

import CustomRadioButton from './CustomRadioButton';

function EqPostAssessment() {
  const [selectedOption, setSelectedOption] = useState<any>(
    EqPostAssessmnetQuestions.map((_, index) => [index, index === 0]).reduce(
      (acc, [key, value]: any) => ({ ...acc, [key]: value }),
      {},
    ),
  );
  const handleOptionChange = (questionIndex: any, value: any) => {
    setSelectedOption((prevSelectedOption: any) => ({
      ...prevSelectedOption,
      [questionIndex + 1]: value,
    }));
  };
  return (
    <>
      <div className="flex flex-col gap-6 pb-8">
        {EqPostAssessmnetQuestions?.map((options, idx: any) => {
          return (
            <div key={idx}>
              <Row justify="center">
                <Col>
                  <p className="text-center text-base">{options?.question}</p>
                </Col>
              </Row>

              <Row align="middle" className="flex flex-row justify-center gap-20">
                <Col>
                  <p className="text-sm">{options?.never}</p>
                </Col>

                <Col>
                  <Row gutter={16} justify="center" className="gap-x-20">
                    <Col className=" p-0">
                      <CustomRadioButton
                        questionIndex={idx}
                        selectedValue={selectedOption}
                        handleOptionChange={handleOptionChange}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <p className="text-sm">{options.always}</p>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-around">
        <div className="relative h-12 w-12 rounded-full bg-green">
          <ArrowLeftOutlined
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

export default EqPostAssessment;
