import { Component } from '@angular/core';

import { GeoService } from "../geo.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private geoService: GeoService) {}

  public lat;
  public lng;

  getLocation(){
    this.geoService.getCurrentPosition()
    .then(resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    })
    .catch( err => {
      console.log(err);
    })
  }


}
