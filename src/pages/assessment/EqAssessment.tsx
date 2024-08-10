import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useState } from 'react';

import CustomRadioButton from '@/components/custom-radio-button/CustomRadioButton';
import ScenarioBaseQuestions from '@/components/scenario-based-questions/ScenarioBaseQuestions';
import { eqRangeBasedQuestions } from '@/projectData';

function EqAssessment() {
  const questionPerPageEqPost = 6;

  const [selectedOption, setSelectedOption] = useState<any>(
    eqRangeBasedQuestions
      .map((_, index) => [index, index === 0])
      .reduce((acc, [key, value]: any) => ({ ...acc, [key]: value }), {}),
  );

  const [currentPage, setCurrentPage] = useState<any>(1);

  const handleOptionChange = (questionIndex: any, value: any) => {
    setSelectedOption((prevSelectedOption: any) => ({
      ...prevSelectedOption,
      [questionIndex + 1]: value,
    }));
  };

  const lastQuestionIndex = currentPage * questionPerPageEqPost;
  const firstQuestionIndex = lastQuestionIndex - questionPerPageEqPost;
  const currentQuestions = eqRangeBasedQuestions?.slice(firstQuestionIndex, lastQuestionIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {currentPage <= Math.ceil(eqRangeBasedQuestions.length / questionPerPageEqPost) ? (
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
      ) : (
        <ScenarioBaseQuestions currentPage={currentPage} />
      )}
      <div className="flex items-end justify-end gap-2">
        {currentPage > 1 && currentPage < 28 && (
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
        )}
        {currentPage >= 1 && currentPage < 28 && (
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
        )}
      </div>
    </>
  );
}

export default EqAssessment;
