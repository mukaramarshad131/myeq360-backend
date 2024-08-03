import { Progress } from 'antd';

import { ScenarioBasedQuestions } from '@/projectData';

import EqPostAssessment from './EqPostAssessment';

function ScenarioBaseQuestions({ currentPage }: { currentPage: number }) {
  const index = currentPage - 10;
  console.log('Scenariocurrentpage', currentPage);
  const currentQuestions = ScenarioBasedQuestions[index];

  return (
    <div>
      {currentPage <= 27 ? (
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
      ) : (
        <EqPostAssessment />
      )}
    </div>
  );
}

export default ScenarioBaseQuestions;
