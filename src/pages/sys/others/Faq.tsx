import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

const obj = [
  {
    id: 1,
    Q: 'Q. HOW LONG IS THE EQ/EMOTIONAL INTELLIGENCE TEST?',
    Ans: 'A. The test consists of 55 questions and takes about 5-10 minutes to complete.',
    bg: '#CCEBE1',
    color: '#008059',
  },
  {
    id: 2,
    Q: 'Q. WHAT WILL MY EQ TEST RESULTS LOOK LIKE?',
    Ans: 'A. Your results show your scores on the five dimensions of emotional intelligence.',
    bg: '#E6FFFB',
    color: '#08979C',
  },
  {
    id: 3,
    Q: 'Q. HOW CAN I ACCESS MY EQ TEST RESULTS?',
    Ans: 'A. After you take a test, you will have the option to create an account by entering your email address. If you create an account, you can view your test results at any time by returning to Truity.com and logging into your account. We do not email your results to you.',
    bg: '#CCEBE1',
    color: '#008059',
  },
  {
    id: 4,
    Q: 'Q. DO I NEED TO COMPLETE THIS EMOTIONAL INTELLIGENCE TEST ALL AT ONCE?',
    Ans: 'A. If you’ve created an account and are logged in when you take the test, your responses will be saved as you go through the test. If you do not log in to a Truity account before starting the test, your progress will not be saved and you will need to complete the test all at once.',
    bg: '#E6FFFB',
    color: '#08979C',
  },
  {
    id: 5,
    Q: 'Q. IS THIS PERSONALITY TEST REALLY FREE?',
    Ans: 'You do not need to purchase or register to take this test or view your results.',
    bg: '#CCEBE1',
    color: '#008059',
  },
];

function Faq() {
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
      <h1 className="mb-3 text-center text-2xl font-bold text-[#008059]">
        Emotional Intelligence Test FAQ
      </h1>
      {obj.map((data) => (
        <div key={data.id} style={{ marginBottom: 10 }}>
          <button
            className="font-mediumtext-black flex w-full justify-between rounded-lg px-2 py-1 shadow-none md:m-0"
            style={{ backgroundColor: data.bg, color: data.color, padding: 12 }}
            onClick={() => toggleAnswer(data.id)}
          >
            <span>{data.Q}</span>
            <span>{expandedId === data.id ? <MinusOutlined /> : <PlusOutlined />}</span>
          </button>
          {expandedId === data.id && (
            <div className="mt-2 rounded-lg p-4" style={{ backgroundColor: '#F0F4F8' }}>
              <p className="text-sm">{data.Ans}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
