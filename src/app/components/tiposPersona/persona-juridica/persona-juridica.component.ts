import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-persona-juridica',
  templateUrl: './persona-juridica.component.html',
  styleUrls: ['./persona-juridica.component.css']
})
export class PersonaJuridicaComponent implements OnInit {

imagenSubir: File;
forma: FormGroup;

  constructor() { }

  ngOnInit() {
this.forma = new FormGroup( {
razon: new FormControl( null ,  ),
nit: new FormControl( null , ),
representante: new FormControl( null , ),
cargo: new FormControl( null ,  ),
documento: new FormControl( null , ),
expedido: new FormControl( null ,  ),
clasificacion: new FormControl( null ,  ),
actividad: new FormControl( null , ),
constitucion: new FormControl( null ,  ),
vigencia: new FormControl( null , ),
capital: new FormControl( null , ),
empleados: new FormControl( null , ),
direccion: new FormControl( null ,  ),
telefono: new FormControl( null , ),
fax: new FormControl( null ,  ),
celular: new FormControl( null , ),
ingresos: new FormControl( null ,  ),
activos: new FormControl( null ,  ),
pasivos: new FormControl( null , ),
patrimonio: new FormControl( null , ),
entidad:  new FormControl( null ,  ),
tipo: new FormControl( null , ),
numero: new FormControl( null ,  ),
titular: new FormControl( null ,  ),
empresa: new FormControl( null , ),
ciudad: new FormControl( null ,  ),
telefono2: new FormControl( null , ),
nombreA: new FormControl( null , ),
documentoA: new FormControl( null , ),
cargoA: new FormControl( null ,  ),
telefonoA: new FormControl( null , ),
doc1: new FormControl( null , ),
doc2: new FormControl( null , ),
doc3: new FormControl( null ,  ),
doc4: new FormControl( null , ),
// doc5: new FormControl( null , Validators.required ),
aprobabo: new FormControl( false ,  ),
},



      );
  }

// CARGA DE IMAGENES //

seleccionImagen( archivo: File ) {
  console.log( event );
  if ( !archivo ) { this.imagenSubir = null ; return ; } this.imagenSubir = archivo ;
  }


  publicarDatos(forma) {
  console.log( forma.value );

  }


}


