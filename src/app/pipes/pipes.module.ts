import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { OfertaPipe } from './oferta.pipe';


@NgModule({
  declarations: [

    ImagenPipe,

    OfertaPipe,
  ],
exports: [
  ImagenPipe,
  OfertaPipe,
],

  imports: [

  ]
})
export class PipesModule { }
