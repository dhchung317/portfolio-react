import React, { createContext, useState, useEffect } from 'react'
import Client from './Contentful'

export const Context = createContext();

const ContextProvider = (props) => {

    const [projects, setProjects] = useState([])

    const [skills, setSkills] = useState([])

    const [loading, setLoading] = useState(true)

    const getProjects = async() => {
        try {
            let response = await Client.getEntries({
                content_type: "portfolio"
            })
            let projects = formatProjectData(response.items)
            setProjects(projects)
        } catch (error) {
            console.log(error)
        }
    }

    const getSkills = async() => {
        try {
            let response = await Client.getEntries({
                content_type: "portfolioSkillTile",
                order: "-fields.proficiency"
            })
            console.log(response.items)
            let skills = formatSkillData(response.items)
            setSkills(skills)
        } catch (error) {
            console.log(error)
        }
    }

    const formatProjectData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let image = item.fields.image.fields.file.url
            console.log(item.fields)
            let project = { ...item.fields, image, id }
            return project
        })
        return tempItems
    }

    const formatSkillData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let icon = item.fields.icon.fields.file.url
            console.log(item.fields)
            let skill = { ...item.fields, icon, id }
            return skill
        })
        return tempItems
    }

    useEffect(() => {
            getProjects()
            getSkills()
            setLoading(false)
    }, []);

    return (
        <Context.Provider value={{ projects, skills, loading }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider