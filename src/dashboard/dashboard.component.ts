import { Component } from '@angular/core';
import { TITULO_APP } from '../utilities/utilities';

@Component({
  selector: 'app-dashboard-selector',
  templateUrl: './dashboard.component.html',
  styles: ['./dashboard.component.css']
})
export class DashboardComponent {
    tituloApp = TITULO_APP;
    constructor() {}
}
