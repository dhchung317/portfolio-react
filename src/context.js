import React, { Component } from 'react'
import Client from './Contentful'

const Context = React.createContext();

class ContextProvider extends Component {

    state = {
        projects:[],
        loading: true
    }

    getProjectData = async () => {
        try {

            let response = await Client.getEntries({
                content_type: "portfolio"
            })


            let projects = this.formatData(response.items)
            console.log(projects)
            this.setState({
                projects,
                loading: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getProjectData()
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let image = item.fields.image.fields.file.url
            console.log(item.fields)
            let project = { ...item.fields, image, id }
            return project
        })
        return tempItems
    }

    getProjects() {
        return this.state.projects
    }


    render() {
        return (
            <Context.Provider value={{...this.state, getProjects: this.getProjects}}>
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