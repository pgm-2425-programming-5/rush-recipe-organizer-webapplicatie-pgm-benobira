import { ReactNode } from 'react';
import styles from './styles/Button.module.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  color?: 'blue' | 'red';
};

export default function Button({ children, onClick, type = 'button', color = 'blue' }: ButtonProps) {
  const colorClasses = color === 'red' ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700';

  return (
    <button
      type={type}
      className={`${styles.button} ${colorClasses} text-white py-2 px-4 rounded-lg shadow-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}