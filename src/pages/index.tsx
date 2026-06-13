import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Helmet } from 'react-helmet-async';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles.indexPage}>
      <Layout
        title={siteConfig.title}
        description={siteConfig.tagline}>
        <Helmet>
          <title>DeRand Labs</title>
          <meta name="description" content={siteConfig.tagline} />
        </Helmet>
        <main className={styles.hero}>
          <div className={styles.backgroundGlow}></div>
          <div className={styles.backgroundGrid}></div>

          <section className={styles.center}>
            <h1 className={styles.title}>DeRand</h1>
            <p className={styles.subtitle}>
              Trustless Verifiable Randomness Platform
            </p>
          </section>
        </main>
      </Layout>
    </div>
  );
}
