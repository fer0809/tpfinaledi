import { Injectable } from '@nestjs/common';
import { Cancion } from './canciones.model';

@Injectable()
export class CancionesService {
  private canciones = []; 
  private idCounter = 1;

  constructor() {
    const cancionesIniciales: Cancion[] = [
      { id: this.idCounter++, nombre: "Planets", artista: "Avenged Sevenfold" },
      { id: this.idCounter++, nombre: "Bohemian Rhapsody", artista: "Queen" },
      { id: this.idCounter++, nombre: "Hotel California", artista: "Eagles" },
      { id: this.idCounter++, nombre: "Imagine", artista: "John Lennon" },
      { id: this.idCounter++, nombre: "Sweet Child O' Mine", artista: "Guns N' Roses" }
    ];

    cancionesIniciales.forEach(cancion => this.canciones.push(cancion));
  }



  crearCancion(cancion: Cancion) {
    cancion.id = this.idCounter++;
    this.canciones.push(cancion);
    return cancion;
  }

  obtenerTodasCanciones() {
    return this.canciones;
  }

  obtenerPorId(id: number) {

    return this.canciones.filter(cancion => cancion.id === id)

  }

  obtenerCancionPorNombre(nombre: string) {
    return this.canciones.filter(cancion => cancion.nombre.includes(nombre));
  }

  obtenerCancionPorArtista(artista: string) {
    return this.canciones.filter(cancion => cancion.artista.includes(artista));
  }

  actualizarCancion(id: number, cancionActualizada: Cancion) {
    const cancionIndex = this.canciones.findIndex(cancion => cancion.id === id);
    if (cancionIndex !== -1) {
      Object.assign(this.canciones[cancionIndex], cancionActualizada);
      return this.canciones[cancionIndex];
    }
    return null;
  }

  borrarCancion(id: number) {
    const cancionIndex = this.canciones.findIndex(cancion => cancion.id === id);
    if (cancionIndex !== -1) {
      const cancionEliminada = this.canciones.splice(cancionIndex, 1);
      return cancionEliminada[0];
    }
    return null;
  }
}
