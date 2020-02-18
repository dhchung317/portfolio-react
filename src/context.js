import React, { Component } from 'react'

const Context = React.createContext();

class ContextProvider extends Component {
    render() {
        return (
            <Context.Provider >
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