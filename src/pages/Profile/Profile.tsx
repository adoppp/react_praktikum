import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cn = classNames.bind(styles);

interface ProfileProps {};

const Profile: FC<ProfileProps> = (): ReactElement => {
  return (
    <div className={cn('classes')}>
      Profile
    </div>
  );
};

export default Profile; 