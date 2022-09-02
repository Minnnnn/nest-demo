import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		console.log('====================================');
		console.log('%c Request\n', 'color:#0f0;');
		console.log(req);

		console.log('====================================');
		console.log('%c Response\n', 'color:#0f0;');
		console.log(res);

		next();
	}
}