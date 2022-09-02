export interface DogInterface {
	name: string;
	age: number;
	color: string;
}

export class Dog implements DogInterface {
	name: string;
	age: number;
	color: string;
	constructor(name: string, age: number, color: string) {
		this.name = name;
		this.age = age;
		this.color = color;
	}

}