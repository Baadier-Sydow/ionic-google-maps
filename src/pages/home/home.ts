import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MapsProvider } from './../../providers/maps/maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location: {
    latitude: number,
    longitude: number
  };

  @ViewChild('map') mapElement: ElementRef;
  
  constructor(public navCtrl: NavController, public geolocation: Geolocation, public mapsProvider: MapsProvider) {
    
  }

  ionViewDidLoad() {
    this.findUserLocation();
  }

  findUserLocation(){
    let options = {
      enableHighAccuracy: true,
      timeout: 25000
    };


    this.geolocation.getCurrentPosition(options).then((position) => {

      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      this.mapsProvider.init(this.location, this.mapElement);

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
