import { Controller, Get } from '@nestjs/common';
import { CountService } from '../Count/count.service';

@Controller('dog')
export class DogController {
	constructor(
		private readonly countSrv: CountService
	) { }


	@Get('getName')
	getName() {
		return this.countSrv.getCount();
	}


}