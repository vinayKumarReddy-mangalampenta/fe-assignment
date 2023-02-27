/*
 * Base Google Map example
 */
import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';

function createMapOptions(maps) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
        zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_CENTER,
            style: maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions: {
            position: maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true
    };
}

export default class SimpleMapPage extends Component {
    // static propTypes = {
    //     center: PropTypes.array,
    //     zoom: PropTypes.number,
    //     greatPlaceCoords: PropTypes.any
    // };

    static defaultProps = {
        center: [13.5560, 78.5010],
        zoom: 3,
        greatPlaceCoords: { lat: 13.5560, lng: 78.5010 }
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                height: "100vh",
                width: "100vw",
                position: "relative"
            }}>
                <GoogleMap
                    // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
                    center={this.props.center}
                    zoom={this.props.zoom}
                    options={createMapOptions}>

                    {/* //TODO: add many places as u like below by changing the latitude and longitudes */}
                    <MyGreatPlace lat={13.5560} lng={78.5010} text={'mpl'} />
                    <MyGreatPlace lat={23.5560} lng={88.5010} text={'a'} />
                    <MyGreatPlace lat={43.5560} lng={58.5010} text={'b'} />

                    <MyGreatPlace lat={15.5560} lng={78.5010} text={'krnl'} />
                </GoogleMap>
                <div >
                    <h1 >Hello world</h1>
                </div>
            </div>

        );
    }
}