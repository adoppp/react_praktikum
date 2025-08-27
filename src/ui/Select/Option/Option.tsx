import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from '@/ui/Select/Option/Option.module.scss';

const cn = classNames.bind(styles);

interface OptionProps {
  label: string;
  value: string;
  id: number;
  isActive: boolean;
  handleId: (id: number) => void;
  onClick: (value: string) => void;
  setIsDropdownActive: (value: boolean) => void;
  setSearchValue: (value: string | null) => void;
}

const Option: FC<OptionProps> = ({ label, value, id, isActive, handleId, onClick, setIsDropdownActive, setSearchValue }): ReactElement => {
  const handleOnClick = () => {
    handleId(id)
    onClick(label);
    setIsDropdownActive(false);
    setSearchValue(label);
  };

  return (
    <li className={cn('option', { 'is-active': isActive })} onClick={handleOnClick}>
      {label}
    </li>
  );
};

export { Option };