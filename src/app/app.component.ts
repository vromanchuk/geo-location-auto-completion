import { Component, OnInit } from "@angular/core";
import { MapsAPILoader } from "angular2-google-maps/core";
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Geolocation autocomplete!';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private _loader: MapsAPILoader){
  }
  ngOnInit(){
    console.log('hello');
    this._loader.load().then(() => {
      // docs https://developers.google.com/places/web-service/autocomplete?hl=ru
      // {types: ['establishment']} - list of companies
      // {types: ['(cities)']} - list of companies


      let autocomplete = new google.maps.places.Autocomplete(document.getElementById("pac-input"), {types: ['(cities)']});
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        let place = autocomplete.getPlace();
        console.log(place);
      });
    });
  }
}
