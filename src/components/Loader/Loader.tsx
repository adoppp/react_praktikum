import type { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Loader.module.scss';

const cn = classNames.bind(styles);


const Loader = (): ReactElement => {
  return (
    <div className={cn('loader')}>
      Loading ...
    </div>
  );
};

export { Loader }; 