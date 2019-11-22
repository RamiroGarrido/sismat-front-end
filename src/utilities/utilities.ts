export const TITULO_APP = 'Sistema de Mantenimiento';
export const TITULO_CREACION_ORDEN_VEHICULO = 'Creacion orden mantenimiento para vehiculo';
export const TITULO_CREACION_ORDEN_INFRAESTRUCTURA = 'Creacion orden mantenimiento para infraestructura';
// SE LE MANDA POR GET EL ID: /api/orders/filter/{id}
export const URL_LISTA_ORDENES_POR_ID = 'http://www.backendmantenimiento.somee.com/api/orders/filter/';
// SE LE MANDA POR GET EL ID: /api/orders/filter/{clientId}
export const URL_LISTA_ORDENES_POR_IDCLIENTE = 'http://www.backendmantenimiento.somee.com/api/orders/filterClientId/';
export const URL_UPDATE_ESTATUS_ORDEN_POR_ID = 'http://www.backendmantenimiento.somee.com/api/orders/update_status/';
export const URL_CREACION_ORDEN_POR_VEHICULO = 'http://www.backendmantenimiento.somee.com/';
// export const URL_LISTA_VEHICULOS_DISP_POR_FECHA="";
// export const URL_LISTA_ESTACIONES_DISP_POR_FECHA="";
export const Estados = {
    RECEPCIONADO: 0,
    VERIFICACION: 1,
    EJECUCION: 2,
    PREPARACION: 3,
    FINALIZADO: 4,
};
export const EstadosId = [
    0,
    1,
    2,
    3,
    4
];
export const EstadosNombres = [
    'Recepcionado',
    'Verificacion',
    'Ejecucion',
    'Preparacion',
    'Finalizado'
];
export const Servicios = {
    REVISION: 1,
    REPARACION: 2,
    CAMBIO: 3,
};
