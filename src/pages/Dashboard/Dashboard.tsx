import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

const cn = classNames.bind(styles);

interface DashboardProps {};

const Dashboard: FC<DashboardProps> = (): ReactElement => {
  return (
    <div className={cn('classes')}>
      Dashboard
    </div>
  );
};

export default Dashboard; 