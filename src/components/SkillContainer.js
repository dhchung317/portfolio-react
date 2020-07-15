import React from 'react'
import { withConsumer } from '../context'
import Loading from './Loading'
import SkillList from './SkillList'

function SkillContainer({ context }) {
    const { loading, skills } = context
    if (loading) {
        return <Loading />
    }
    return (
        <>
          <SkillList skills={skills} />
        </>
    )
}

export default withConsumer(SkillContainer)