import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraestructura',
  templateUrl: './infraestructura.component.html',
  styles: ['./infraestructura.component.css']
})
export class InfraestructuraComponent implements OnInit {
  titulo: string;
  vistaLista: boolean;
  vistaGrafica: boolean;

  constructor() { }

  ngOnInit(): void {
    this.cambioVista(true);
  }
  cambioVista(vista: boolean) {
    if (vista) {
      this.vistaGrafica = true;
      this.vistaLista = false;
    } else {
      this.vistaLista = true;
      this.vistaGrafica = false;
      

    }
  }

}
