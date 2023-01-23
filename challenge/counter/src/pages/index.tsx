import Head from 'next/head';

import CounterLabel from '@components/CounterLabel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Remote components</title>
      </Head>
      <main>
        <h2>Counter MF</h2>
        <CounterLabel />
      </main>
    </>
  );
}
