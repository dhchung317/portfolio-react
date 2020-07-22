import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function ContactItem({ item }) {
    const { name, link, icon } = item
    return (
        <div>
            <h4>{name}</h4>
            <Link to={link}>
                <img src={icon} alt={name} />
            </Link>
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