function Features() {
  return (
    <section className="sgSection">
      <h2 className="sgH2">Features</h2>
      <ul className="sgList">
        <li>New Tab override with a clean greeting view.</li>
        <li>Live clock formatted using your browser locale.</li>
        <li>
          Customizable user name and profile name (persisted via <code className="sgCode">storage</code>).
        </li>
        <li>Toolbar popup to quickly update values.</li>
        <li>In‑page settings menu and dialog to change the username.</li>
        <li>Background customization: choose default gradient, a solid color, or upload an image.</li>
        <li>Minimal permissions (only <code className="sgCode">storage</code>).</li>
      </ul>
    </section>
  );
}

export default Features;

