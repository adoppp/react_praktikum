import { useRef, useState } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from '@/ui/Select/Select.module.scss';
import { Option } from '@/ui/Select/Option';
import { useOnClickOutside } from '@/utils/useOnClickOutside';
import { IconArrow } from '@/assets/svg';
// import type { OptionDashboard } from '@/pages/Dashboard/Dashboard';
import type { SelectOptions, SelectOption, OptionDashboard } from '@/pages/Dashboard/Dashboard';

const cn = classNames.bind(styles);

interface SelectProps {
  value: string;
  placeholder?: string;
  options: SelectOptions;
  selectOption: (value: string) => void;
};

interface Option {
  userId: number;
  userName: string;
  userValue: string;
  // dashboards: OptionDashboard[];
  value: string;
};

const Select: FC<SelectProps> = ({ value, placeholder, options, selectOption }): ReactElement => {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [filteredOptions, setFilteredOptions] = useState<OptionDashboard[]>([]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);

    const mappedOptions = options.map((option: SelectOption) => option.dashboards).flat();

    const result = mappedOptions.filter((dashboard: OptionDashboard) => dashboard.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));

    setFilteredOptions(result);
  };

  const handleOnFocus = () => {
    setIsDropdownActive(true);
  };

  const renderOptions = () => {
    let currentOptions: OptionDashboard[] | [{ label: string }] = [];

    // if (filteredOptions.length) {
    //   currentOptions = [...filteredOptions];
    // } else {
    //   currentOptions = [...options];
    // }

    if (filteredOptions.length) {
      currentOptions = [...filteredOptions];
    } else {
      currentOptions = [{ label: 'Start typing to search ...' }];
    }

    const resultElements = currentOptions.map((item: OptionDashboard | {label: string}) => {
      if ('label' in item) {
        return (
          <li>{item.label}</li>
        );
      } else {
        const user = options.filter((user: SelectOption) => user.userId === item.parentId)[0]?.userName;

        return (
          <li>
            <p style={{ backgroundColor: 'red' }}>{user}</p>
            <ul>
              <Option
                key={item.parentId}
                label={item.title}
                value={item.title}
                onClick={selectOption}
                setIsDropdownActive={setIsDropdownActive}
                setSearchValue={setSearchValue}
              />
            </ul>
          </li>
        );
      }
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
      <div className={cn('select__icon-box', { 'is-active': isDropdownActive })}>{IconArrow}</div>
      <ul className={cn('select__dropdown', { 'is-active': isDropdownActive })}>
        {renderOptions()}
      </ul>
    </div>
  );
};

export { Select };