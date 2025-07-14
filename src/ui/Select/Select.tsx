import { useRef, useState } from 'react';
import type { FC, ReactElement, RefObject } from 'react';
import classNames from 'classnames/bind';
import styles from '@/ui/Select/Select.module.scss';
import { Option } from '@/ui/Select/Option';
import { useOnClickOutside } from '@/utils/useOnClickOutside';

const cn = classNames.bind(styles);

interface SelectProps {
  value: string;
  options: Option[];
  // onChange: (value: string) => void;
  selectUser: (value: string) => void;
}

interface Option {
  id: number;
  label: string;
  value: string;
}

const Select: FC<SelectProps> = ({ value, options, selectUser }): ReactElement => {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const dropdownRef = useRef(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDropdownActive(true);
    setSearchValue(event.target.value);
  };

  const optionsElements = options.map((item: Option) => {
    return (
      <Option
        key={item.id}
        label={item.label}
        value={item.value}
        onClick={selectUser}
        setIsDropdownActive={setIsDropdownActive}
        setSearchValue={setSearchValue}
      />
    );
  });

  useOnClickOutside(dropdownRef, setIsDropdownActive(false));

  return (
    <div className={cn('select')}>
      <input
        className={cn('select__input')}
        type="text"
        value={searchValue ?? value}
        onChange={handleSearch}
      />
      <ul className={cn('select__dropdown', { 'is-active': isDropdownActive })} ref={dropdownRef}>
        {optionsElements}
      </ul>
    </div>
  );
};

export { Select };