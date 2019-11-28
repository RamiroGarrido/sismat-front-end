import { Component, Input, ViewChild, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataBaseService } from 'src/servicios/database.service';
import { Station } from 'src/modelos/station.modelo';
import { Orden } from 'src/modelos/orden.modelo';
import { MatDialog } from '@angular/material/dialog';
import { DialogVehicleComponent } from 'src/dashboard/dialogs/vehiculos/dialog-vehicle.component';

@Component({
  selector: 'app-opcionvehiculos',
  templateUrl: './opcionVehiculos.component.html',
  styles: ['./opcionVehiculos.component.css']
})

export class OpcionVehiculosComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() vistaLista: boolean;
  @Input() vistaGrafica: boolean;
  contadores: number[];
  CONTADOR_RECEPCIONADO = 0;
  CONTADOR_VERIFICACION = 0;
  CONTADOR_EJECUCION = 0;
  CONTADOR_PREPARACION = 0;
  CONTADOR_FINALIZADO = 0;
  station: Station;
  ordenesObtenidas: Orden[];
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['editar', 'clientName', 'vehicleId', 'structureTypeName', 'receptionDate', 'deliveryDate', 'serviceTypeName', 'specialityName', 'serviceStatusName', 'observation'];
  dataSource: MatTableDataSource<Orden>;
  resultsLength = 0;
  isLoadingResults = false;

  constructor(private dbService: DataBaseService, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    this.cargarDatosIniciales();
  }
  cargarDatosIniciales() {
    // ID DEL CLIENTE AVOCHOY
    this.dbService.getOrdenesXIdCliente('D27B01F1-37F4-4047-871B-4381008B04B6')
      .subscribe((datos: any) => {
        // se filtra para que solo aparezcan vehiculos
        this.ordenesObtenidas = datos.data.filter(x => x.vehicleId != null);
        if (this.ordenesObtenidas != null) {
          // se configuran los datos para la tabla
          this.dataSource = new MatTableDataSource(this.ordenesObtenidas);
          this.resultsLength = this.ordenesObtenidas.length;
          this.isLoadingResults = true;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
  }
  recargarDatos() {
    // ID DEL CLIENTE AVOCHOY
    this.dbService.getOrdenesXIdCliente('D27B01F1-37F4-4047-871B-4381008B04B6')
      .subscribe((datos: any) => {
        // se filtra para que solo aparezcan vehiculos
        this.ordenesObtenidas = datos.data.filter(x => x.vehicleId != null);
        if (this.ordenesObtenidas != null) {
          // se configuran los datos para la tabla
          this.dataSource.data = this.ordenesObtenidas;
          this.changeDetectorRefs.detectChanges();
          this.isLoadingResults = true;
        }
      }).add(
      );
  }
  clickedRow(row: Orden) {
    if (row != null) {
      const dialogRef = this.dialog.open(DialogVehicleComponent, {
        width: '500px',
        height: '400px',
        data: { orden: row }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.isLoadingResults = false;
        this.recargarDatos();
      }).add();
    }
  }
}


