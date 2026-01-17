import './sito-greet-page.css';
import Header from './sections/Header';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import FileStructure from './sections/FileStructure';
import Install from './sections/Install';
import Usage from './sections/Usage';
import Development from './sections/Development';
import Packaging from './sections/Packaging';
import Requirements from './sections/Requirements';
import Permissions from './sections/Permissions';
import Notes from './sections/Notes';
import Privacy from './sections/Privacy';
import Footer from './sections/Footer';

function SitoGreetInfo() {
  return (
    <div className="px-10 sm:px-5">
      <article className="sgPage" aria-label="Sito Greet extension information">
        <Header />
        <Features />
        <HowItWorks />
        <FileStructure />
        <Install />
        <Usage />
        <Development />
        <Packaging />
        <Requirements />
        <Permissions />
        <Notes />
        <Privacy />
        <Footer />
      </article>
    </div>
  );
}

export default SitoGreetInfo;
