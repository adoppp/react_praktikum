import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Favorites.module.scss';

const cn = classNames.bind(styles);

interface FavoritesProps {};

const Favorites: FC<FavoritesProps> = (): ReactElement => {
  return (
    <div className={cn('classes')}>
      Home
      <Link to='/auth'>Auth</Link>
      <Link to='/home'>Home</Link>
      <Link to='/shop'>Shop</Link>
    </div>
  );
};

export { Favorites }; 