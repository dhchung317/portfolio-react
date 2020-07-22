import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import { play, exit } from '../timelines'

export default function AboutMe() {
    return (
        <TransitionGroup>
            <Transition
                appear={true}
                onEnter={(node, appears) => play('about-me-text', node, appears)}
                onExit={(node, appears) => exit(node, appears)}
                timeout={{ enter: 750, exit: 250 }}>
                <div className="about-me-text-div">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quisquam, dicta provident rem ex corrupti deleniti dolorem cumque autem itaque?
                    </p>
                </div>
            </Transition>
        </TransitionGroup>
    )
}
