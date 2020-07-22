import React from 'react'
import ContactItem from './ContactItem'
import { play, exit } from '../timelines'
import { TransitionGroup, Transition } from 'react-transition-group'

export default function ContactItemList({ items }) {
    return (
        <TransitionGroup>
            <Transition
                appear={true}
                onEnter={(node, appears) => play('/contact', node, appears)}
                onExit={(node, appears) => exit(node, appears)}
                timeout={{ enter: 750, exit: 250 }}
            >
                <section className="contact-list">
                    <div className="contact-list-content">
                        {
                            items.map((cItem) => {
                                return <ContactItem className="cItem" key={item.id} item={cItem} />
                            })
                        }
                    </div>
                </section>
            </Transition>
        </TransitionGroup>
    )
}