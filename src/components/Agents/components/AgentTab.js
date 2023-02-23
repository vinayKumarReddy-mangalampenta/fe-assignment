import React, { Component } from 'react'

class AgentTab extends Component {

    state = { activeAgentConnection: 1 }

    setMeActiveAgent = () => {
        const { setActiveAgent, agent } = this.props
        setActiveAgent(agent.id)
    }

    setActiveAgentConnection = (id) => {

        this.setState({ activeAgentConnection: id })
        //TODO: maintain current connection as in context and display the details of it in index.js 
    }

    render() {
        const { isActive, agent } = this.props
        const subTabs = [...Array(2).keys()];
        const { activeAgentConnection } = this.state
        return (
            <li className='agent-tab'>
                <button className='agent-tab-btn' onClick={this.setMeActiveAgent} >Agent </button>
                {isActive && <ul className='agents-sub-tabs-con'>
                    {/*  //TODO:  may be we should do mapping here  with actual data */}
                    {
                        subTabs.map((each) => (
                            <AgentConnection key={each} connection={each} isActive={activeAgentConnection == each} setActiveAgentConnection={this.setActiveAgentConnection} />
                        ))
                    }
                </ul>}
            </li>
        )
    }
}

export default AgentTab



const AgentConnection = (props) => {
    const { setActiveAgentConnection, connection, isActive } = props

    const setMeAsActiveConnection = () => {
        setActiveAgentConnection(connection)
    }

    return (
        <li className='agent-sub-tab' key={connection} >
            <button onClick={setMeAsActiveConnection} className={`agent-sub-tab-btn ${isActive ? "active-agent-sub-tab " : ""}`} >AP {connection}</button>
        </li>
    )
}