import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario.model';
import { FormControl , FormGroup , Validators  } from '@angular/forms';
import { ComentarioService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  id;
  forma: FormGroup;
  misComentarios: Comentario[] = [];
  calificacion = [];
  usuarios = 0;
  total = 0;

  constructor( private _usuarioService: UsuariosService ,
  private ruta: ActivatedRoute ,
  private comentarioService: ComentarioService) { this.ruta.params.subscribe( params => this.id = params['id'] );
  }

  ngOnInit() {
  this.obtenerUsuario();
  this.obtenerMisComentarios() ;
  this.rating();


  this.forma = new FormGroup( {
  rating: new FormControl( null , Validators.required ),
  comentario: new FormControl( null ,  Validators.required  ),
  pagador: new FormControl( null ,  Validators.required  ),
                               },
                               );
  }

  obtenerUsuario( ) {
  this._usuarioService.buscarUsuario(this.id).subscribe( usuario => this.usuario = usuario );
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
