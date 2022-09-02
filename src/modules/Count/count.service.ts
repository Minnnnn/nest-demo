import { Injectable } from "@nestjs/common";

@Injectable()
export class CountService {
	private a: string = 'a';

	getCount(): string {
		return this.a;
	}

	setCount(a: string): boolean {
		this.a = a;
		return true;
	}
}