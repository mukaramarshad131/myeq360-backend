import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { individualDashboardFaqData } from '@/projectData';

function Faq() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState(null);

  const toggleAnswer = (id: any) => {
    if (expandedId === id) {
      setExpandedId(null); // Collapse the answer if it's already expanded
    } else {
      setExpandedId(id); // Expand the answer for the clicked question
    }
  };
  return (
    <div className="mt-10 w-[100%]">
      <h1 className="mb-3 text-center text-2xl font-semibold text-[#3B4970]">
        {t('sys.individualFaq.eqFaq')}
      </h1>
      {individualDashboardFaqData.map((data: any) => (
        <div key={data.id} style={{ marginBottom: 10 }}>
          <button
            className="font-mediumtext-black flex w-full justify-between rounded-lg px-2 py-1 shadow-none md:m-0"
            style={{ backgroundColor: '#ECF5FE', color: '#3B4970', padding: 12 }}
            onClick={() => toggleAnswer(data.id)}
          >
            <span>{t(`sys.individualFaq.${data.Q}`)}</span>
            <span>{expandedId === data.id ? <MinusOutlined /> : <PlusOutlined />}</span>
          </button>
          {expandedId === data.id && (
            <div className="mt-2 rounded-lg p-4" style={{ backgroundColor: '#F0F4F8' }}>
              <p className="text-sm">{t(`sys.individualFaq.${data.Ans}`)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
