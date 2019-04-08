import { Component, OnInit } from '@angular/core';
import { Pagador } from 'src/app/models/pagador.model';
import { PagadorService } from '../../services/pagador.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Comentario } from 'src/app/models/comentario.model';
import { ComentarioService } from 'src/app/services/comentarios.service';




@Component({
  selector: 'app-pagador',
  templateUrl: './pagador.component.html',
  styleUrls: ['./pagador.component.css']
})
export class PagadorComponent implements OnInit {

  forma: FormGroup;

  pagador: Pagador;
  misComentarios: Comentario[] = [];

  id;
  total = 0;
  usuarios = 0;

  calificacion = [];

  constructor( private pagadorService: PagadorService ,
               private ruta: ActivatedRoute,
               private comentarioService: ComentarioService ) {

  this.ruta.params.subscribe( params => this.id = params['id']  );
  console.log( this.id );


  }

  ngOnInit() {

  this.obtenerMisComentarios() ;
  this.rating();

  this.obtenerPagador( this.id );
  this.forma = new FormGroup( {
  rating: new FormControl( null , Validators.required ),
  comentario: new FormControl( null ,  Validators.required  ),
  pagador: new FormControl( null ,  Validators.required  ),
                             },
                             );

  }

  obtenerPagador( id: string ) {
  this.pagadorService.obtenerPagador( id ).subscribe( pagador => this.pagador = pagador );
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
