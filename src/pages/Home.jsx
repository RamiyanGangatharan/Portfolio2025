import { Link } from 'react-router-dom';
import '../styles.css';

function Home() {
  return (
    <main>
      <div className="home-container fade-in">
        <h6 className="intro-greeting">Greetings Visitor, My Name Is</h6>
        <h1 className="intro-name mb-4">RAMIYAN GANGATHARAN</h1>
        <i><h4 className="intro-title">Software Developer</h4></i>
      </div>
    </main>
  );
}

export default Home;
