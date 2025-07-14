import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from '@/ui/Select/Option/Option.module.scss';

const cn = classNames.bind(styles);

interface OptionProps {
  label: string;
  value: string;
  onClick: (value: string) => void;
  setIsDropdownActive: (value: boolean) => void;
  setSearchValue: (value: string | null) => void;
}

const Option: FC<OptionProps> = ({ label, value, onClick, setIsDropdownActive, setSearchValue }): ReactElement => {
  const handleOnClick = () => {
    console.log('Option clicked - value: ', value);
    onClick(value);
    setIsDropdownActive(false);
    setSearchValue(null);
  };

  return (
    <li className={cn('option')} onClick={handleOnClick}>
      {label}
    </li>
  );
};

export { Option };