import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  location: {
    latitude: number,
    longitude: number
  };
  
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
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

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
