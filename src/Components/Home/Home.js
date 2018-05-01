// @flow
import React, { Component } from 'react';
import { observer }         from 'mobx-react';
// import mapboxgl             from 'mapbox-gl';
import MapGL                from 'react-map-gl';
import DeckGLOverlay        from './deck-overlay.js';
// import * as d3              from 'd3';
// import { geoMercator }      from 'd3';
// import * as d3geo           from 'd3-geo-projection';
import isochrone            from '../../Assets/isochrones/isochrones.json';

/** Stylesheets **/
import './Home.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoib2Nvbm5vcmN0MSIsImEiOiJjaW01aDhhM3gwMW5xdHFtNmgzbDg1b2Y1In0.RluMXl9MmJ-i9e4u01SwQg'; // eslint-disable-line

// const d3 = require('d3');

/** Types **/
type State = {
  svg: any,
  rect: {
    width:  Number,
    height: Number
  }
}
type Props = {
  store: any
}

const colorScale = color => {
  switch (color) {
    case 0:
      return [193,39,45];
    case 1:
      return [241,90,36];
    case 2:
      return [247,147,30];
    case 3:
      return [140,198,63];
    case 4:
      return [57,181,74];
    case 5:
      return [0,104,55];
    default:
      return [193,39,45];
  }
}

@observer
class Home extends Component {
  state:          State;
  props:          Props;
  mapContainer:   any;
  isochroneGroup: any;
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        ...DeckGLOverlay.defaultViewport,
        width: 500,
        height: 500
      },
      data: isochrone
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
  }

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  // map = new mapboxgl.Map({
  //   container: this.mapContainer,
  //   style:     "mapbox://styles/oconnorct1/cjea7y3wx6z1x2rmrhnd39edx",
  //   center:    [Lng, Lat],
  //   zoom:      Zoom
  // });
  // map.addControl(new mapboxgl.NavigationControl());

  render() {
    const {viewport, data} = this.state;

    return (
      <div className="Home">
        <MapGL
          {...viewport}
          onViewportChange={this._onViewportChange.bind(this)}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle={"mapbox://styles/oconnorct1/cjea7y3wx6z1x2rmrhnd39edx"}
        >
          <DeckGLOverlay viewport={viewport} data={data} colorScale={colorScale} />
        </MapGL>
      </div>
    );
  }
}

export default Home;
