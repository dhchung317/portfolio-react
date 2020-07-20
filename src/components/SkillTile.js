import React from 'react'
import PropTypes from 'prop-types'

/**
 * TODO: transition window with links to github repos displaying best examples to support given skill
 */
export default function SkillTile({tile}) {
    const {icon, name, proficiency} = tile;
    return (
        <article className="skill-tile">
            <div className="skill-tile-content-container">
                <div className="skill-tile-title">
                    <h2>{name}</h2>
                    <div className="rating-bar">
                        <div className={`r${proficiency}`} >
                            <span className={`animate-rating-bar c${proficiency}`}></span>
                        </div>
                    </div>
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