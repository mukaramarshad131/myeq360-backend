import { EqQuestionRadioButton } from '@/constants';

function CustomRadioButton({ questionIndex, selectedValue, handleOptionChange }: any) {
  // const [selectedValue, setSelectedValue] = useState('');

  // const handleChange = (event: any) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <div className="flex flex-row gap-16">
      {EqQuestionRadioButton.map((option) => (
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
            value={option.value}
            onChange={(e) => handleOptionChange(questionIndex, e.target.value)}
            checked={selectedValue === option.value}
            style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} // Hide default radio button but still functional
          />
          <span
            style={{
              display: 'inline-block',
              width: option?.greenWidth || '24px', // Fallback values
              height: option?.greenHeight || '24px',
              border: '2px solid #0B9C6A', // Custom outline color
              borderRadius: '50%',
              backgroundColor: selectedValue === option.value ? '#0B9C6A' : '#fff',
              position: 'relative',
              marginRight: '8px',
              transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease', // Transition for background, border, and transform
              boxShadow: selectedValue === option.value ? '0 0 8px rgba(0, 0, 0, 0.3)' : 'none', // Add shadow on select
              transform: selectedValue === option.value ? 'scale(1.1)' : 'scale(1)', // Scale up when selected
            }}
          >
            {selectedValue === option.value && (
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
              opacity: selectedValue === option.value ? 1 : 0.7,
              transform: selectedValue === option.value ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        </label>
      ))}
    </div>
  );
}

export default CustomRadioButton;
