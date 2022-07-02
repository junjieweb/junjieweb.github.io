import React from 'react';
// import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LanguagesAndTools from "@site/src/components/LanguagesAndTools";
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        /*<header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img alt="Docusaurus 与 Keytar" className="heroLogo_jM6J" src="/img/docusaurus_keytar.svg" width="200"
                     height="200"/>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/website">
                        Embraces Open Source 💻️
                    </Link>
                </div>
            </div>
        </header>*/
        <div className={styles.hero} data-theme="dark">
            <div className={styles.heroInner}>
                <h1 className={styles.heroProjectTagline}>
                    <img
                        alt={translate({message: 'Docusaurus with Keytar'})}
                        className={styles.heroLogo}
                        src={useBaseUrl('/img/docusaurus_keytar.svg')}
                        width="200"
                        height="200"
                    />
                    <span
                        className={styles.heroTitleTextHtml}
                        dangerouslySetInnerHTML={{
                            __html: translate({
                                id: 'homepage.hero.title',
                                message:
                                    '<b>Front-end Web Developer </b> Junjie <br/>   <b>Embraces Open Source</b>',
                                description:
                                    'Home page hero title, can contain simple html tags',
                            }),
                        }}
                    />
                </h1>
                <div className={styles.indexCtas}>
                    <Link className="button button--primary" to="/docs/MDN">
                        <Translate>前端笔记</Translate>
                    </Link>
                    <Link className="button button--info" to="/website">
                        <Translate>网站导航</Translate>
                    </Link>
                    <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=junjieweb&amp;repo=junjieweb.github.io&amp;type=star&amp;size=large"
                width={160}
                height={30}
                title="GitHub Stars"
            />
          </span>
                </div>
            </div>
        </div>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                {/*<HomepageFeatures/>*/}
                <LanguagesAndTools></LanguagesAndTools>
            </main>
        </Layout>
    );
}
