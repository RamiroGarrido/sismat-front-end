export interface Orden {
    orden: any;
clientId: string;
deliveryDate: Date;
id: string;
observation: string;
receptionDate: Date;
serviceStatusId: number;
serviceTypeId: number;
specialityId: number;
stationId: number;
structureTypeId: number;
value: number;
vehicleId: string;
zoneId: number;
// Adicionales del mismo servicio
structureTypeName: string;
recordType: number;
recordTypeName: string;
zoneName: string;
zoneDescription: string;
zoneColor: string;
specialityName: string;
serviceTypeName: string;
serviceStatusName: string;
}
