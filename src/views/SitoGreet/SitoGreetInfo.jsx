import './sito-greet-page.css';

function SitoGreetInfo() {
  return (
    <article className="sgPage" aria-label="Sito Greet extension information">
      <header className="sgHeader">
        <h1 className="sgTitle">Sito Greet — New Tab</h1>
        <p className="sgTag">A minimal, friendly new-tab experience.</p>
      </header>

      <section className="sgSection">
        <h2 className="sgH2">Features</h2>
        <ul className="sgList">
          <li>Large greeting with your name and profile line.</li>
          <li>Locale-aware date and time with lightweight weather info.</li>
          <li>Background options: default gradient, solid color or image.</li>
          <li>Small toolbar popup to quickly update values.</li>
          <li>Minimal permissions, no analytics.</li>
        </ul>
      </section>

      <section className="sgSection">
        <h2 className="sgH2">Privacy Policy</h2>
        <p className="sgP">
          Sito Greet does not collect, transmit, or sell personal data. Your
          name, profile label, and optional background preferences are stored
          locally using the browser’s storage APIs and never leave your device.
        </p>
        <p className="sgP">
          Weather data is fetched from a public API to display current
          conditions; requests include only the coordinates needed for the
          forecast and are not associated with any user identifier.
        </p>
        <p className="sgP">
          If you import a background image, it remains stored locally within
          the extension’s storage and is not uploaded to any server.
        </p>
      </section>

      <footer className="sgFooter">
        <a className="sgLink" href="https://github.com/sito8943/sito-firefox-extensions" target="_blank" rel="noreferrer noopener">View source on GitHub</a>
      </footer>
    </article>
  );
}

export default SitoGreetInfo;

