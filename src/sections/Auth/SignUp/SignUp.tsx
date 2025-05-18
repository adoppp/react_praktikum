import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';

const cn = classNames.bind(styles);

interface SignUpProps {};

const SignUp: FC<SignUpProps> = (): ReactElement => {
  return (
    <div className={cn('sign-up')}>
      Sign Up
    </div>
  );
};

export { SignUp }; 