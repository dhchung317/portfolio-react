import React from 'react'
import { withConsumer } from '../context'
import Loading from './Loading'
import ProjectList from './ProjectList'

function ProjectContainer({ context }) {
    const { loading, projects } = context
    if (loading) {
        return <Loading />
    }
    return (
        <>
          <ProjectList projects={projects} />
        </>
    )
}

export default withConsumer(ProjectContainer)