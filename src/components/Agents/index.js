import React, { Component } from 'react'
import { BsSearch } from 'react-icons/bs'
import GroupTab from './components/GroupTab'



import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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

const data = [
    {
        name: 'Page A',
        uv: 0,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 1000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


class AgentNavbar extends Component {

    state = {
        activeGroup: null
    }

    setAsActiveGroup = (id) => {
        this.setState((prevState) => ({
            activeGroup: prevState.activeGroup === id ? null : id
        }))
    }

    filterAgents = (e) => {
        e.preventDefault()
    }

    render() {
        const { activeGroup } = this.state
        return (
            <div className='main-container'>
                {/* left sub navbar */}
                <div className='sub-nav-con'>

                    <div className='search-bar-con'>
                        <form onSubmit={this.filterAgents} className="search-form">
                            {/* <span >Out Agents</span> */}
                            <input type="search" className='search-input' placeholder='search-agents' />
                            <button type='submit' className='search-submit-btn' >
                                <BsSearch />
                            </button>

                        </form>

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

                {/* right content display */}
                <div className='display-container'>
                    <span ><b>User:</b> <i> 101.22.4.12</i></span>
                    <div className='status-graph-con'>
                        <div className='overall-status-con'>
                            <h1 >Overall Status</h1>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png' className='status-smile' alt='good' />
                        </div>
                        <div className='status-graph'>
                            <LineChart width={600} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                        </div>
                    </div>

                    <div className='network-wifi-application-con'>
                        <div className='network-cards'>
                            <span >
                                Wifi Status
                            </span>
                            <img src='https://cdn.pixabay.com/photo/2016/03/30/13/24/wifi-1290667__340.png' className='network-card-img' alt='good' />

                        </div>
                        <div className='network-cards'>
                            <span >
                                Network Status
                            </span>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png' className='status-smile' alt='good' />

                        </div>
                        <div className='network-cards'>
                            <span >
                                Application Status
                            </span>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png' className='status-smile' alt='good' />

                        </div>
                    </div>

                    <div className='wifi-status-card'>
                        <div >
                            <span className='heading--1' >Wifi Status</span>
                        </div>

                        <ul className='wifi-status-list'>
                            <li >
                                Channel: 6
                            </li>
                            <li >
                                Bitrate: 6
                            </li>
                            <li >
                                Signal Strength: Good
                            </li>
                            <li >
                                Channel Utilization
                            </li>
                            <li >
                                Packet Retry
                            </li>

                        </ul>

                    </div>

                </div>
            </div>

        )
    }
}

export default AgentNavbar


