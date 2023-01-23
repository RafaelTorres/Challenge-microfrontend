import { FC } from 'react';
import styles from './styles.module.css';

export interface CounterButtonProps {
  onClick: () => void;
  label?: string;
}

const CounterButton: FC<CounterButtonProps> = ({ onClick, label = 'Add to Cart' }) => (
  <button onClick={onClick} type="button" className={styles.button}>
    {label}
  </button>
);

export default CounterButton;
