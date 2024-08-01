import { Progress } from 'antd';

import { ScenarioBasedQuestions } from '@/constants';

function ScenarioBaseQuestions({ currentPage }: { currentPage: number }) {
  // Calculate the index based on currentPage
  const index = currentPage - 10;
  console.log(index);

  // Check if the index is within bounds
  const currentQuestions = ScenarioBasedQuestions[index];
  if (!currentQuestions) {
    return <div>No questions available for this page.</div>;
  }
  return (
    <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
      <Progress
        strokeColor="#0D9C6C"
        percent={75}
        percentPosition={{ align: 'center', type: 'inner' }}
        size={['100%', 20]}
      />
      <div>
        <div className="flex flex-col gap-5 p-10">
          <p className="text-base font-semibold">{currentQuestions.scenario}</p>
          <p className="text-base">{currentQuestions.question}</p>
          {currentQuestions.options.map((option: any) => (
            <div key={option.value}>
              <input type="radio" name="options" id={`radio-${option.value}`} />
              <label style={{ marginLeft: '10px' }} htmlFor={`radio-${option.value}`}>
                {option.option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScenarioBaseQuestions;
