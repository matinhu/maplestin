import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menus = [
    { title: 'Boss/Daily Calculator', path: 'auth' },
    { title: 'Map Generator', path: 'map-navigator' },
  ];
  constructor() { }

}
