import { Injectable } from "@nestjs/common";
import { CreateDogDto } from "../Count/dto/createCount.dto";
import { Dog, DogInterface } from "../Count/interfaces/count.interface";

@Injectable()
export class DogService {
	dog: CreateDogDto | null = null;

	createDog(createDog: CreateDogDto):Dog {
		this.dog = new Dog(createDog.name, createDog.age, createDog.color);
		return this.dog;
	}

	getDog(): Dog {
		return
	}
}