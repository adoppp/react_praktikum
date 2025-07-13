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
  customClass?: {
    container?: string,
    label?: string,
    input?: string,
    error?: string
  }
};

const Input: FC<InputProps> = memo(({ id, value, label, placeholder, onChange, error, customClass }): ReactElement => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cn('input', customClass?.container)}>
      {label && <p className={cn('input__label', customClass?.label)}>{label}</p>}

      <label htmlFor={id}>
        <input
          className={cn('input__element', { 'error': error }, customClass?.input)}

          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      </label>

      {error && <div className={cn('input__error', customClass?.error)}>{error}</div>}
    </div>
  );
});

export { Input };