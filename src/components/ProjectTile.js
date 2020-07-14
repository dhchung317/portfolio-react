import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function ProjectTile({tile}) {
    const {image, title, githubLink, playstoreLink} = tile;
    return (
        <article className="project-tile">
            <div className="project-tile-content-container">
                <div className="project-tile-title">
                    <h2>{title}</h2>
                </div>
                <img src={image} alt={title} />
                <a href={githubLink} className="project-tile-github-link">
                    Github
                </a>
                <a href={playstoreLink} className="project-tile-playstore-link">
                    PlayStore
                </a>
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