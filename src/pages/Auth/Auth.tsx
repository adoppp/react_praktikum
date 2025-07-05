import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Auth.module.scss';

const cn = classNames.bind(styles);

interface AuthProps {};

const Auth: FC<AuthProps> = (): ReactElement => {
  return (
    <div className={cn('auth')}>
      Auth
    </div>
  );
};

export default Auth; 