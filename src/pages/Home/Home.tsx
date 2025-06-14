import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cn = classNames.bind(styles);

interface HomeProps {};

const Home: FC<HomeProps> = (): ReactElement => {
  return (
    <div className={cn('classes')}>
      Home
      <Link to='/auth'>Auth</Link>
      <Link to='/home'>Home</Link>
    </div>
  );
};

export { Home }; 