import { Module, NestModule } from '@nestjs/common';
import { CountModule } from '../Count/count.module';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
	imports: [CountModule],
	controllers: [DogController],
	providers: [DogService]
})
export class DogModule { }