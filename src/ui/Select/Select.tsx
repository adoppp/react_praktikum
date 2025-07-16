import { useRef, useState } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from '@/ui/Select/Select.module.scss';
import { Option } from '@/ui/Select/Option';
import { useOnClickOutside } from '@/utils/useOnClickOutside';

const cn = classNames.bind(styles);

interface SelectProps {
  value: string;
  options: Option[];
  placeholder?: string;
  selectUser: (value: string) => void;
};

interface Option {
  id: number;
  label: string;
  value: string;
};

const Select: FC<SelectProps> = ({ value, placeholder, options, selectUser }): ReactElement => {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setFilteredOptions(() => options.filter((item) => item.label.toLowerCase().includes(event.target.value.toLowerCase())))
  };

  const handleOnFocus = () => {
    setIsDropdownActive(true);
  };

  const renderOptions = () => {
    let currentOptions = [];

    if (filteredOptions.length) {
      currentOptions = [...filteredOptions];
    } else {
      currentOptions = [...options];
    }

    const resultElements = currentOptions.map((item: Option) => {
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

    return resultElements;
  };

  useOnClickOutside(dropdownRef, () => setIsDropdownActive(false));

  return (
    <div className={cn('select')} ref={dropdownRef}>
      <input
        className={cn('select__input')}
        type="text"
        value={searchValue ?? value}
        placeholder={placeholder}
        onChange={handleSearch}
        onFocus={handleOnFocus}
      />
      <ul className={cn('select__dropdown', { 'is-active': isDropdownActive })}>
        {renderOptions()}
      </ul>
    </div>
  );
};

export { Select };