import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // o módulo se torna global!
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
