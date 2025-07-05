import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { IconPlus } from '@/assets/svg';
import styles from './Dashboard.module.scss';

const cn = classNames.bind(styles);

interface DashboardProps { };

const Dashboard: FC<DashboardProps> = (): ReactElement => {
  return (
    <div className={cn('classes')}>
      Dashboard
      {/* <img src='/src/assets/svg/icon-plus.svg'></img> */}
      <div className={cn('parent')}>
        {IconPlus}
      </div>
    </div>
  );
};

export default Dashboard; 