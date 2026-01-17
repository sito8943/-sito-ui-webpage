function Notes() {
  return (
    <section className="sgSection">
      <h2 className="sgH2">Notes</h2>
      <ul className="sgList">
        <li>
          The clock uses <code className="sgCode">navigator.language</code> when available, defaulting to <code className="sgCode">es-ES</code> for formatting.
        </li>
        <li>
          If you customize links or icons in the footer of <code className="sgCode">newtab.html</code>, update the <code className="sgCode">href</code> as needed.
        </li>
      </ul>
    </section>
  );
}

export default Notes;

