import { Link } from 'react-router-dom';
import { intro } from '../data/portfolio.json';
export default function AboutMe() {
  return (
    <div className="about-me-text-div">
      <h1>{intro.heading}</h1>
      <p>{intro.text}</p>
      <div className="home-links">
        <Link to="/projects">
          Explore projects <span aria-hidden="true">↗</span>
        </Link>
        <Link to="/gallery">
          View art <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
