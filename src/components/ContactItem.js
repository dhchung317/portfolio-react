import React from 'react'
import PropTypes from 'prop-types'

export default function ContactItem({ item }) {
    const { name, link, icon } = item
    return name === "E-Mail" ? (
        <div className="contact-item-div">
            <h4>{name}</h4>
            <a href={`mailto:${link}`}>
                <img src={icon} alt={name} />
            </a>
        </div>
    ) : (
        <div className="contact-item-div">
            <h4>{name}</h4>
            <a href={link}>
                <img src={icon} alt={name} />
            </a>
        </div>
    )
}

ContactItem.propTypes = {
    tile: PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    })
}