function FileStructure() {
  return (
    <section className="sgSection">
      <h2 className="sgH2">File Structure</h2>
      <ul className="sgList">
        <li>
          <code className="sgCode">manifest.json</code> — WebExtension manifest (v3).
        </li>
        <li>
          <code className="sgCode">newtab.html</code>, <code className="sgCode">newtab.js</code> — New Tab UI and logic.
        </li>
        <li>
          <code className="sgCode">popup.html</code>, <code className="sgCode">popup.js</code> — Toolbar popup UI and logic.
        </li>
        <li>
          <code className="sgCode">style.css</code> — Shared styles.
        </li>
        <li>
          <code className="sgCode">icon.png</code>, <code className="sgCode">github-brands-solid-full.svg</code> — Icons.
        </li>
      </ul>
    </section>
  );
}

export default FileStructure;

