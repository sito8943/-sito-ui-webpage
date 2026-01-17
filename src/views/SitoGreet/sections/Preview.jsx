import { useEffect, useMemo, useState } from 'react';
import { describeWeather, loadWeather } from '../../SitoGreet/utils';
import '../../Home/sections/sito-greet.css';
import './preview.css';

function Preview() {
  const [weather, setWeather] = useState({ tempC: 22, code: 0 });
  const [now, setNow] = useState(() => new Date());

  const coords = useMemo(() => ({ lat: 40.4168, lon: -3.7038 }), []);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        const next = await loadWeather({ lat: coords.lat, lon: coords.lon });
        if (!cancelled) setWeather(next);
      } catch (_) {
        // leave defaults on error
      }
    }
    run();
    return () => { cancelled = true; };
  }, [coords.lat, coords.lon]);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const dateTimeFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(navigator.language || 'en-US', {
        weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
        hour: 'numeric', minute: '2-digit'
      }),
    []
  );

  const desc = describeWeather(weather.code);

  return (
    <div className="sgPreview">
      <section className="sitoGreet" aria-label="Sito Greet preview">
        <header className="topInfo" aria-label="date and weather">
          <p className="topText clock">{dateTimeFormatter.format(now)}</p>
          <p className="topText weather" aria-live="polite">
            <span className="wi" aria-hidden>{desc.icon}</span>
            <span className="temp">{weather.tempC}°C</span>
            <span className="sep">—</span>
            <span className="wdesc">{desc.text}</span>
            <span className="sep">·</span>
            <span className="advice">Perfect day to go out.</span>
          </p>
        </header>

        <main className="center" role="main">
          <h1 className="greeting">Good afternoon, Sito!</h1>
          <p className="subtext">Profile: Original</p>
        </main>

        <footer className="footer">
          <a
            className="icon-button"
            href="https://github.com/sito8943/sito-greet"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Sito Greet on GitHub"
          >
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true">
              <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.5C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72z" />
            </svg>
          </a>
          <p className="footerCenter">
            <span>Made by </span>
            <a className="footerLink" href="https://sito8943.com/?utm_source=sito-greet&utm_medium=about_page&utm_campaign=portfolio_link" target="_blank" rel="noreferrer">@sito8943</a>
          </p>
          {/* Right aligned settings icon (visual) */}
          <svg className="settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19.14,12.94a7.43,7.43,0,0,0,.05-.94,7.43,7.43,0,0,0-.05-.94l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.6-.22l-2.49,1a7.39,7.39,0,0,0-1.63-.95l-.38-2.65A.5.5,0,0,0,12.81,2H9.19a.5.5,0,0,0-.49.41l-.38,2.65a7.39,7.39,0,0,0-1.63.95l-2.49-1a.5.5,0,0,0-.6.22l-2,3.46a.5.5,0,0,0,.12.64L3.81,11.06a7.43,7.43,0,0,0-.05.94,7.43,7.43,0,0,0,.05.94L1.7,14.59a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.6.22l2.49-1a7.39,7.39,0,0,0,1.63.95l.38,2.65a.5.5,0,0,0,.49.41h3.62a.5.5,0,0,0,.49-.41l.38-2.65a7.39,7.39,0,0,0,1.63-.95l2.49,1a.5.5,0,0,0,.6-.22l2-3.46a.5.5,0,0,0-.12-.64ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </footer>
      </section>
    </div>
  );
}

export default Preview;

