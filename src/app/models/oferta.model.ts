export class Oferta {


    constructor(
                 public fechaOferta: Date,
                 public valorOferta: Number,
                 public tasaOferta: Number,
                 public usuarioFactura?: string,
                 public factura?: String ,
                 public facturaValor?: Number,
                 public facturaFechaPago?: Date,
                 public estado?: boolean ,
                 public liberada?: boolean,
                 public fraccion?: Number,
                 public nombre?: String,
                 public cuenta?: Number,
                 public banco?: String,
                 public tipo?: String,
                 public pagando?: boolean,
                 public payU?: boolean,
                 public conSaldo?: boolean,
                 public transferencia?: boolean,
                 public pagoConfirmado?: boolean,
                 public pagoConfirmadoCorredor?: boolean ,
                 public cargarSaldo?: boolean ,
                 public transferir?: boolean ,
                 public pagoFecha?: Date,
                 public docsOf?: string,
                 public utilidad?: Number,
                 public utilidadFinal?: Number,
                 public pagadorPago?: boolean,
                 public _id?: String,
                 ) { }


}

