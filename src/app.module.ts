import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountModule } from './modules/Count/count.module';
import { DogModule } from './modules/Dog/dog.module';

@Module({
  imports: [CountModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
