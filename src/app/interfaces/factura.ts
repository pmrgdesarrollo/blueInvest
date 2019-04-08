export interface Factura {
    nombrePagador: string ;
    valor: number;
    facturaNo: number ;
    plazo: number ;
    tasaRef: number;
    vencimiento: Date ;
    disponible: Date ;
    comentarios: string ;
}
