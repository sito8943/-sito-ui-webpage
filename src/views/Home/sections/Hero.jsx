// heros
import Default from "./Default";
import Speed from "./Speed";
import Productivity from "./Productivity";

// styles
import "./styles.css";

export default function Hero() {
  return (
    <div id="home" className={`hero-slider`}>
      <Default />
      <Speed />
      <Productivity />
    </div>
  );
}
