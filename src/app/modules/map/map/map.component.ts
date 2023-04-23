import {AfterViewInit, Component, OnInit} from '@angular/core';
import Map from 'ol/Map'
import {View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  // @ts-ignore
  private map;

  private initMap(): void {

    this.map = L.map('map', {

      center: [ 39.8282, -98.5795 ],

      zoom: 3

    });


    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      maxZoom: 18,

      minZoom: 3,

      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    });

    tiles.addTo(this.map);

  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }



}

