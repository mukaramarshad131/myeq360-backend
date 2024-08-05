import React from 'react';

function AssessmentSurvey() {
  return (
    <div className="flex flex-col gap-3" style={{ marginBottom: '500px', textAlign: 'center' }}>
      {' '}
      <p
        style={{
          backgroundColor: '#00A76F',
          color: 'white',
          padding: '7px',
          borderRadius: '4px',
          textAlign: 'center',
        }}
      >
        Pre-Assessment Completed!
      </p>
      <p className="text-center">
        Congratulations! You’ve completed the EQ assessment. Below is a quick summary of your
        results.
      </p>
      <p className="text-2xl text-[#595757]">How much do you agree with the results?</p>
    </div>
  );
}

export default AssessmentSurvey;
