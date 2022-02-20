import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function About() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`About ${siteConfig.title}`}
      description="About the app Simply Plural and its creators">
     <main>
        <div className="container ">
            <div className="row aboutCreator">
               This needs work
            </div>
        </div>
     </main>
    </Layout>
  );
}

export default About;
