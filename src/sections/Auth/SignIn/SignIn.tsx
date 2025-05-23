import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from '@/sections/Auth/SignIn/SignIn.module.scss';

const cn = classNames.bind(styles);

interface SignInProps {};

const SignIn: FC<SignInProps> = (): ReactElement => {
  return (
    <div className={cn('sign-in')}>
      Sign In
    </div>
  );
};

export { SignIn }; 