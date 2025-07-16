import { useState, useCallback } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';

const cn = classNames.bind(styles);

interface DashboardProps { };

const Dashboard: FC<DashboardProps> = (): ReactElement => {
  const [name, setName] = useState<string>('');
  const [errorName, setErrorName] = useState<string | null>(null);
  const [user, setUser] = useState<string>('');

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

  const selectUser = (value: string) => {
    setUser(value);
  };

  const users = [
    {
      id: 1,
      label: 'User 01',
      value: 'user-01',
    },
    {
      id: 2,
      label: 'User 02',
      value: 'user-02',
    },
    {
      id: 3,
      label: 'User 03',
      value: 'user-03',
    },
    {
      id: 4,
      label: 'Jane',
      value: 'user-04',
    },
    {
      id: 5,
      label: 'Marry',
      value: 'user-05',
    },
    {
      id: 6,
      label: 'Swanson',
      value: 'user-06',
    },
  ];

  return (
    <div className={cn('classes')}>
      <div className={cn('form')}>
        <Input
          id="first-name"
          label="First Name:"
          value={name}
          onChange={handleInputNameChange}
          error={errorName}
          customClass={{
            container: cn('input__container'),
          }}
        />
        <Select
          value={user}
          placeholder='Select user ...'
          options={users}
          selectUser={selectUser}
        />
      </div>
    </div>
  );
};

export default Dashboard; 