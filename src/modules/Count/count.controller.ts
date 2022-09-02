import { Controller, Get } from '@nestjs/common';
import { CountService } from './count.service';

@Controller('count')
export class CountController {
	constructor(
		private readonly countSrv: CountService
	) { }

	@Get('/getCount')
	getCount(): string {
		this.countSrv.setCount('b');
		return this.countSrv.getCount();
	}
}