import { Vehicle } from './vehicle.modelo';

export interface VehicleOrder {
    vehicle: Vehicle;
    client: string;
    idEspecialidad: number;
    idTipoMantenimineto: number;
}
