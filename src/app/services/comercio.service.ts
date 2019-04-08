import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { URL_SERVICIOS } from '../config/config' ;
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Comercio } from '../models/comercio.model';


@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  totalEmpresas;

  constructor(     public http: HttpClient,
                   public _usuarioService: UsuariosService ) {
                    }

                    cargarEmpresa( desde: Number = 0 ) {

                      const url = URL_SERVICIOS + '/comercio?desde=' + desde ;
                      return this.http.get( url ).pipe(
                                                        map( (resp: any) => {
                                                        this.totalEmpresas = resp.total;
                                                        return resp.empresas;
                                                        })
                                                        );
                  }

                  obtenerEmpresa( id: string ) {
                  const url = URL_SERVICIOS + '/comercio/' + id;
                  return this.http.get( url ).pipe(
                                                  map( (resp: any) => resp.empresa) );
                  }

                  crearEmpresa( empresa: Comercio ) {
                  let url = URL_SERVICIOS + '/comercio';
                  url += '?token=' + this._usuarioService.token;

                  return this.http.post( url, empresa ).pipe(
                  map( (resp: any) =>  {
                  console.log('empresa creada' , resp );
                  swal( 'Empresa creada correctamente' , empresa.nombre_de_establecimiento , 'success'  );
                  return resp.comercioGuardado;
                  } )

                  );

                  }

                  actualizarEmpresa( empresa: Comercio ) {
                  let url = URL_SERVICIOS + '/comercio/' + empresa._id;
                  url += '?token=' + this._usuarioService.token;

                  return this.http.put( url, empresa ).pipe(
                  map( (resp: any) => {

                  swal('Pagador Actualiado', empresa.nombre_de_establecimiento, 'success');
                  return resp.empresaEditada;
                  })
                  );

                  }

                  buscarEmpresa( termino: string ) {
                  const url = URL_SERVICIOS + '/busqueda/coleccion/empresas/' + termino;
                  return this.http.get( url ).pipe(
                  map( (resp: any) => resp.empresas )
                  );
                  }


}
