import { useState } from 'react';
import ProjectTile from './ProjectTile';
export default function ProjectList({ projects }) {
  const [expandedId, setExpandedId] = useState(null);
  return (
    <section className="project-list" aria-label="Projects">
      <div className="project-list-content">
        {projects.map((project) => (
          <ProjectTile
            key={project.id}
            tile={project}
            expanded={expandedId === project.id}
            onToggle={() =>
              setExpandedId((current) =>
                current === project.id ? null : project.id,
              )
            }
          />
        ))}
      </div>
    </section>
  );
}
