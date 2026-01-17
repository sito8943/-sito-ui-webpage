import Preview from "./Preview";

function Header() {
  return (
    <header className="sgHeader">
      <h1 className="sgTitle">Greeting New Tab (Firefox Extension)</h1>
      <p className="sgTag">
        A minimal Firefox extension that replaces the default new tab page with
        a friendly greeting and a live, locale‑aware clock.
      </p>
      <Preview />
    </header>
  );
}

export default Header;
