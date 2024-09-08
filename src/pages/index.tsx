import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroTextAndImage}>
        <div className={styles.heroTextAndButtons}>
          <span className={styles.heroText}>
            Build <b>iOS/Swift</b> apps in <b>Visual Studio Code</b>
          </span>
          <div className={styles.heroButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Get Started
            </Link>
          </div>
        </div>
        <img className={styles.heroImage} src="/img/logo.png" alt="Hero" />
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <h2>✅ Autocomplete</h2>
            <p>Setup autocomplete using xcode-build-server</p>
          </div>
          <div className="col col--4">
            <h2>🛠️ Build & Run</h2>
            <p>Build and run application using xcodebuild</p>
          </div>
          <div className="col col--4">
            <h2>💅🏼 Format</h2>
            <p>
              Format files using swift-format or other formatter of your choice
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <h2>📱 Simulator</h2>
            <p>Manage iOS simulators</p>
          </div>
          <div className="col col--4">
            <h2>📱 Devices</h2>
            <p>Run iOS applications on iPhone or iPad</p>
          </div>
          <div className="col col--4">
            <h2>🛠️ Tools</h2>
            <p>Manage essential iOS development tools using Homebrew</p>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <h2>🪲 Debug</h2>
            <p>Debug iOS applications using CodeLLDB</p>
          </div>
          <div className="col col--4">
            <h2>🔎 Tests</h2>
            <p>Run tests on simulators and devices</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={"Home"}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HeroBanner />
        <Features />
      </main>
    </Layout>
  );
}
