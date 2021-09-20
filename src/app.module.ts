import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { typeORMconfig } from './config/typeorm.config';

@Module({
  imports: [BoardModule, TypeOrmModule.forRoot(typeORMconfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
