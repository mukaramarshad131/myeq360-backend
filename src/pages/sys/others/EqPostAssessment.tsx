import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useState } from 'react';

import { EqPostAssessmnetQuestions } from '@/constants';

import CustomRadioButton from './CustomRadioButton';

function EqPostAssessment() {
  const questionPerPage = 6;
  const [selectedOption, setSelectedOption] = useState<any>(
    EqPostAssessmnetQuestions.map((_, index) => [index, index === 0]).reduce(
      (acc, [key, value]: any) => ({ ...acc, [key]: value }),
      {},
    ),
  );
  const [currentPage, setCurrentPage] = useState<any>(1);

  const handleOptionChange = (questionIndex: any, value: any) => {
    setSelectedOption((prevSelectedOption: any) => ({
      ...prevSelectedOption,
      [questionIndex + 1]: value,
    }));
  };
  const lastQuestionIndex = currentPage * questionPerPage;
  const firstQuestionIndex = lastQuestionIndex - questionPerPage;
  const currentQuestions = EqPostAssessmnetQuestions?.slice(firstQuestionIndex, lastQuestionIndex);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(EqPostAssessmnetQuestions.length / questionPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > EqPostAssessmnetQuestions.length / questionPerPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className=" p-10">
        {currentQuestions?.map((options, idx: any) => {
          return (
            <div key={idx}>
              <Row gutter={[16, 16]} justify="center" className="p-2">
                <Col
                  span={24}
                  xl={24}
                  lg={24}
                  md={24}
                  sm={24}
                  className="flex flex-col rounded-2xl py-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
                  style={{
                    color: 'gray',
                    fontSize: '18px',
                    borderRadius: '10px',
                    height: '100%',
                    background: '##D1D6DA',
                    display: 'flex',
                    // padding: '40px',
                  }}
                >
                  <p className="m-4 ">{options?.question}</p>

                  <CustomRadioButton
                    questionIndex={idx}
                    selectedValue={selectedOption}
                    handleOptionChange={handleOptionChange}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
      {currentPage === 1 ? (
        <div className=" flex items-end justify-end">
          <div onClick={handleNextPage} className="relative m-5 h-12 w-12 rounded-full bg-green">
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
      ) : (
        <div className="flex flex-row items-center justify-around">
          <div onClick={handlePreviousPage} className="relative h-12 w-12 rounded-full bg-green">
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
          <div onClick={handleNextPage} className="relative h-12 w-12 rounded-full bg-green">
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
      )}
    </>
  );
}

export default EqPostAssessment;
