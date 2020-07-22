import React from 'react'
import PropTypes from 'prop-types'

export default function ContactItem({item}) {
    const {link, icon } = item
    return (
        <div>
            
        </div>
    )
}

ContactItem.propTypes = {
    tile: PropTypes.shape({
        link: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    })
}