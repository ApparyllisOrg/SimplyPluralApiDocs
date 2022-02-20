import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'An app for systems',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Simply Plural is an app desgined for systems.
        Keep up to date with who fronts when, store data about yourselves in your member profiles and keep notes per member.
      </>
    ),
  },
  {
    title: 'Privacy First',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
     Our app is designed with privacy and security first, we use Google Firebase to store our data so your data is securely uploaded to the cloud. We have strict security rules that disallow any access to any data unless you specify that that member can read that data.
      </>
    ),
  },
  {
    title: 'Friends and Family',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        You can share who is currently fronting with family and friends, optionally with notifications. As well as sharing your members with friends and family.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
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
