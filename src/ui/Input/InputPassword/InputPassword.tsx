import { useState, type ChangeEvent, type FC, type ReactElement } from 'react';
import classNames from 'classnames/bind';

import styles from '@/ui/Input/Input.module.scss';
import inputPasswordStyles from '@/ui/Input/InputPassword/InputPassword.module.scss';
import { IconClosedEye, IconEye } from '@/assets/svg';

interface InputPasswordProps {
    id: string;
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    error: string | null,
    customClass?: {
        container?: string,
        label?: string,
        input?: string,
        error?: string
    }
};

const cn = classNames.bind({...styles, ...inputPasswordStyles});

export const InputPassword: FC<InputPasswordProps> = ({ id, value, label, placeholder, onChange, error, customClass }): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
  };

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className={cn('input', 'input__password', customClass?.container)}>
      {label && <p className={cn('input__label', customClass?.label)}>{label}</p>}

      <label htmlFor={id}>
        <input
          className={cn('input__element', 'input__password__element', { 'error': error }, customClass?.input)}
          id={id}
          type={visible ? 'text' : 'password'}
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
        <button className={cn('button__eye')} type='button' onClick={toggleVisibility}>
          {visible ? IconClosedEye : IconEye}
        </button>
      </label>

      {error && <div className={cn('input__error', customClass?.error)}>{error}</div>}
    </div>
  );
};