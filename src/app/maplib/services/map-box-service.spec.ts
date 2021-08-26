import {MAPBOX_ACCESS_TOKEN, MapBoxService} from './map-box-service';
import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {DataService} from "../../core/services/data-service.service";
import * as mapboxgl from "mapbox-gl";


describe('MapBoxService', () => {

  let spectator: SpectatorService<MapBoxService>;
  let counterService: MapBoxService;
  const createService = createServiceFactory({
    service: MapBoxService,
    providers: [{provide:MAPBOX_ACCESS_TOKEN, useValue:'pk.eyJ1IjoiZWR5NDc3IiwiYSI6ImNrNXR6d3dyMzE0MGszbW5xdDZnODdieTYifQ.tQ6zNKVm10yrS9JQoVgsFA'}],
    entryComponents: [],

  });
  beforeEach(() => spectator = createService());



  it('should create an instance', () => {

    expect(spectator).toBeTruthy();
   // expect(new MapBoxService('pk.eyJ1IjoiZWR5NDc3IiwiYSI6ImNrNXR6d3dyMzE0MGszbW5xdDZnODdieTYifQ.tQ6zNKVm10yrS9JQoVgsFA')).toBeTruthy();
  });

  it('it should have a mapInstance', () => {
    expect(spectator.service.mapInstance).toBeInstanceOf(mapboxgl.Map);
  });




  /*let spectator: SpectatorService<MapBoxService>;
  let counterService: MapBoxService;
  const createService = createServiceFactory({
    service: MapBoxService,
    providers: [{provide:MAPBOX_ACCESS_TOKEN, useValue:'pk.eyJ1IjoiZWR5NDc3IiwiYSI6ImNrNXR6d3dyMzE0MGszbW5xdDZnODdieTYifQ.tQ6zNKVm10yrS9JQoVgsFA'},MapBoxService],
    entryComponents: [],

  });

  it('should create an instance', () => {
    // @ts-ignore
    expect(new MapBoxService()).toBeTruthy();
  });
  it('it should have a  mapInstance',() => {
    expect(DataServiceService instanceof )
  });

  /*  it('should create an instance', () => {
      // @ts-ignore
      expect(new MapBoxService()).toBeTruthy();
    });*/
});
