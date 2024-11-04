import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.model';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  obetenerTodosLosUsuario(){
  
    return this.usuariosService.obtenerTodosLosUsuarios();

  }
  @Post()
  crearUsuario(@Body() usuario: Usuario) {
    return this.usuariosService.crearUsuario(usuario);
  }

  @Get(':id')
  obtenerUsuarioPorId(@Param('id') id: string) {
    return this.usuariosService.obtenerUsuarioPorId(Number(id));
  }

  @Put(':id')
  actualizarUsuario(@Param('id') id: string, @Body() usuario: Usuario) {
    return this.usuariosService.actualizarUsuario(Number(id), usuario);
  }

  @Delete(':id')
  borrarUsuario(@Param('id') id: string) {
    return this.usuariosService.borrarUsuario(Number(id));
  }
}
