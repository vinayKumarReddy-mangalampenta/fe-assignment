import React, { Component } from 'react'
import GroupTab from './components/GroupTab'

import "./index.css"
const groups = [
    {
        gid: "g1",
        name: "group 1 ",
        locations: [
            {
                lid: "l1",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }
                ]
            },
            {
                lid: "l2",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l3",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l10",
                locationName: "location 4",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
        ]
    },
    {
        gid: "g2",
        name: "group 1 ",
        locations: [
            {
                lid: "l3",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l2",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l1",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l4",
                locationName: "location 4",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
        ]
    },
    {
        gid: "g3",
        name: "group 1 ",
        locations: [
            {
                lid: "l5",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l2",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l3",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l6",
                locationName: "location 4",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
        ]
    },
    {
        gid: "g4",
        name: "group 1 ",
        locations: [
            {
                lid: "l7",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l2",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l3",
                locationName: "location 1",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
            {
                lid: "l8",
                locationName: "location 4",
                agents: [
                    {
                        id: 1,
                        agentName: "agent 1",
                    },
                    {
                        id: 2,
                        agentName: "agent 2",
                    },
                    {
                        id: 3,
                        agentName: "agent 3",
                    }

                ]
            },
        ]
    },
]

class AgentNavbar extends Component {

    state = {
        activeGroup: null
    }

    setAsActiveGroup = (id) => {
        this.setState({ activeGroup: id })
    }

    render() {
        const { activeGroup } = this.state
        return (
            <div className='main-con'>
                <h1 >curr Agent name</h1>
                <div>
                    <input type="search" />
                </div>
                {/* showing groups */}
                <ul className='groups-con'>
                    {
                        groups.map((each, index) => (
                            <GroupTab key={each.gid} group={each} index={index} isActive={each.gid === activeGroup} setActiveGroup={this.setAsActiveGroup} />
                        ))
                    }


                </ul>
            </div>
        )
    }
}

export default AgentNavbar
