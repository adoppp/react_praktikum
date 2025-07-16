import { useState, useCallback } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import { Input } from '@/ui/Input';
import { InputPassword } from '@/ui/InputPassword';
import { InputEmail } from '@/ui/InputEmail/InputEmail';

const cn = classNames.bind(styles);

interface DashboardProps { };

const Dashboard: FC<DashboardProps> = (): ReactElement => {
  const [name, setName] = useState<string>('');
  const [errorName, setErrorName] = useState<string | null>(null);

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
      </div>
    </div>
  );
};

export default Dashboard; 