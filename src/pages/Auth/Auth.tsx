import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Auth.module.scss';

const cn = classNames.bind(styles);

interface AuthProps {};

const Auth: FC<AuthProps> = (): ReactElement => {
  return (
    <div className={cn('auth')}>
      Auth
      <Link to='/home'>Home</Link>
    </div>
  );
};

export { Auth }; 