import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Natural } from '../../../models/natural.model';
import { NaturalService } from '../../../services/natural.service';


@Component({
  selector: 'app-persona-natural',
  templateUrl: './persona-natural.component.html',
  styleUrls: ['./persona-natural.component.css']
})
export class PersonaNaturalComponent implements OnInit {

  imagenSubir: File ;
  imagenSubir2: File;
  imagenSubir3: File;
  imagenSubir4: File;

id;

  forma: FormGroup;

  constructor( private _personaNatural: NaturalService  ) { }

  ngOnInit() {

    this.forma = new FormGroup( {
      tipoSolicitante: new FormControl( null , Validators.required ),
      nombre: new FormControl( null , Validators.required ),
      documento: new FormControl( null , Validators.required ),
      sexo: new FormControl( null , Validators.required ),
      nacimiento: new FormControl( null , Validators.required ),
      pais: new FormControl( null , Validators.required ),
      estadoCivil: new FormControl( null , Validators.required ),
      dirResidencia: new FormControl( null , Validators.required ),
      ciudad: new FormControl( null , Validators.required ),
      telefono: new FormControl( null , Validators.required ),
      dirCorrespondencia: new FormControl( null , Validators.required ),
      ciudadOf: new FormControl( null , Validators.required ),
      celular: new FormControl( null , Validators.required ),
      tipoB: new FormControl( null , Validators.required ),
      nombreB: new FormControl( null , Validators.required ),
      documentoB: new FormControl( null , Validators.required ),
      sexoB: new FormControl( null , Validators.required ),
      nacimientoB: new FormControl( null , Validators.required ),
      paisB: new FormControl( null , Validators.required ),
      estadoCivilB: new FormControl( null , Validators.required ),
      dirResidenciaB: new FormControl( null , Validators.required ),
      ciudadB: new FormControl( null , Validators.required ),
      telefonoB: new FormControl( null , Validators.required ),
      dirCorrespondenciaB: new FormControl( null , Validators.required ),
      ciudadBof: new FormControl( null , Validators.required ),
      celularB: new FormControl( null , Validators.required ),
      profesion: new FormControl( null , Validators.required ),
      empresa: new FormControl( null , Validators.required ),
      cargo: new FormControl( null , Validators.required ),
      ingresos: new FormControl( null , Validators.required ),
      activos: new FormControl( null , Validators.required ),
      pasivos: new FormControl( null , Validators.required ),
      entidad: new FormControl( null , Validators.required ),
      tipo: new FormControl( null , Validators.required ),
      numero: new FormControl( null , Validators.required ),
      titular: new FormControl( null , Validators.required ),
      doc1: new FormControl( null , Validators.required ),
      doc2: new FormControl( null , Validators.required ),
      doc3: new FormControl( null , Validators.required ),
      doc4: new FormControl( null , Validators.required ),
      // doc5: new FormControl( null , Validators.required ),
      aprobabo: new FormControl( false , Validators.required ),

      },

      );

  }


  // CARGA DE IMAGENES //

seleccionImagen( archivo: File ) {
  console.log( event );
  if ( !archivo ) { this.imagenSubir = null ; return ; } this.imagenSubir = archivo ;
  }



  seleccionImagen2( archivo: File ) {
    console.log( event );
    if ( !archivo ) { this.imagenSubir = null ; return ; } this.imagenSubir2 = archivo ;
    }

    seleccionImagen3( archivo: File ) {
      console.log( event );
      if ( !archivo ) { this.imagenSubir = null ; return ; } this.imagenSubir3 = archivo ;
      }

      seleccionImagen4( archivo: File ) {
        console.log( event );
        if ( !archivo ) { this.imagenSubir = null ; return ; } this.imagenSubir4 = archivo ;
        }




  publicarDatos(forma) {

    console.log( forma.value );

    const natural = new Natural (

      this.forma.value.tipoSolicitante,
      this.forma.value.nombre,
      this.forma.value.documento,
      this.forma.value.sexo,
      this.forma.value.nacimiento,
      this.forma.value.pais,
      this.forma.value.estadoCivil,
      this.forma.value.dirResidencia,
      this.forma.value.ciudad,
      this.forma.value.telefono,
      this.forma.value.dirCorrespondencia,
      this.forma.value.ciudadOf,
      this.forma.value.celular,
      this.forma.value.tipoB,
      this.forma.value.nombreB,
      this.forma.value.documentoB,
      this.forma.value.sexoB,
      this.forma.value.nacimientoB,
      this.forma.value.paisB,
      this.forma.value.estadoCivilB,
      this.forma.value.dirResidenciaB,
      this.forma.value.ciudadB,
      this.forma.value.telefonoB,
      this.forma.value.dirCorrespondenciaB,
      this.forma.value.ciudadBof,
      this.forma.value.celularB,
      this.forma.value.profesion,
      this.forma.value.empresa,
      this.forma.value.cargo,
      this.forma.value.ingresos,
      this.forma.value.activos,
      this.forma.value.pasivos,
      this.forma.value.entidad,
      this.forma.value.tipo,
      this.forma.value.numero,
      this.forma.value.titular,
      this.forma.value.doc1,
      this.forma.value.doc2,
      this.forma.value.doc3,
      this.forma.value.doc4,
      this.forma.value.aprobabo,



      );

      this._personaNatural.crearPersonaN( natural ).subscribe(( data: any ) => {
      this.id = data._id;
        console.log( 'Natural prueba' , natural );
        console.log( 'data' , data );


});

}

cambiarImagen() {
this._personaNatural.cambiarImagen( this.imagenSubir , this.id );
}

}
