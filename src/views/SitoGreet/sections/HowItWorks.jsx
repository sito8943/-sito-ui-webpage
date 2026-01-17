function HowItWorks() {
  return (
    <section className="sgSection">
      <h2 className="sgH2">How It Works</h2>
      <ul className="sgList">
        <li>
          <code className="sgCode">manifest.json</code> (MV3) overrides the New Tab page to <code className="sgCode">newtab.html</code> and defines a toolbar popup (<code className="sgCode">popup.html</code>).
        </li>
        <li>
          <code className="sgCode">newtab.js</code> renders the greeting and a ticking clock, reading values from <code className="sgCode">browser.storage.local</code>.
        </li>
        <li>Styling is handled in <code className="sgCode">style.css</code> and shared by both pages.</li>
      </ul>
    </section>
  );
}

export default HowItWorks;

