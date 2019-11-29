/*app.component.ts*/
import { Component, OnInit, Input, AfterContentChecked, AfterViewChecked } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { DataBaseService } from 'src/servicios/database.service';
import { Orden } from 'src/modelos/orden.modelo';
import { Estados } from 'src/utilities/utilities';
// var CanvasJS = require('./canvasjs.min');

@Component({
    selector: 'app-pie-chart-v',
    templateUrl: './piechartV.component.html'
})

export class PieChartVComponent implements OnInit {
    @Input('vistaGrafica')
    set vistaGrafica(value: boolean) {
        if (!value) {
            this.ngOnInit();
        }
    }
    private dbService: DataBaseService;
    ordenesObtenidas: Orden[];
    CONTADOR_RECEPCIONADO = 0;
    CONTADOR_VERIFICACION = 0;
    CONTADOR_EJECUCION = 0;
    CONTADOR_PREPARACION = 0;
    CONTADOR_FINALIZADO = 0;

    constructor(dbService: DataBaseService) {
        this.dbService = dbService;
    }

    prepararPorcentajes(): void {
        this.CONTADOR_RECEPCIONADO = 0;
        this.CONTADOR_VERIFICACION = 0;
        this.CONTADOR_EJECUCION = 0;
        this.CONTADOR_PREPARACION = 0;
        this.CONTADOR_FINALIZADO = 0;
        // tslint:disable-next-line: max-line-length tslint:disable-next-line: triple-equals
        this.ordenesObtenidas.forEach(value => value.serviceStatusId == Estados.RECEPCIONADO ? this.CONTADOR_RECEPCIONADO++ : this.CONTADOR_RECEPCIONADO = this.CONTADOR_RECEPCIONADO);
        // tslint:disable-next-line: max-line-length tslint:disable-next-line: triple-equals
        this.ordenesObtenidas.forEach(value => value.serviceStatusId == Estados.VERIFICACION ? this.CONTADOR_VERIFICACION++ : this.CONTADOR_VERIFICACION = this.CONTADOR_VERIFICACION);
        // tslint:disable-next-line: max-line-length tslint:disable-next-line: triple-equals
        this.ordenesObtenidas.forEach(value => value.serviceStatusId == Estados.EJECUCION ? this.CONTADOR_EJECUCION++ : this.CONTADOR_EJECUCION = this.CONTADOR_EJECUCION);
        // tslint:disable-next-line: max-line-length tslint:disable-next-line: triple-equals
        this.ordenesObtenidas.forEach(value => value.serviceStatusId == Estados.PREPARACION ? this.CONTADOR_PREPARACION++ : this.CONTADOR_PREPARACION = this.CONTADOR_PREPARACION);
        // tslint:disable-next-line: max-line-length tslint:disable-next-line: triple-equals
        this.ordenesObtenidas.forEach(value => value.serviceStatusId == Estados.FINALIZADO ? this.CONTADOR_FINALIZADO++ : this.CONTADOR_FINALIZADO = this.CONTADOR_FINALIZADO);
    }

    ngOnInit() {
        this.dbService.getOrdenesXIdCliente('D27B01F1-37F4-4047-871B-4381008B04B6').subscribe((datos: any) => {
            if (datos != null) {
                this.ordenesObtenidas = datos.data.filter(x => x.vehicleId != null);
                if (this.ordenesObtenidas != null) {
                    this.prepararPorcentajes();
                    // INICIA GRAFICA
                    let chart = new CanvasJS.Chart("chartContainer", {
                        theme: "light2",
                        animationEnabled: true,
                        exportEnabled: true,
                        title: {
                            text: "Estados de mantenimientos"
                        },
                        data: [{
                            type: "pie",
                            showInLegend: true,
                            toolTipContent: "<b>{name}</b>: {y} (#percent%)",
                            indexLabel: "{name} - #percent%",
                            dataPoints: [
                                { y: this.CONTADOR_RECEPCIONADO, name: 'RECEPCIONADO' },
                                { y: this.CONTADOR_VERIFICACION, name: 'VERIFICACION' },
                                { y: this.CONTADOR_EJECUCION, name: 'EJECUCION' },
                                { y: this.CONTADOR_PREPARACION, name: 'PREPARACION' },
                                { y: this.CONTADOR_FINALIZADO, name: 'FINALIZADO' }
                            ]
                        }]
                    });
                    chart.render();
                }
            }
        });
    }
}
