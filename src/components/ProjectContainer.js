import React, {useContext} from 'react'
import { Context } from '../context'
import Loading from './Loading'
import ProjectList from './ProjectList'

export default function ProjectContainer() {
    const { loading, projects } = useContext(Context)

    return loading ? (
        <Loading />
    ) : (
        <ProjectList projects={projects} />
    )
}