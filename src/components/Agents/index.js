import React, { Component } from 'react'
import { BsSearch } from 'react-icons/bs'
import GroupTab from './components/GroupTab'

import AgentContext from '../../context/AgentContext';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./index.css"

import { data, groups } from './dummyData'


const API_STATUS = {
    initial: "INITIAL",
    loading: "LOADING",
    success: "SUCCESS",
    failure: "FAILURE"
}


const DATA_STATUS_SHOWN = {
    wifi: "WIFI STATUS",
    network: "NETWORK STATUS",
    application: "APPLICATION STATUS"
}

class AgentNavbar extends Component {
    state = {
        activeGroup: null,
        currUserAddress: null,
        apiStatus: API_STATUS.success,
        dataShowing: DATA_STATUS_SHOWN.wifi
    }

    setAsActiveGroup = (id) => {
        this.setState((prevState) => ({
            activeGroup: prevState.activeGroup === id ? null : id
        }))
    }

    filterAgents = (e) => {
        e.preventDefault()
    }


    changeCurrUser = (id) => {
        this.setState({ currUserAddress: id })
    }

    displayInitialView = () => (
        <div>
            <h1 >Please select the user to view apiStatus</h1>
        </div>
    )

    renderApiFailureView = () => (
        <div >
            <h1 >There is some issue with us showing details</h1>
        </div>
    )


    renderNetworkWifiApplicationStatus = () => {
        const { dataShowing } = this.state

        switch (dataShowing) {
            case DATA_STATUS_SHOWN.wifi:
                return (
                    <div className='wifi-status-card'>
                        <div >
                            <span className='heading--1' >
                                wifi status
                            </span>
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

                )

            case DATA_STATUS_SHOWN.network:
                return (
                    <div className='wifi-status-card'>
                        <div >
                            <span className='heading--1' >
                                Network status
                            </span>
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

                )

            case DATA_STATUS_SHOWN.application:
                return (
                    <div className='wifi-status-card'>
                        <div >
                            <span className='heading--1' >
                                Application status
                            </span>
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

                )

            default:
                return (
                    <div className='wifi-status-card'>
                        <div >
                            <span className='heading--1' >
                                wifi status {dataShowing}
                            </span>
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

                )
        }

    }

    renderAgentDetails = () => {
        const { currUserAddress } = this.state
        return (
            <div className='display-container'>
                <span>
                    <b>User:</b>
                    <i> {currUserAddress}</i>
                </span>
                <div className='status-graph-con'>
                    <div className='overall-status-con'>
                        <h1 >Overall Status</h1>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png' className='status-smile' alt='good' />
                    </div>
                    <div className='status-graph'>
                        <LineChart width={300} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </div>
                </div>

                <div className='network-wifi-application-con'>
                    <div className='network-cards' onClick={() => {
                        this.setState({ dataShowing: DATA_STATUS_SHOWN.wifi })
                    }}>
                        <span >
                            Wifi Status
                        </span>
                        <img src='wifi.jpg' className='network-card-img' alt='Wifi Status' />
                    </div>
                    <div className='network-cards' onClick={() => {
                        this.setState({ dataShowing: DATA_STATUS_SHOWN.network })
                    }}>
                        <span >
                            Network Status
                        </span>
                        <img src='network.jpg' className='network-card-img' alt='network Status' />

                    </div>
                    <div className='network-cards' onClick={() => {
                        this.setState({ dataShowing: DATA_STATUS_SHOWN.application })
                    }}>
                        <span >
                            Application Status
                        </span>
                        <img src='Application.jpg' className='network-card-img' alt='Application Status' />

                    </div>
                </div>

                {this.renderNetworkWifiApplicationStatus()}
            </div>

        )
    }


    showDisplayContainer = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case API_STATUS.initial:
                return this.displayInitialView()

            case API_STATUS.loading:
                return (
                    <div >
                        <h1 >Loading.....!!</h1>
                    </div>
                )

            case API_STATUS.success:
                return this.renderAgentDetails()

            case API_STATUS.failure:
                return this.renderApiFailureView()

            default:
                return this.displayInitialView()

        }
    }



    render() {
        const { activeGroup, currUserAddress } = this.state
        return (
            <AgentContext.Provider value={{
                currUserAddress,
                changeUser: this.changeCurrUser
            }}>

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
                    {this.showDisplayContainer()}
                </div>

            </AgentContext.Provider>
        )
    }
}

export default AgentNavbar


