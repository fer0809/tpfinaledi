import { Module } from '@nestjs/common';
import { CancionesController } from './canciones.controller';
import { CancionesService } from './canciones.service';

@Module({
  controllers: [CancionesController],
  providers: [CancionesService],
})
export class CancionesModule {}
