import { Controller, Get, Header, HttpCode, Param, Redirect } from '@nestjs/common';
import { CountService } from './count.service';

@Controller('count')
export class CountController {
	constructor(
		private readonly countSrv: CountService
	) { }

	@Get('/getCount/:id/:name')
	@Header('Cache-Control', 'none')
	@HttpCode(202)
	getCount(@Param() params: Object, @Param('id') id: string): string {
		console.log('params: ', params, id)
		this.countSrv.setCount('b');
		return this.countSrv.getCount();
	}
}