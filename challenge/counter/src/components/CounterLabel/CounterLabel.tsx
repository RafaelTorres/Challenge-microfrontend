import { FC } from 'react';

import styles from './styles.module.css';

export interface CounterLabelProps {
  count?: number;
}

const CounterLabel: FC<CounterLabelProps> = ({ count = 0 }) => <p className={styles['counter-label']}>{count}</p>;

export default CounterLabel;
