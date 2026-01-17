function Packaging() {
  return (
    <section className="sgSection">
      <h2 className="sgH2">Packaging / Signing (Optional)</h2>
      <ul className="sgList">
        <li>
          Build an unsigned package: <code className="sgCode">web-ext build</code> (artifacts go to <code className="sgCode">web-ext-artifacts/</code>).
        </li>
        <li>
          To publish on AMO, sign with your AMO credentials: <code className="sgCode">web-ext sign --api-key &lt;AMO_JWT_ISSUER&gt; --api-secret &lt;AMO_JWT_SECRET&gt;</code>
        </li>
      </ul>
    </section>
  );
}

export default Packaging;

