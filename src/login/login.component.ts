import { Component} from '@angular/core';
import { TITULO_APP } from 'src/utilities/utilities';



@Component({
  selector: 'app-login-selector',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  tituloApp = TITULO_APP;
  constructor() { }
}
