import { useState, useCallback } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import { Input } from '@/ui/Input';

const cn = classNames.bind(styles);

interface DashboardProps { };

const Dashboard: FC<DashboardProps> = (): ReactElement => {
  const [ name, setName ] = useState<string>('');
  const [ errorName, setErrorName ] = useState<string | null>(null);

  const validateInputName = useCallback((value: string): void => {
    setErrorName(null);

    if (value.trim() === '') {
      setErrorName('Input cannot be empty');
    }
    if (value.length < 3) {
      setErrorName('At least 3 characters');
    }
  }, []);

  const handleInputNameChange = useCallback((value: string) => {
    validateInputName(value);
    setName(value);
  }, []);

  return (
    <div className={cn('classes')}>
      <Input
        value={name}
        placeholder='Enter your name'
        onChange={handleInputNameChange}
        error={errorName}
      />
    </div>
  );
};

export default Dashboard; 