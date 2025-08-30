import { useState, useCallback } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import { Input } from '@/ui/Input';
import { InputPassword } from '@/ui/InputPassword';
import { InputEmail } from '@/ui/InputEmail/InputEmail';
import { Select } from '@/ui/Select';

const cn = classNames.bind(styles);

interface DashboardProps { };


export type OptionDashboard = {
  id: number;
  parentId: number;
  title: string;
};

export type SelectOption = {
  userId: number;
  userName: string;
  userValue: string;
  dashboards: OptionDashboard[];
};

export type SelectOptions = SelectOption[];


const Dashboard: FC<DashboardProps> = (): ReactElement => {
  const [name, setName] = useState<string>('');
  const [errorName, setErrorName] = useState<string | null>(null);
  const [dashboard, setDashboard] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string | null>(null);

  const [password, setPassword] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string | null>(null);

  const validateInputName = useCallback((value: string): void => {
    setErrorName(null);

    if (value.trim() === '') {
      setErrorName('Input cannot be empty');
    } else if (value.length < 3) {
      setErrorName('At least 3 characters');
    }
  }, []);

  const handleInputNameChange = useCallback((value: string) => {
    validateInputName(value);
    setName(value);
  }, []);

  const validateInputEmail = useCallback((value: string): void => {
    setErrorEmail(null);

    if (value.trim() === '') {
      setErrorEmail('Input cannot be empty');
    } else if (!value.includes('@')) {
      setErrorEmail('Must be "@"');
    }
  }, []);

  const handleInputEmailChange = useCallback((value: string) => {
    validateInputEmail(value);
    setEmail(value);
  }, []);

  const validateInputPassword = (value: string) => {
    setErrorPassword(null);

    if (value.trim() === '') {
      setErrorPassword('Input cannot be empty');
    } else if (value.length < 5) {
      setErrorPassword('At least 6 charactes')
    }; 
  };

  const handleInputPasswordChange = (value: string) => {
    validateInputPassword(value);
    setPassword(value);
  };
  const selectDashboard = (value: string) => {
    setDashboard(value);
  };

  const dashboards: SelectOptions = [
    {
      userId: 1,
      userName: 'Jane',
      userValue: 'jane',
      dashboards: [
        {
          id: 14,
          parentId: 1,
          title: 'Dashboard 01'
        },
        {
          id: 27,
          parentId: 1,
          title: 'Dashboard 02'
        },
      ]
    },
    {
      userId: 2,
      userName: 'Bob',
      userValue: 'bob',
      dashboards: [
        {
          id: 21,
          parentId: 2,
          title: 'Dashboard 01'
        },
        {
          id: 23,
          parentId: 2,
          title: 'Dashboard 02'
        },
      ]
    },

  ];

  // const users = [
  //   {
  //     id: 1,
  //     label: 'User 01',
  //     value: 'user-01',
  //   },
  //   {
  //     id: 2,
  //     label: 'User 02',
  //     value: 'user-02',
  //   },
  //   {
  //     id: 3,
  //     label: 'User 03',
  //     value: 'user-03',
  //   },
  //   {
  //     id: 4,
  //     label: 'Jane',
  //     value: 'user-04',
  //   },
  //   {
  //     id: 5,
  //     label: 'Marry',
  //     value: 'user-05',
  //   },
  //   {
  //     id: 6,
  //     label: 'Swanson',
  //     value: 'user-06',
  //   },
  // ];

  return (
    <div className={cn('classes')}>
      <div className={cn('form')}>
        <Input
          id="first-name"
          label="First Name:"
          value={name}
          onChange={handleInputNameChange}
          error={errorName}
        />
        <InputEmail 
          id='email'
          label='Email:'
          value={email}
          onChange={handleInputEmailChange}
          error={errorEmail}
        />
        <InputPassword
          id="password"
          label="Password:"
          value={password}
          onChange={handleInputPasswordChange}
          error={errorPassword}
        />
        <Select
          value={dashboard}
          placeholder='Select user ...'
          options={dashboards}
          selectOption={selectDashboard}
        />
      </div>
    </div>
  );
};

export default Dashboard; 