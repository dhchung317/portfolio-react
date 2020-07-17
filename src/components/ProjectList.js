import React from 'react'
import ProjectTile from './ProjectTile'
import { play, exit } from '../timelines'
import { TransitionGroup, Transition } from "react-transition-group"


/**
 * 
 * TODO: add tranisition to exapnd poject tile image to display more info and brief description/ gif? etc.
 */
export default function ProjectList({ projects }) {
    return (
        <TransitionGroup>
            <Transition
                appear={true}
                onEnter={(node, appears) => play('/projects', node, appears)}
                onExit={(node, appears) => exit(node, appears)}
                timeout={{ enter: 750, exit: 0 }}
            >
                <section className="project-list">
                    <div className="project-list-content">
                        {
                            projects.map((item) => {
                                return <ProjectTile className="pTile" key={item.id} tile={item} />
                            })
                        }
                    </div>
                </section>
            </Transition>
        </TransitionGroup>
    )
}