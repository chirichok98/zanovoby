import { Component } from '@angular/core';

const MAPS_API_KEY = 'AIzaSyAi5CkoofhfOBB9W72abtZqjz5wb0At1_c';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  mapsURL = `https://maps.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=place_id:ChIJU0l_Hu7P20YRe-rKGr07Dn8`;
}
