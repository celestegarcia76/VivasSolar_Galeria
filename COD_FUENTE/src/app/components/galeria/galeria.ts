import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Imagen } from '../imagen/imagen';

// Datos de cada imagen de la galeria.
export interface ImagenGaleria {
  titulo: string;
  descripcion: string;
  categoria: string;
  ruta: string;
  fuente: string;
  enlaceFuente?: string;
}

@Component({
  selector: 'app-galeria',
  imports: [CommonModule, Imagen],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {
  categorias: string[] = ['Todas', 'Instalaciones', 'Equipos', 'Supervisión'];
  filtro: string = 'Todas';
  imagenSeleccionada: ImagenGaleria | null = null;

  // array de omagenes.
  imagenes: ImagenGaleria[] = [
    {
      titulo: 'Parque fotovoltaico',
      descripcion: 'Vista general de un panel en una instalación.',
      categoria: 'Instalaciones',
      ruta: 'img/parque-fotovoltaico.jpeg',
      fuente: 'Imagen local'
    },
    {
      titulo: 'Distribución de módulos',
      descripcion: 'Filas de módulos fotovoltaicos en un paque solar.',
      categoria: 'Instalaciones',
      ruta: 'img/distribucion_modulos.png',
      fuente: 'Imagen local'
    },
    {
      titulo: 'Inversores',
      descripcion: 'Equipo necesario para la transformacion de energia.',
      categoria: 'Equipos',
      ruta: 'img/inversor.png',
      fuente: 'Imagen local'
    },
    {
      titulo: 'Centro de transformación',
      descripcion: 'Instalación que adapta la tension, ademas de generar un lugar donde añadir los cuadros de monitoreo',
      categoria: 'Equipos',
      ruta: 'img/ct.jpg',
      fuente: 'Imagen local'
    },
    {
      titulo: 'Sistema SCADA',
      descripcion: 'Pantallas de supervisión de datos, estados y alarmas de una planta.',
      categoria: 'Supervisión',
      ruta: 'img/scada.jpg',
      fuente: 'Imagen local'
    },
    {
      titulo: 'Sala de control',
      descripcion: 'Ejemplo de un puesto de supervisión de instalaciones fotovoltaica',
      categoria: 'Supervisión',
      ruta: 'img/sala-control.jpg',
      fuente: 'Imagen local'
    }
  ];

  // Devuelve todas las imágenes o solamente las de la categoría elegida.
  get imagenesFiltradas(): ImagenGaleria[] {
    if (this.filtro === 'Todas') {
      return this.imagenes;
    }
    return this.imagenes.filter(imagen => imagen.categoria === this.filtro);
  }

  cambiarFiltro(categoria: string): void {
    this.filtro = categoria;
  }

  abrir(imagen: ImagenGaleria): void {
    this.imagenSeleccionada = imagen;
  }

  cerrar(): void {
    this.imagenSeleccionada = null;
  }

  anterior(): void {
    if (this.imagenSeleccionada) {
      const posicion = this.imagenesFiltradas.indexOf(this.imagenSeleccionada);
      const anterior = (posicion - 1 + this.imagenesFiltradas.length) % this.imagenesFiltradas.length;
      this.imagenSeleccionada = this.imagenesFiltradas[anterior];
    }
  }

  siguiente(): void {
    if (this.imagenSeleccionada) {
      const posicion = this.imagenesFiltradas.indexOf(this.imagenSeleccionada);
      const siguiente = (posicion + 1) % this.imagenesFiltradas.length;
      this.imagenSeleccionada = this.imagenesFiltradas[siguiente];
    }
  }
}
