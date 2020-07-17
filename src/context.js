import React, { Component } from 'react'
import Client from './Contentful'

const Context = React.createContext();

class ContextProvider extends Component {

    state = {
        projects:[],
        skills:[],
        loading: true
    }

    getProjectData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "portfolio"
            })
            let projects = this.formatProjectData(response.items)
            this.setState({
                projects: projects,
                loading: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    getSkillData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "portfolioSkillTile",
                order: "-fields.proficiency"
            })
            console.log(response.items)
            let skills = this.formatSkillData(response.items)
            this.setState({
                skills: skills,
                loading: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getProjectData()
        this.getSkillData()
    }

    formatProjectData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let image = item.fields.image.fields.file.url
            console.log(item.fields)
            let project = { ...item.fields, image, id }
            return project
        })
        return tempItems
    }

    formatSkillData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let icon = item.fields.icon.fields.file.url
            console.log(item.fields)
            let skill = { ...item.fields, icon, id }
            return skill
        })
        return tempItems
    }

    render() {
        return (
            <Context.Provider value={{...this.state}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer

export function withConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <Consumer>
            {value => <Component{...props} context={value} />}
        </Consumer>
    }
}

export { ContextProvider, Consumer, Context }