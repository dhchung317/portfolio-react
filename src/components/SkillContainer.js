import React, { useContext } from 'react'
import { Context } from '../context'
import Loading from './Loading'
import SkillList from './SkillList'

export default function SkillContainer() {
    const { loading, skills } = useContext(Context)
    
    return loading ? (
        <Loading />
    ) : (
        <SkillList skills={skills} />
    )
}