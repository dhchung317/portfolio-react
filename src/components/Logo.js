import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import { play, exit } from '../timelines'
import logoImg from '../img/logo_small.png'
import logoImgU from '../img/logo_small_under.png'


export default function Logo() {
    return (
        <TransitionGroup>
            <Transition
                appear={true}
                onEnter={(node, appears) => play('/', node, appears)}
                onExit={(node, appears) => exit(node, appears)}
                timeout={{ enter: 750, exit: 250 }}>

                <div className="logo-container">
                    <div className="logo-div">
                        <img src={logoImg} alt="logoImage" />
                    </div>
                    <div className="logo-u-div">
                        <img src={logoImgU} alt="logoImageU" />
                    </div>
                </div>
                
            </Transition>
        </TransitionGroup>
    )
}
