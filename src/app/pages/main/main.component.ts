import { Component } from '@angular/core';

const MAPS_API_KEY = 'AIzaSyAguP9mqsA4ob9gIPDycPebIpKve2pG1W4';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  positionMap = {
    street: "Karalia",
    num: "51",
    city: "Minsk"
  };

  mapsURL = `https://maps.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=place_id:ChIJU0l_Hu7P20YRe-rKGr07Dn8`;
}
