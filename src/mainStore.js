// @flow
import { observable } from 'mobx';
import mapboxgl       from 'mapbox-gl';

class mainStore {
  map:                         mapboxgl.Map = null;
  @observable Lat:             number = 40.6;
  @observable Lng:             number = -111.9;
  @observable Zoom:            number = 9;
  @observable mapInstantiated: bool   = false;
  @observable filtered:        number = 0;
  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib2Nvbm5vcmN0MSIsImEiOiJjaW01aDhhM3gwMW5xdHFtNmgzbDg1b2Y1In0.RluMXl9MmJ-i9e4u01SwQg';
  }
  instantiateMap(map: mapboxgl.Map) {
    this.map             = map;
    this.mapInstantiated = true;
  }
}

export default new mainStore();
