function Install() {
  return (
    <section className="sgSection">
      <h2 className="sgH2">Install (Temporary in Firefox)</h2>
      <ol className="sgList">
        <li>
          Open Firefox and navigate to <code className="sgCode">about:debugging#/runtime/this-firefox</code>.
        </li>
        <li>Click “Load Temporary Add‑on…”.</li>
        <li>
          Select this project’s <code className="sgCode">manifest.json</code>.
        </li>
        <li>Open a new tab to see the greeting.</li>
      </ol>
      <p className="sgP sgNote">
        Note: Temporary add‑ons are unloaded when Firefox restarts. For day‑to‑day development use the steps below; for distribution, see Packaging.
      </p>
    </section>
  );
}

export default Install;

