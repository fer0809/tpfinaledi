import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { Cancion } from './canciones.model';

@Controller('canciones')
export class CancionesController {
  constructor(private readonly cancionesService: CancionesService) {}

  @Post()
  crearCancion(@Body() cancion: Cancion) {
    return this.cancionesService.crearCancion(cancion);
  }

  @Get()
  obtenerTodasCanciones() {
    return this.cancionesService.obtenerTodasCanciones();
  }
  @Get(':id')
  obtenerCancionPorId(@Param('id') id : string){

    return this.cancionesService.obtenerPorId(Number(id));

  }

  @Get('nombre/:nombre')
  obtenerCancionPorNombre(@Param('nombre') nombre: string) {
    return this.cancionesService.obtenerCancionPorNombre(nombre);
  }

  @Get('artista/:artista')
  obtenerCancionPorArtista(@Param('artista') artista: string) {
    return this.cancionesService.obtenerCancionPorArtista(artista);
  }

  @Put(':id')
  actualizarCancion(@Param('id') id: string, @Body() cancion: Cancion) {
    return this.cancionesService.actualizarCancion(Number(id), cancion);
  }

  @Delete(':id')
  borrarCancion(@Param('id') id: string) {
    return this.cancionesService.borrarCancion(Number(id));
  }
}
