import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// heros
import Default from "./Default";
import Speed from "./Speed";
import Productivity from "./Productivity";

export default function Hero() {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <div id="home" className="hero-slider">
      <Default />
      <Speed />
      <Productivity />
    </div>
  );
}
