import ReactDom from 'react-dom';
import React from 'react';

// var ol = require('openlayers');
// require('openlayers/css/ol.css');

class PlantsMap extends React.Component{

    // componentDidMount() {
    //     let featuresLater = new ol.layer.Vector({
    //         source: new ol.source.Vector({
    //             features:[]
    //         })
    //     });

    //     let map = new ol.Map({
    //         target: this.refs.mapContainer, 
    //         layers: [
    //             new ol.layer.Tile({
    //                 source: new ol.source.OSM()
    //             }),
    //             featuresLayer
    //         ],
    //         view: new ol.View({
    //             center: [-11718716.28195593, 4869217.172379018],
    //             zoom: 13,
    //         })
    //     });

    //     map.on('click', this.handleMapClick.bind(this));

    //     this.setState({
    //         map: map,
    //         featuresLater: featuresLayer
    //     });

    // }

    // componentDidUpdate(prevProps, prevState) {
    //     this.state.featuresLater.setSource(
    //         new ol.source.Vector({
    //             features: this.props.routes
    //         })
    //     );
    // }

    // handleMapClick(event) {
    //     let wktWriter = new ol.format.WKT();
    //     let clickedCoordinate = this.state.map.getCoordinateFromPixel(event.pixel);
    //     let clickedPointGeom = new ol.geom.Point( clickedCoordinate );
    //     let clickedPointWkt = wktWriter.writeGeometery( clickedPointGeom );

    //     Actions.setRoutingCoord( clickedPointWkt );

    // }

    render() {
        return (
            <div ref="mapContainer"> </div>
        );
    }

}

module.exports = PlantsMap;
