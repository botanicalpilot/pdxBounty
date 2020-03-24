import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';



// add token here to load map. Avoiding adding key until auth is setup

mapboxgl.accessToken = ''

console.log(process.env.MAP_TOKEN)



class PlantsMap extends React.Component{
    mapRef = React.createRef();

    constructor(props: Props) {
        super(props);
        this.state = {
            lng: -122.676483,
            lat: 45.523064,
            zoom: 13
        };
    }

    componentDidMount() {
        const { lng, lat, zoom} = this.state;

        const map = new mapboxgl.Map({
            container: this.mapRef.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [lng, lat],
            zoom
        });

        map.on('move', () => {
            const {lng, lat} = map.getCenter();

            this.setState({
                lng: lng.toFixed(4),
                lat:lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        const { lng, lat, zoom } = this.state;

        
        return (
            <div ref={this.mapRef} className="mapContainer">HII</div>
            // <div>
            //     <p>You on on the create user component</p>
            // </div>
        ) 
        
    }

}
export default PlantsMap;
