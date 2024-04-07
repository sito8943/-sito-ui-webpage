import { useMemo } from "react";
import { useLocation } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// heros
import Default from "./Default";
import Speed from "./Speed";
import Productivity from "./Productivity";

// styles
import "./styles.css";

export default function Hero() {
  const location = useLocation();

  const translation = useMemo(() => {
    const { hash } = location;
    switch (hash) {
      case "#speed":
        return window.innerWidth;
      case "#productivity":
        return window.innerWidth * 2;
      default: // #
        return 0;
    }
  }, [location]);

  return (
    <div
      id="home"
      className={`hero-slider ${css({
        transition: "transform 1000ms ease-in-out",
        transform: `translateX(-${translation}px)`,
      })}`}
    >
      <Default />
      {/* <Speed />
      <Productivity /> */}
    </div>
  );
}
