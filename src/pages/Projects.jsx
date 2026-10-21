import ProjectList from '../components/ProjectList';
import { projects } from '../data/portfolio.json';
export default function Projects() {
  return (
    <div className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Things I’ve built</p>
        <h1>Projects</h1>
        <p>
          Games, experiments, and ideas brought to life. Open a project to
          explore.
        </p>
      </header>
      <ProjectList projects={projects} />
    </div>
  );
}
