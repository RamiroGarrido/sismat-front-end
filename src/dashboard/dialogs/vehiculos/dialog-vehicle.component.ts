import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Orden } from 'src/modelos/orden.modelo';
import { EstadosNombres } from '../../../utilities/utilities';
import { DataBaseService } from 'src/servicios/database.service';
import { UpdateEstatus } from 'src/modelos/update.modelo';
@Component({
    selector: 'app-dialog',
    templateUrl: './dialog-vehicle.component.html'
})
export class DialogVehicleComponent {
    dbService: DataBaseService;
    idEstado: number = null;
    observacion = '';
    estados = EstadosNombres;

    // tslint:disable-next-line: max-line-length
    constructor(public dialogRef: MatDialogRef<DialogVehicleComponent>, @Inject(MAT_DIALOG_DATA) public orden: Orden, dbService: DataBaseService) {
        this.dbService = dbService;
    }

    clickCancelar(): void {
        this.dialogRef.close();
    }

    onSubmit() {
        if (this.idEstado == null || this.idEstado == undefined) {
            alert('Escoger un estado es obligatorio');
        } else {
            const updateObject = new UpdateEstatus(this.orden.orden.id.toString(), this.idEstado, this.observacion);
            this.dbService.updateEstatusXOrdenInfo(updateObject).subscribe(() => {
                this.dialogRef.close();
            }
            );
        }
    }
}
