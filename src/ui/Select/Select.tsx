import type { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from '@/ui/Select/Select.module.scss';

const cn = classNames.bind(styles);

interface SelectProps {
  value: string;
  options: Option[];
  onChange: () => void;
}

interface Option {
  label: string;
  value: string;
}

const Select: FC<SelectProps> = ({ value, options, onChange }): ReactElement => {
  // const options = options.map((item: Option) => {
  //   return (
  //     <li>
  //       {item.label}
  //     </li>
  //   );
  // });

  return (
    <div className={cn('select')}>
      <input 
        className={cn('select__input')}
        type="text"
        value={value}
        onChange={onChange}
      />
      <ul className={cn('select__dropdown')}>
        {/* {options} */}
      </ul>
    </div>
  );
};

export { Select };