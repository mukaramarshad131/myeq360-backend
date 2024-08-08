import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Input, Modal, Row, Select } from 'antd';
import { t } from 'i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/card';
import { EqTestPreAssessment, EqTestPreAssessmentSelect } from '@/projectData';

const notificationContent = (
  <div>
    <p
      className="bg-buttonBlue"
      style={{
        color: 'white',
        padding: '7px',
        borderRadius: '4px',
        textAlign: 'center',
      }}
    >
      {t('sys.preAssessmentComplete.preAssessmentCompleted')}
    </p>
    <p className="p-3">
      {t('sys.preAssessmentComplete.preCompletedAssessmentDescription')}
      <span className="text-base font-semibold">
        {t('sys.preAssessmentComplete.rangeDescription')}
      </span>
      {t('sys.preAssessmentComplete.assessmentTimeLimitDescription')}
    </p>
    <p className="p-3 text-base text-textRed">{t('sys.preAssessmentComplete.uponFinishing')}</p>
  </div>
);

interface EqTestPreAssessmentItem {
  id: number;
  desc: string;
  bg: any;
  color: string;
  bg_toString_color: string;
  options: any;
}

const selectAge = (
  <Select
    defaultValue={t('sys.preAssessmentQuestions.selectAge')}
    options={EqTestPreAssessmentSelect['1']}
  />
);
const selectEducation = (
  <Select
    defaultValue={t('sys.preAssessmentQuestions.selectDegree')}
    options={EqTestPreAssessmentSelect['2']}
  />
);

const selectCountry = (
  <Select
    defaultValue={t('sys.preAssessmentQuestions.selectCountry')}
    options={EqTestPreAssessmentSelect['3']}
  />
);

function EqPreAssessment() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOk = () => {
    setModalOpen(false);
    navigate('/eqAssessment');
  };
  const handleCancel = () => {
    setModalOpen(false);
  };
  return (
    <div className="p-10">
      {' '}
      <Input
        size="large"
        addonAfter={selectAge}
        defaultValue={t('sys.preAssessmentQuestions.yourAge')}
        readOnly
      />
      <Input
        size="large"
        className="mb-5 mt-4 "
        addonAfter={selectEducation}
        defaultValue={t('sys.preAssessmentQuestions.yourDegree')}
        readOnly
      />
      <Row gutter={[16, 16]} justify="center" className="">
        {EqTestPreAssessment().map((data: EqTestPreAssessmentItem) => (
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
              <fieldset>
                <legend>{data.desc}</legend>
                <Row gutter={[16, 16]}>
                  {data.options.map((option: any) => (
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} span={24} key={data.id}>
                      <div className=" flex flex-row items-center" key={option.value}>
                        <input
                          className="mr-4"
                          type="radio"
                          id={option.value}
                          name={`question-${data.id}`}
                          value={t(option.value)}
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
        defaultValue={t('sys.preAssessmentQuestions.yourCountryCode')}
        readOnly
      />
      <div className="mt-10 flex flex-row items-center justify-between">
        <p className=" text-xl">{t('sys.preAssessmentQuestions.demographicData')}</p>

        <div
          onClick={() => setModalOpen(true)}
          className="relative h-12 w-12 rounded-full bg-green"
        >
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
        <Modal
          width={720}
          title={t('sys.preAssessmentComplete.preAssessment')}
          centered
          open={modalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <Button style={{ background: '#3B4970' }} type="primary" key="ok" onClick={handleOk}>
              {t('sys.preAssessmentComplete.letStartEqAssessment')}
            </Button>
          }
        >
          {notificationContent}
        </Modal>
      </div>
    </div>
  );
}

export default EqPreAssessment;
