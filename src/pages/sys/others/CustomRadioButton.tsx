import { useState } from 'react';

import { EqQuestionRadioButton } from '@/constants';

function CustomRadioButton({ questionIndex, selectedValue, handleOptionChange }: any) {
  const [options, setOptions] = useState<any>(
    EqQuestionRadioButton.map((_, index) => [index, false]).reduce(
      (acc, [key, value]: any) => ({ ...acc, [key]: value }),
      {},
    ),
  );
  const handleRadioRow = (idx: number) => {
    setOptions((prevOptions: any) => ({
      ...Object.keys(prevOptions).reduce((acc: any, key: any) => {
        acc[key] = false;
        return acc;
      }, {}),
      [idx]: true,
    }));
  };
  return (
    <div className="flex flex-row gap-16">
      {EqQuestionRadioButton.map((option, index: number) => {
        return (
          <label
            key={option.value}
            htmlFor={`radio-${option.value}-${questionIndex}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
              marginRight: '16px',
            }}
          >
            <input
              type="radio"
              id={`radio-${option.value}-${questionIndex}`}
              name={option.key}
              checked={options[index]}
              onChange={(e) => {
                handleOptionChange(questionIndex, e.target.checked);
                handleRadioRow(index);
              }}
              disabled={!selectedValue[questionIndex]}
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} // Hide default radio button but still functional
            />
            <span
              style={{
                display: 'inline-block',
                width: option?.greenWidth || '24px', // Fallback values
                height: option?.greenHeight || '24px',
                border: '2px solid #0B9C6A', // Custom outline color
                borderRadius: '50%',
                backgroundColor: options[index] ? '#0B9C6A' : '#fff',
                position: 'relative',
                marginRight: '8px',
                transition:
                  'background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease', // Transition for background, border, and transform
                boxShadow: options[index] ? '0 0 8px rgba(0, 0, 0, 0.3)' : 'none', // Add shadow on select
                transform: options[index] ? 'scale(1.1)' : 'scale(1)', // Scale up when selected
              }}
            >
              {options[index] && (
                <span
                  style={{
                    display: 'block',
                    width: option?.whiteWidth || '12px', // Fallback values
                    height: option?.whiteHeight || '12px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1)',
                    transition: 'transform 0.3s ease', // Transition for scaling effect
                  }}
                />
              )}
            </span>
            <span
              style={{
                transition: 'opacity 0.3s ease, transform 0.3s ease', // Transition for label text
                opacity: options[index] ? 1 : 0.7,
                transform: options[index] ? 'scale(1.1)' : 'scale(1)',
              }}
            />
          </label>
        );
      })}
    </div>
  );
}

export default CustomRadioButton;
