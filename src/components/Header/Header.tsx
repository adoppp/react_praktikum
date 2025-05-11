import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

interface HeaderProps {
  isAdmin?: boolean;
};

const Header: FC<HeaderProps> = ({ isAdmin = false }): ReactElement => {
  console.log(isAdmin);

  return (
    <div className={cn('header')}>
      HEADER
    </div>
  );
};

export { Header }; 