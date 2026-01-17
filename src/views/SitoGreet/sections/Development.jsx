function Development() {
  return (
    <section className="sgSection">
      <h2 className="sgH2">Development</h2>
      <ul className="sgList">
        <li>
          Recommended: use <code className="sgCode">web-ext</code> for a fast dev loop (auto‑reload).
        </li>
        <li>
          Install: <code className="sgCode">npm install -g web-ext</code>
        </li>
        <li>
          Run in Firefox: <code className="sgCode">web-ext run</code>
        </li>
        <li>
          Build a distributable: <code className="sgCode">web-ext build</code>
        </li>
      </ul>
      <p className="sgP sgNote">
        Edits to <code className="sgCode">newtab.*</code> or <code className="sgCode">style.css</code> are picked up on reload. Values are stored with <code className="sgCode">browser.storage.local</code> and persist between sessions.
      </p>
    </section>
  );
}

export default Development;

