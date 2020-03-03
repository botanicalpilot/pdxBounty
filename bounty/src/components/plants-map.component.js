import ReactDom from 'react-dom';
import React from 'react';
import 'ol/ol.css';
import Map from "ol/Map";
import View from "ol/View";


class PlantsMap extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            mapClassName: "plants-map"
        }
    }

    componentDidMount() {

        var map = new Map({
            target: "mapContainer", 
            layers: [],
            view: new View({
                center: [-11718716.28195593, 4869217.172379018],
                zoom: 13,
            })
             
        });

        // this.setState({
        //     map: map,
        // });

        window.map = map;

        this.initialLoad = false;
        //window.emitter.emit("mapLoaded");
        window.map.once("rendercomplete", event => {
        if (!this.initialLoad) {
            window.emitter.emit("mapLoaded");
            this.initialLoad = true;
        }
        });
        

    }

    render() {
        
        return (
            <div ref="mapContainer"> this is the map container </div>
        );
    }

}

export default PlantsMap;
