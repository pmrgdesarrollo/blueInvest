import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { SubirArchivoService } from './subir-archivo.service';
import { URL_SERVICIOS } from '../config/config';
import { map, filter } from 'rxjs/operators';
import { Natural } from '../models/natural.model';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class NaturalService {

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuariosService,
    public _subirArchivo: SubirArchivoService,
  ) { }

  totalPersonasNaturales;
  personaNatural;



  cargarFactura() {

    const url = URL_SERVICIOS + '/natural';
    return this.http.get( url ).pipe(
                                     map( (resp: any) => {
                                     this.totalPersonasNaturales = resp.total;
                                     console.log(resp.usuarios);
                                     return resp.usuarios;
                                     })
                                    );
                                  }



                                  crearPersonaN( natural:  Natural ) {
                                    let url = URL_SERVICIOS + '/natural';
                                    url += '?token=' + this._usuarioService.token;
                                    return this.http.post( url, natural ).pipe(
                                    map( (resp: any) =>  {
                                    swal( 'Información publicada con exito!!!', 'success'  );
                                    return  resp.naturalCreado ;
                                    } )

                                    );

                                    }

                                    cambiarImagen( archivo: File , id: string ) {
                                    this._subirArchivo.subirArchivo( archivo , 'naturales' , id ).then(
                                    ( resp: any )  => {
                                    }).catch( resp => console.log( resp ));  }





}
