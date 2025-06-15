import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

const cn = classNames.bind(styles);

interface DashboardProps {};

const Dashboard: FC<DashboardProps> = (): ReactElement => {
  return (
    <div className={cn('classes')}>
      Dashboard
      <Link to='/auth'>Auth</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/profile'>Profile</Link>
    </div>
  );
};

export { Dashboard }; 