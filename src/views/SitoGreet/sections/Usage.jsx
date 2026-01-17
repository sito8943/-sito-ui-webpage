function Usage() {
  return (
    <section className="sgSection">
      <h2 className="sgH2">Usage</h2>
      <ul className="sgList">
        <li>Open a new tab to view the greeting and clock.</li>
        <li>
          Click the toolbar icon to open the popup and set:
          <ul>
            <li>Name (<code className="sgCode">username</code>)</li>
            <li>Profile name (<code className="sgCode">profile_name</code>)</li>
          </ul>
        </li>
        <li>
          Alternatively, on the New Tab page, click the settings button to open the in‑page menu and change the username via the dialog.
        </li>
        <li>
          Background: select Default, Solid color (with color picker), or Image (upload stored locally in extension storage).
        </li>
      </ul>
    </section>
  );
}

export default Usage;

