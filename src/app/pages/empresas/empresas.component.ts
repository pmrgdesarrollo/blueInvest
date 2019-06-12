import { Component, OnInit } from '@angular/core';
import { Comercio } from 'src/app/models/comercio.model';
import { ComercioService } from 'src/app/services/comercio.service';
import { Router } from '@angular/router';
import { FormControl , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  forma: FormGroup;

  empresas: Comercio[] = [] ;
  desde = 0;
  total;

  cargando = false ;

  constructor( private _empresas: ComercioService , private ruta: Router ) {

  }

  ngOnInit() {
    this.cargarEmpresas();

    this.forma = new FormGroup( {
      nombre_de_establecimiento: new FormControl( null , Validators.required ),
      actividad: new FormControl( null , Validators.required ),
      nit: new FormControl( null ,  Validators.required  ),
      direccion: new FormControl( null ,  Validators.required  ),
      telefono: new FormControl( null ,  Validators.required  ),
      activos2016: new FormControl( null ,  Validators.required  ),
      activos2017: new FormControl( null ,  Validators.required  ),
      activos2018: new FormControl( null ,  Validators.required  ),
      pasivos2016: new FormControl( null ,  Validators.required  ),
      pasivos2017: new FormControl( null ,  Validators.required  ),
      pasivos2018: new FormControl( null ,  Validators.required  ),
      neta2016: new FormControl( null ,  Validators.required  ),
      neta2017: new FormControl( null ,  Validators.required  ),
      neta2018: new FormControl( null ,  Validators.required  ),
                                },

      );

  }

  publicarEmpresa( forma ) {

    console.log(forma.value);

          const empresa = new Comercio(

          this.forma.value.nombre_de_establecimiento,
          this.forma.value.actividad,
          this.forma.value.nit,
          this.forma.value.direccion,
          this.forma.value.telefono,
          this.forma.value.activos2016,
          this.forma.value.activos2017,
          this.forma.value.activos2018,
          this.forma.value.pasivos2016,
          this.forma.value.pasivos2017,
          this.forma.value.pasivos2018,
          this.forma.value.neta2016,
          this.forma.value.neta2017,
          this.forma.value.neta2018,

          );

        this._empresas.crearEmpresa( empresa ).subscribe(( data: any ) => {
         console.log( 'empresa prueba' , empresa );
         console.log( 'data' , data );


 } );

    }

  cargarEmpresas() {

    this.cargando = true ;

    this._empresas.cargarEmpresa( this.desde ).subscribe( (data: any) => { this.empresas = data ;
    this.total = this._empresas.totalEmpresas;
    console.log(data ); } );

    this.cargando = false ;

  }

  cambiarDesde( valor: number ) {

    const desde = this.desde + valor ;

    if ( desde >= this.total  ) { return;  }
    if ( desde < 0 ) { return; }

    this.desde += valor ;

    this.cargarEmpresas();

}

buscarEmpresa(termino: string) {

  if ( termino.length <= 0 ) { this.cargarEmpresas() ; return ;  }
  this._empresas.buscarEmpresa( termino ).subscribe( ( empresas: Comercio[] ) => {
  this.empresas = empresas;
  console.log( empresas );

  });


}

verEmpresa( id ) {

this._empresas.obtenerEmpresa( id ).subscribe( data => { console.log( data ) ;
return this.ruta.navigate(['/empresa' , id ]) ; });

}

}
