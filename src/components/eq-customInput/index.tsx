import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';

import { EQInput } from '#/entity';

function CustomInput({
  type,
  disabled,
  placeHolder,
  inputName,
  allowClear,
  className,
  onChange,
  mandatory,
  maxLength,
  showCount,
  defaultValue,
  inputLabel,
}: EQInput) {
  const [passType, setPassType] = useState('password');
  const checkPassword = () => {
    setPassType(passType === 'password' ? 'text' : 'password');
  };
  return (
    <>
      <label htmlFor={inputName}>
        {inputLabel}
        {mandatory && <span className="text-error">*</span>}
      </label>
      <Input
        size="large"
        disabled={disabled}
        type={type === 'password' ? passType : type}
        placeholder={placeHolder || 'Enter Content'}
        suffix={
          type === 'password' && (
            <span onClick={checkPassword}>
              {passType === 'password' ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </span>
          )
        }
        name={inputName}
        allowClear={allowClear}
        className={`formItem ${className}`}
        onChange={onChange}
        required={mandatory}
        defaultValue={defaultValue}
        maxLength={maxLength}
        showCount={showCount}
      />
    </>
  );
}

export default CustomInput;
