import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const quickLinks = [
  {
    title: 'Getting started',
    description: 'Spin up the workspace and ship your first app with the guided tutorial.',
    to: '/docs/tutorials/getting-started',
  },
  {
    title: 'First app',
    description: 'Walk through the full loop: init, build, watch, test, publish.',
    to: '/docs/tutorials/first-app',
  },
  {
    title: 'CLI workflows',
    description: 'Reference for build, watch, test, and publish flows in one place.',
    to: '/docs/reference/workflows',
  },
];

const sections = [
  {
    title: 'How-to guides',
    description: 'Task-focused recipes for day-to-day work: init projects, run the frontend watcher, validate HMR, publish artifacts, and more.',
    to: '/docs/how-to/',
  },
  {
    title: 'Reference',
    description: 'CLI commands, templates, and manifests so you can look up exact options quickly.',
    to: '/docs/reference/',
  },
  {
    title: 'Explanations',
    description: 'What the engine, pipelines, services, and dev service do under the hood.',
    to: '/docs/explanations/solution',
  },
  {
    title: 'Product plans',
    description: 'Roadmaps and upcoming work across backend design, generators, and infrastructure.',
    to: '/docs/product/plans',
  },
];

export default function Home(): JSX.Element {
  const logoUrl = useBaseUrl('/img/webstir.svg');

  return (
    <Layout
      title="Webstir Portal"
      description="Documentation for the Webstir full-stack developer experience"
    >
      <header className={clsx('heroBanner')}>
        <div className="container">
          <div className="heroLogo">
            <img src={logoUrl} alt="Webstir" />
          </div>
          <div className="pill">Full-stack, agent-first workflow</div>
          <h1>Build with Webstir</h1>
          <p>
            Opinionated architecture, pluggable providers, and a single CLI that keeps build,
            watch, test, and publish flows consistent. Start fast, stay fast.
          </p>
          <div className="heroButtons">
            <Link className="button button--secondary button--lg" to="/docs/tutorials/getting-started">
              Start the tutorial
            </Link>
            <Link className="button button--primary button--lg" to="/docs/reference/cli">
              View CLI reference
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <h2>Jump in</h2>
            <div className="cards">
              {quickLinks.map((item) => (
                <div key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="linkRow">
                    <Link className="button button--link button--sm" to={item.to}>
                      Open
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Everything you need</h2>
            <div className="cards">
              {sections.map((item) => (
                <div key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="linkRow">
                    <Link className="button button--link button--sm" to={item.to}>
                      Browse
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
