import { Module, NestModule } from '@nestjs/common';
import { CountModule } from '../Count/count.module';
import { CountService } from '../Count/count.service';
import { DogController } from './dog.controller';

@Module({
	imports: [CountModule],
	controllers: [DogController],
})
export class DogModule { }