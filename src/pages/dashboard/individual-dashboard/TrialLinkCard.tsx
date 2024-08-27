import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function TrialLinkCard() {
  const navigate = useNavigate();

  const handleAssessmnet = () => {
    navigate('/eqAssessmentTest');
  };
  const { t } = useTranslation();
  return (
    <div
      className=" flex  flex-col items-center justify-between rounded-2xl p-6 py-12 max-lg:w-full"
      style={{ background: '#ECF5FE', color: '#3B4970' }}
    >
      <h1 className=" font-base  text-2xl text-[#3B4970]">
        {t('sys.freeIndividualAssessment.freeAssessment')}
      </h1>
      <div
        style={{ color: '#3B4970', fontSize: '13px' }}
        className="mx-auto mb-6 mt-4 max-w-sm  text-sm  md:mx-0"
      >
        {t('sys.freeIndividualAssessment.freeAssessmentDes')}
      </div>
      <div className="flex flex-col gap-5">
        <a
          href="https://myeq360.com/"
          target="_blank"
          className=" text-base font-normal"
          style={{ color: '#3B4970' }}
          rel="noreferrer"
        >
          {t('sys.freeIndividualAssessment.yourEq')}
        </a>
        <button
          className="font-mediumtext-black flex items-center justify-center rounded-lg px-2 py-1 shadow-none md:m-0"
          style={{ backgroundColor: '#3B4970', color: '#fff', padding: 7 }}
          onClick={handleAssessmnet}
        >
          <span className="ml-2 font-normal text-['20px']">
            {t('sys.freeIndividualAssessment.attemptFreeAssessment')}
          </span>
        </button>
      </div>
    </div>
  );
}
