import { memo } from 'react';
import type { ChangeEvent, FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cn = classNames.bind(styles);

interface InputProps {
  value: string;
  placeholder: string;
  error: string | null;
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = memo(({ value, placeholder, onChange, error }): ReactElement => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cn('input__container')}>
      <input
        className={cn('input')}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
      {error && <div className={cn('input__error')}>{error}</div>}
    </div>
  );
});

export { Input };