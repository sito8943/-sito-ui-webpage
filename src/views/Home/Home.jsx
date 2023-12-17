// sections
import Hero from "./sections/Hero/Hero";
import Logo from "./sections/Logo/Logo";
import ClearSpace from "./sections/ClearSpace/ClearSpace";
import Concepts from "./sections/Concepts/Concepts";
import Colors from "./sections/Colors/Colors";
import Typography from "./sections/Typography/Typography";

function Home() {
  return (
    <main>
      <Hero />
      <Logo />
      <ClearSpace />
      <Concepts />
      <Colors />
      <Typography />
    </main>
  );
}

export default Home;
