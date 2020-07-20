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

        <section className="project-list">
            <div className="project-list-content">
                <TransitionGroup>
                    {
                        projects.map((item, index) => {
                            return (
                                <Transition
                                    key={index}
                                    appear={true}
                                    onEnter={(node, appears) => play('/projects', node, appears)}
                                    // onExit={(node, appears) => exit(node, appears)}
                                    timeout={ 750 }
                                    in={true}
                                >
                                    <ProjectTile className="pTile" key={item.id} tile={item} />
                                </Transition>
                            )

                        })
                    }
                </TransitionGroup>
            </div>
        </section>

    )
}