import { ReactNode } from 'react';
import styles from './styles/Button.module.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}