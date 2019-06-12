export class Factura {


    constructor( public pagador: string,
                 public descontador: string,
                 public valor: number,
                 public numero: string,
                 public plazo: number,
                 public pagoEstimado: Date ,
                 public porcentaje: number,
                 public monto: number,
                 public tasa: number,
                 public vencimiento: Date,
                 public disponible: Date,
                 public comentarios?: string,
                 public docs?: string,
                 public usuario?: string,
                 public publicacion?: Date ,
                 public _id?: string,

                 ) { }


}

