import React from 'react'
import PropTypes from 'prop-types'

export default function SkillTile({tile}) {
    const {icon, name, proficiency} = tile;
    return (
        <article className="skill-tile">
            <div className="skill-tile-content-container">
                <div className="skill-tile-title">
                    <h2>{name}</h2>
                    <h3>{proficiency}</h3>
                </div>
                <img src={icon} alt={name} />
            </div>
        </article>
    )
}

SkillTile.propTypes = {
    tile: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        proficiency: PropTypes.number.isRequired
    })
}