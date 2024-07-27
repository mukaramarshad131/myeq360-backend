import { useTranslation } from 'react-i18next';

export function TrialLinkCard() {
  const { t } = useTranslation();
  return (
    <div
      className=" flex  flex-col items-center justify-between rounded-2xl p-6 py-12 max-lg:w-full"
      style={{ background: '#92d6e5', color: 'white' }}
    >
      <h1 className=" text-'#D9DDE0' text-2xl font-semibold">
        {t('sys.freeIndividualAssessment.freeAssessment')}
      </h1>
      <div
        style={{ color: '#F3F4F5', fontSize: '13px' }}
        className="mx-auto mb-6 mt-4 max-w-sm  text-sm  md:mx-0"
      >
        {t('sys.freeIndividualAssessment.freeAssessmentDes')}
      </div>
      <div className="flex flex-col gap-5">
        <a
          href="https://myeq360.com/"
          target="_blank"
          className=" text-base font-normal"
          style={{ color: 'white' }}
          rel="noreferrer"
        >
          {t('sys.freeIndividualAssessment.yourEq')}
        </a>
        <button
          className="font-mediumtext-black flex items-center justify-center rounded-lg px-2 py-1 shadow-none md:m-0"
          style={{ backgroundColor: '#0092B3', color: '#fff', padding: 7 }}
          onClick={() => window.open('https://myeq360.com/')}
        >
          <span className="ml-2 font-normal text-['20px']">
            {t('sys.freeIndividualAssessment.attemptFreeAssessment')}
          </span>
        </button>
      </div>
    </div>
  );
}
