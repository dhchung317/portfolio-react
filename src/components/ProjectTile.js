import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Context } from '../context'

export default function ProjectTile({tile}) {
    const {image, title, githubLink, playstoreLink} = tile;
    return (
        <article className="project-tile">
            <div className="project-tile-img-container">
                <div className="project-tile-title">
                    <h6>${title}</h6>
                </div>
                <img src={image} alt={title} />
                <Link to={githubLink} className="project-tile-github-link">
                    github
                </Link>
                <Link to={playstoreLink} className="project-tile-playstore-link">
                    playStore
                </Link>
            </div>
        </article>
    )
}

ProjectTile.propTypes = {
    tile: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        githubLink: PropTypes.string.isRequired,
        playstoreLink: PropTypes.string.isRequired
    })
}