import { Component } from '@angular/core';
import { Galeria } from './components/galeria/galeria';

@Component({
  selector: 'app-root',
  imports: [Galeria],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: { '[class.dark]': 'modoOscuro' }
})
export class App {
  modoOscuro = false;

  cambiarTema(): void {
    this.modoOscuro = !this.modoOscuro;
  }
}
