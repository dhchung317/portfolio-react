import React from 'react'
import SkillTile from './SkillTile'

export default function SkillList({ skills }) {
    return (
        <section className="skill-list">
            <div className="skill-list-content">
                {
                    skills.map((item) => {
                        return <SkillTile key={item.id} tile={item} />
                    })
                }
            </div>
        </section>
    )
}