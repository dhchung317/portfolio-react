import React, { createContext, useState, useEffect } from 'react'
import Client from './Contentful'

export const Context = createContext();

const ContextProvider = (props) => {

    const [projects, setProjects] = useState([])

    const [skills, setSkills] = useState([])

    const [cItems, setContactItems] = useState([])

    const [loading, setLoading] = useState(true)

    const getProjects = async () => {
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

    const getSkills = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "portfolioSkillTile",
                order: "-fields.proficiency"
            })
            let skills = formatSkillData(response.items)
            setSkills(skills)
        } catch (error) {
            console.log(error)
        }
    }

    const getContacts = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "portfolioContactItem",
                order: "fields.name"
            })
            let cItems = formatContactData(response.items)
            setContactItems(cItems)
        } catch (error) {
            console.log(error)
        }
    }

    const formatProjectData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let image = item.fields.image.fields.file.url
            let project = { ...item.fields, image, id }
            return project
        })
        return tempItems
    }

    const formatSkillData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let icon = item.fields.icon.fields.file.url
            let skill = { ...item.fields, icon, id }
            return skill
        })
        return tempItems
    }

    const formatContactData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let icon = item.fields.icon.fields.file.url
            let cItem = { ...item.fields, icon, id }
            return cItem
        })
        return tempItems
    }

    useEffect(() => {
        getProjects()
        getSkills()
        getContacts()
        setLoading(false)
    }, []);

    return (
        <Context.Provider value={{ projects, skills, cItems, loading}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider