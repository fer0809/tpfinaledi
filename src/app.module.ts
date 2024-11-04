import { Module } from '@nestjs/common';

import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { CancionesModule } from './modules/canciones/canciones.module';

@Module({
  imports: [UsuariosModule, CancionesModule],
})
export class AppModule {}
