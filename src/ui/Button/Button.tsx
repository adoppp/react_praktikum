import { type ButtonHTMLAttributes, type FC } from 'react';
import classNames from 'classnames/bind';
// import styles from '@/ui/Button/Button.module.scss';

// const cn = classNames.bind(styles);

interface Button extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<Button> = ({ children, type = 'button', onClick, isDisabled, className }) => {
  return (
    <button
      // className={cn('button', className, { 'disabled': isDisabled })}
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };