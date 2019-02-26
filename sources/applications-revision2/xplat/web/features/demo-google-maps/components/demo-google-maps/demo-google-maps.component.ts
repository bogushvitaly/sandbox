/// <reference types="@types/googlemaps" />
import { MapsAPILoader } from "@agm/core";
import {
  Appearance,
  Location
} from "@angular-material-extensions/google-maps-autocomplete";
import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";

import { DemoGoogleMapsBaseComponent } from "@applications/features";

import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: "app-demo-google-maps",
  templateUrl: "demo-google-maps.component.html",
  styleUrls: ["demo-google-maps.component.scss"]
})
export class DemoGoogleMapsComponent extends DemoGoogleMapsBaseComponent
  implements OnInit {
  appearance = Appearance;
  zoom: number;
  latitude: number;
  longitude: number;
  selectedAddress: PlaceResult;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    super();
  }

  ngOnInit() {
    this.zoom = 10;
    this.latitude = 50.06143;
    this.longitude = 19.93658;

    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log("onAutocompleteSelected: ", result);
  }

  onLocationSelected(location: Location) {
    console.log("onLocationSelected: ", location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }
}
