import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cn = classNames.bind(styles);

interface CartProps {};

const Cart: FC<CartProps> = (): ReactElement => {
  return (
    <div className={cn('classes')}>
      Home
      <Link to='/auth'>Auth</Link>
      <Link to='/home'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/profile'>Profile</Link>
    </div>
  );
};

export { Cart }; 