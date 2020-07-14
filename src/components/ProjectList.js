import React from 'react'
import ProjectTile from './ProjectTile'

export default function ProjectList({ projects }) {
    return (
        <section className="project-list">
            <div className="project-list-content">
                {
                    projects.map((item) => {
                        return <ProjectTile key={item.id} tile={item} />
                    })
                }
            </div>
        </section>
    )
}