import React, { Component } from 'react'
import { BsChevronDown, BsChevronRight } from 'react-icons/bs'

import AgentContext from '../../../context/AgentContext'

class AgentTab extends Component {

    state = { activeAgentConnection: 1 }

    setMeActiveAgent = () => {
        const { setActiveAgent, agent } = this.props
        setActiveAgent(agent.id)
    }

    setActiveAgentConnection = (id) => {
        this.setState({ activeAgentConnection: id })

        const { changeUser } = this.context

        changeUser(Math.random())
    }

    render() {
        const { isActive, agent } = this.props
        const subTabs = [...Array(2).keys()];
        const { activeAgentConnection } = this.state
        return (
            <li className='agent-tab'>
                <button className={`agent-tab-btn ${isActive && "active-agent-tab-btn"}`} onClick={this.setMeActiveAgent} >
                    <span >Agent Name</span>
                    {isActive ? <BsChevronDown /> : <BsChevronRight />}

                </button>
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





AgentTab.contextType = AgentContext;


const AgentConnection = (props) => {
    const { setActiveAgentConnection, connection, isActive } = props

    const setMeAsActiveConnection = () => {
        setActiveAgentConnection(connection)
    }

    return (
        <li className='agent-sub-tab' key={connection} >
            <button onClick={setMeAsActiveConnection} className={`agent-sub-tab-btn ${isActive ? "active-agent-sub-tab " : ""}`} >
                <span >
                    <span style={{ fontSize: "20px", visibility: `${isActive ? "visible" : "hidden"}` }}>&#x2022; </span>
                    AP {connection}
                </span>
            </button>
        </li>
    )


}