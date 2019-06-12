import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comercio } from 'src/app/models/comercio.model';
import { ComercioService } from 'src/app/services/comercio.service';
import { ComentarioService } from 'src/app/services/comentarios.service';
import { FormControl , FormGroup , Validators  } from '@angular/forms';
import { Comentario } from 'src/app/models/comentario.model';






@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {



  id;

  empresa: Comercio;


  forma: FormGroup;
  misComentarios: Comentario[] = [];
  calificacion = [];
  usuarios = 0;
  total = 0;



  datachart = [
    { data: [  , ,  ], label: 'Activos' },
    { data: [ , ,  ], label: 'Pasivos' }
  ];


  constructor( private ruta: ActivatedRoute  , private _empresa: ComercioService ,  private comentarioService: ComentarioService  ) {
    this.ruta.params.subscribe( params => this.id = params['id']  );
    console.log( this.id );


   }

  ngOnInit() {
this.obtenerEmpresa();

this.forma = new FormGroup( {
  rating: new FormControl( null , Validators.required ),
  comentario: new FormControl( null ,  Validators.required  ),
  pagador: new FormControl( null ,  Validators.required  ),
                               },
                               );

this.obtenerMisComentarios();
this.rating();

  }

  obtenerEmpresa() {
this._empresa.obtenerEmpresa( this.id ).subscribe( ( empresa: any ) => {this.empresa = empresa ;
this.datachart[1][0] = empresa.activos2016;
this.datachart = [ {data: [ parseFloat(empresa.activos2016) , parseFloat(empresa.activos2017) , parseFloat(empresa.activos2018)  ]
      , label: 'Activos'},
{data: [ parseFloat(empresa.pasivos2016) , parseFloat(empresa.pasivos2017) , parseFloat(empresa.pasivos2018)   ], label: 'Pasivos'}
];

console.log( this.datachart[1][0]);

    } );
  }

  obtenerMisComentarios( ) {
    this.comentarioService.cargarMisComentarios( this.id ).subscribe( (data: any) => {
    console.log(data);
    this.misComentarios = data ; } );
    }

      rating() {
      this.comentarioService.cargarMisComentarios( this.id ).subscribe( (data: any) => {
      // tslint:disable-next-line:forin
      for ( const rate in data ) { this.calificacion.push(data[rate].rating) ;  }
      console.log( this.calificacion ) ;
      let total = 0;
      for ( let i = 0 ; i < this.calificacion.length ; i ++  ) {
      this.usuarios = this.calificacion.length;
      // tslint:disable-next-line:no-unused-expression
      console.log(this.calificacion[i]) ;
      total += this.calificacion[i];
      this.total = total / this.calificacion.length ;
      }
       console.log( this.total );
      }) ;
      }

    calificar(forma) {
    console.log( forma.value );
    const comentario = new Comentario(
    this.forma.value.rating,
    this.forma.value.comentario,
    this.forma.value.pagador = this.id
    );
    this.comentarioService.crearComentario( comentario ).subscribe( data => console.log(data) );
    }



}
