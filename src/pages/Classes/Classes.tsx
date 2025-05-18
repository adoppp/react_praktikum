import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Classes.module.scss';

const cn = classNames.bind(styles);

interface ClassesProps {};

const Classes: FC<ClassesProps> = (): ReactElement => {
  return (
    <div className={cn('classes')}>
      Classes
      <Link to='/auth'>Auth</Link>
      <Link to='/classes'>Classes</Link>
    </div>
  );
};

export { Classes }; 