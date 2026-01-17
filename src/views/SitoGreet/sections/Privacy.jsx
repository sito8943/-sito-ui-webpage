function Privacy() {
  return (
    <section className="sgSection" id="privacy">
      <h2 className="sgH2">Privacy Policy</h2>
      <p className="sgP">
        Sito Greet stores your preferences locally in your browser using
        <code className="sgCode"> browser.storage.local</code>. The extension does not
        collect analytics, track you, or send your data to external servers.
      </p>
      <ul className="sgList" style={{ marginTop: 12 }}>
        <li>
          Data stored locally: your display name (<code className="sgCode">username</code>),
          a profile label (<code className="sgCode">profile_name</code>), and background
          settings (default/solid color/uploaded image) plus minor in‑page preferences.
        </li>
        <li>
          Storage scope: values are saved only on your device via
          <code className="sgCode"> browser.storage.local</code> and are not transmitted.
        </li>
        <li>
          Permissions: the extension declares only the
          <code className="sgCode"> storage</code> permission (per README). No telemetry.
        </li>
        <li>
          Links: footer links (e.g., GitHub) open in your browser when clicked; no
          automated requests are performed with your personal data.
        </li>
        <li>
          Removal: uninstalling the extension or clearing extension data will remove
          the stored values.
        </li>
      </ul>
      <p className="sgP sgNote" style={{ marginTop: 12 }}>
        Questions or concerns? Open an issue in the GitHub repository.
      </p>
    </section>
  );
}

export default Privacy;

