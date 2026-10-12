import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { ImagenGaleria } from '../galeria/galeria';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.html',
  styleUrl: './imagen.css'
})
export class Imagen {
  @Input() imagen!: ImagenGaleria;
  @Output() seleccionar = new EventEmitter<ImagenGaleria>();

  seleccionarImagen(): void {
    this.seleccionar.emit(this.imagen);
  }
}
