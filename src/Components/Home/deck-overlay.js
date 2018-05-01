import React, {Component} from 'react';
import DeckGL, {PolygonLayer, GeoJsonLayer, PathLayer} from 'deck.gl';

const LIGHT_SETTINGS = {
  lightsPosition: [-125, 50.5, 5000, -122.8, 48.5, 8000],
  ambientRatio: 0.2,
  diffuseRatio: 0.5,
  specularRatio: 0.3,
  lightsStrength: [1.0, 0.0, 2.0, 0.0],
  numberOfLights: 2
};

// -111.8751984, 40.7351688
export default class DeckGLOverlay extends Component {
  static get defaultViewport() {
    return {
      latitude: 40.7351688,
      longitude: -111.8751984,
      zoom: 11,
      maxZoom: 16,
      pitch: 0,
      bearing: 0
    };
  }

  render() {
    const {viewport, data, colorScale} = this.props;

    if (!data) {
      return null;
    }

    const layer = new GeoJsonLayer({
      id: 'geojson',
      data: data,
      opacity: 1,
      stroked: true,
      filled: true,
      extruded: false,
      wireframe: false,
      lineWidthScale: 1,
      lineWidthMinPixels: 30,
      lineWidthMaxPixels: 30,
      lineJointRounded: true,
      // lineMiterLimit: 4,
      fp64: false,
      // getElevation: f => f.properties.color * 100 + 100,
      getFillColor: f => colorScale(f.properties.color),
      // getStrokeColor: f => colorScale(f.properties.color),
      getLineColor: f => colorScale(f.properties.color),
      // lightSettings: LIGHT_SETTINGS,
      // pickable: Boolean(this.props.onHover),
      // onHover: this.props.onHover
    });

    return <DeckGL {...viewport} layers={[layer]} onWebGLInitialized={gl => {
      // gl.enable(gl.BLEND);
      // gl.blendFunc(gl.SRC_ALPHA, gl.SRC_ALPHA_SATURATE);
      // gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
      // gl.blendFunc(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA)
      // gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    }} />;
  }
}
