import { Station } from './station.modelo';

export interface StationOrder{
    station: Station;
    client: string;
    idEspecialidad: number;
    idTipoMantenimineto: number;
}