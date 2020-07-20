import React from 'react'
import SkillTile from './SkillTile'
import { play, exit } from '../timelines'
import { TransitionGroup, Transition } from 'react-transition-group'

export default function SkillList({ skills }) {
    return (
        <TransitionGroup>
            <Transition
                appear={true}
                onEnter={(node, appears) => play('/skills', node, appears)}
                timeout={{ enter: 750, exit: 250 }}
            >
                <section className="skill-list">
                    <div className="skill-list-content">
                        {
                            skills.map((item) => {
                                return <SkillTile className="sTile" key={item.id} tile={item} />
                            })
                        }
                    </div>
                </section>
            </Transition>
        </TransitionGroup>
    )
}