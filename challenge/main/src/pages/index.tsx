/* eslint-disable import/no-unresolved */
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';

import Button from '@components/CounterButton';

import styles from '@styles/Home.module.css';

/* istanbul ignore next */
const CounterLabel = dynamic(() => import('counter/counterLabel'), { ssr: false });

export default function Home() {
  const [count, setCount] = useState(0);

  const handleAddItem = () => {
    setCount((current) => current + 1);
  };

  const handleRemoveItem = () => {
    setCount((current) => current - 1);
  };

  return (
    <>
      <Head>
        <title>Home - Challenge</title>
        <meta name="description" content="Root container to make Challenge for Acid Labs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Counter - Module Federation</h2>
        {/* Ignore typing to MF props
        // @ts-ignore */}
        <CounterLabel count={count} />
        <div className={styles['button-container']}>
          <Button onClick={handleAddItem} label="+" />
          <Button onClick={handleRemoveItem} label="-" />
        </div>
      </main>
    </>
  );
}
