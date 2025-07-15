import type { FC, ReactElement } from 'react';
import { InputDefault } from './InputDefault';
import { InputPassword } from './InputPassword';

type Input = 'default' | 'password' | 'email';

interface InputProps {
  inputType: Input;
  id: string;
  value: string;
  label?: string;
  placeholder?: string;
  error: string | null;
  onChange: (value: string) => void;
  customClass?: {
    container?: string,
    label?: string,
    input?: string,
    error?: string
  }
};

export const Input: FC<InputProps> = ({ inputType, id, value, label, placeholder, onChange, error, customClass }): ReactElement => {
  switch (inputType) {
    case 'default':
      return <InputDefault id={id} value={value} label={label} placeholder={placeholder} onChange={onChange} error={error} customClass={customClass} />

    case 'password':
      return <InputPassword id={id} value={value} label={label} placeholder={placeholder} onChange={onChange} error={error} customClass={customClass} />

      default:
        return <div>Error in Input.tsx</div>
  }
}