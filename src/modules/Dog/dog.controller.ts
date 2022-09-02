import { Body, Controller, Get, Post } from '@nestjs/common';
import { CountService } from '../Count/count.service';
import { CreateDogDto } from '../Count/dto/createCount.dto';
import { Dog } from '../Count/interfaces/count.interface';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
	constructor(
		private readonly countSrv: CountService,
		private readonly dogSrv: DogService,
	) { }


	@Get('getName')
	getName() {
		return this.countSrv.getCount();
	}

	@Post('create')
	createDog(@Body() createDogDto: CreateDogDto): Dog {
		return this.dogSrv.createDog(createDogDto);
	}

}