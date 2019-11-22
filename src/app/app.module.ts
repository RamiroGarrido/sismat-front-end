import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// INICIO ANGULAR MATERIAL
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
// FIN ANGULAR MATERIAL
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VehiculosComponent } from 'src/dashboard/vehiculos/vehiculos.component';
import { OpcionVehiculosComponent } from 'src/dashboard/vehiculos/opcionVehiculos/opcionVehiculos.component';
import { PieChartVComponent } from 'src/dashboard/graficos/vehiculos/piechartV.component';
import { DialogVehicleComponent } from 'src/dashboard/dialogs/vehiculos/dialog-vehicle.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InfraestructuraComponent } from 'src/dashboard/infraestructura/infraestructura.component';
import { OpcionInfraestructuraComponent } from 'src/dashboard/infraestructura/opcionInfraestructura/opcionInfraestructura.component';
import { PieChartIComponent } from 'src/dashboard/graficos/infraestructura/piechartI.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogVehicleComponent,
    DashboardComponent,
    VehiculosComponent,
    InfraestructuraComponent,
    OpcionVehiculosComponent,
    OpcionInfraestructuraComponent,
    PieChartVComponent,
    PieChartIComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogVehicleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
