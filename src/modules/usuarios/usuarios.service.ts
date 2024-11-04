import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.model';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [];
  private idCounter = 1;
  constructor() {
    const usuariosIniciales: Usuario[] = [
      { id: this.idCounter++, nombre: "Juan", apellido: "Perez", ciudad: "Ciudad A" },
      { id: this.idCounter++, nombre: "Ana", apellido: "Gomez", ciudad: "Ciudad B" },
      { id: this.idCounter++, nombre: "Luis", apellido: "Martinez", ciudad: "Ciudad C" },
      { id: this.idCounter++, nombre: "Maria", apellido: "Lopez", ciudad: "Ciudad D" },
      { id: this.idCounter++, nombre: "Carlos", apellido: "Garcia", ciudad: "Ciudad E" },
    ];

    usuariosIniciales.forEach(usuario => this.usuarios.push(usuario));
  }

  crearUsuario(usuario: Usuario) {
    usuario.id = this.idCounter++;
    this.usuarios.push(usuario);
    return usuario;
  }

  obtenerTodosLosUsuarios() {

    return this.usuarios
  }

  obtenerUsuarioPorId(id: number) {
    return this.usuarios.find(user => user.id === id);
  }

  actualizarUsuario(id: number, usuarioActualizado: Usuario) {
    const usuarioIndex = this.usuarios.findIndex(user => user.id === id);
    if (usuarioIndex !== -1) {
      Object.assign(this.usuarios[usuarioIndex], usuarioActualizado);
      return this.usuarios[usuarioIndex];
    }
    return null;
  }

  borrarUsuario(id: number) {
    const usuarioIndex = this.usuarios.findIndex(user => user.id === id);
    if (usuarioIndex !== -1) {
      const usuarioEliminado = this.usuarios.splice(usuarioIndex, 1);
      return usuarioEliminado[0];
    }
    return null;
  }
}
