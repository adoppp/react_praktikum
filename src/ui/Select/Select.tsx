import { useMemo, useRef, useState } from 'react';
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

type CurrentOptions2 = { userName: string, dashboards: OptionDashboard[] };

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

  const renderOptions = useMemo(() => {
    if (!searchValue || searchValue.trim() === '') {
      return <li>Start typing to search ...</li>;
    }

    if (filteredOptions.length === 0) {
      return <li>No results found</li>;
    }

    const currentOptions2: CurrentOptions2[] = [];

    options.reduce((acc, current) => {
      const isExists = acc.some(user => user.userName === current.userName);
      
      if (!isExists) {
        acc.push({ userName: current.userName, dashboards: [...current.dashboards]});
      } else {
        acc.find(user => user.userName === current.userName)!.dashboards.push(...current.dashboards);
      }
      return acc;
    }, currentOptions2);

    const result = currentOptions2.map((option: CurrentOptions2) => {
      const optionsElements = option.dashboards.map((element: OptionDashboard) => {
        if (!filteredOptions.includes(element)) return <></>;

        return (
          <Option
            key={element.id}
            label={element.title}
            value={element.title}
            onClick={selectOption}
            setIsDropdownActive={setIsDropdownActive}
            setSearchValue={setSearchValue}
          />
        )
      })
      return (
          <li>
            <p style={{ backgroundColor: 'red' }}>{option.userName}</p>
            <ul>
              {optionsElements}
            </ul>
          </li>
      )
    });

    return result;
  }, [searchValue, filteredOptions, options]);

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
        {renderOptions}
      </ul>
    </div>
  );
};

export { Select };