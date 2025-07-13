import { memo } from 'react';
import type { ChangeEvent, FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cn = classNames.bind(styles);

interface InputProps {
  id: string;
  value: string;
  label?: string;
  placeholder?: string;
  error: string | null;
  onChange: (value: string) => void;
  customStyles?: {
    container?: string;
    label?: string;
    input?: string;
    error?: string;
  };
}

const Input: FC<InputProps> = memo(({ id, value, label, placeholder, onChange, error, customStyles }): ReactElement => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cn('input', customStyles?.container)}>
      {label && <p className={cn('input__label', customStyles?.label)}>{label}</p>}

      <label htmlFor={id}>
        <input
          className={cn('input__element', customStyles?.input, { 'error': error })}
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      </label>

      {error && <div className={cn('input__error', customStyles?.error)}>{error}</div>}
    </div>
  );
});

export { Input };