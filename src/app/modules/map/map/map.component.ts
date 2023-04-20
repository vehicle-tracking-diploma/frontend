import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map'
import {View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // @ts-ignore
  map:Map;

  constructor() { }


  ngOnInit() {
    // @ts-ignore
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }
}

