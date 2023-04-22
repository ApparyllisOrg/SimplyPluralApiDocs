import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Getting Started',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    url: "/docs/getting-started/intro",
    description: (
      <>
        Get started with using our API
      </>
    ),
  },
  {
    title: 'API Reference',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    url: "/docs/api/simply-plural-api",
    description: (
      <>
        View the API reference
      </>
    ),
  },
];

function Feature({ imageUrl, title, url, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <a href={url} className={clsx('col col--6', styles.feature) + " feature"}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </a>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div class="row justify-center"> <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to="https://play.google.com/store/apps/details?id=com.saltypandastudios.frontime">
              Get the app!
            </Link>
          </div>
            <div class="spacer"></div>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/intro')}>
                Go to docs
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
