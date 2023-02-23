import React, { Component } from 'react'

import './index.css'
import LocationTab from './LocationTab'

export class GroupTab extends Component {

    state = { activeLocation: "" }

    setMeActive = () => {
        const { group, setActiveGroup } = this.props
        setActiveGroup(group.gid)
    }

    setActiveLocation = (id) => {
        this.setState({ activeLocation: id })
    }

    render() {
        const { group, index, isActive } = this.props
        const { activeLocation } = this.state
        return (
            <li className='group-tab'>
                <button className={`group-btn ${isActive ? "group-tab-active-btn " : ""}`} onClick={this.setMeActive}>
                    <span >{group.name} - {index}</span>
                </button>
                {
                    isActive &&
                    <ul className='location-tabs-con'>
                        {
                            group.locations.map((each) => (
                                <LocationTab key={each.lid} isActive={activeLocation === each.lid} location={each} setActiveLocation={this.setActiveLocation} />
                            ))
                        }
                    </ul>
                }
            </li>
        )
    }
}

export default GroupTab