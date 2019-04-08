export class Oferta {


    constructor(

                 public valorOferta: Number,
                 public tasaOferta: Number,
                 public usuarioFactura?: string,
                 public factura?: String ,
                 public estado?: boolean ,
                 public liberada?: boolean,
                 public fraccion?: Number,
                 public nombre?: String,
                 public cuenta?: Number,
                 public banco?: String,
                 public tipo?: String,
                 public _id?: String,
                 ) { }


}

