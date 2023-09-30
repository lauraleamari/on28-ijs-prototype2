import { Driver } from "./Driver.js";
export class Passenger {
	name;
	age;
	password;
	amountSpent = 0;

	static passengers = []

	constructor(name, age, password) {
		this.name = name;
		this.age = age;
		this.password = password;

		this.constructor.passengers.push({ name, age });
	}

	requestDrive(driver, amount, password) {
		if (!(driver instanceof Driver)) {
			console.log('Motorista inválido!');
			return;
		}
		if (password !== this.password) {
			console.log(`${this.name}, sua senha está incorreta!`);
			return;
		}
		this.amountSpent -= amount;
		driver.runDrive(amount);
	}

	static numberOfPassengers(){
		console.log(`Quantidade de motoristas cadastradas é ${Passenger.passengers.length}`)
	}

	static ageAverage(){

		// da profa
		const totalOfPassenger = Passenger.passengers.length;
		if(totalOfPassenger === 0) return;
		const sumOfAges = Passenger.passengers.reduce((total, passenger) => total + passenger.age, 0)
		const ageAverage = (sumOfAges / totalOfPassenger).toFixed(2);
		console.log(`A média de idade das passageiras é ${ageAverage}`);

		// let somaIdades = 0;

		// for (let i = 0; i < Passenger.passengers.length; i++) {
		// 	somaIdades += Passenger.passengers[i].age;
		// }

		// const mediaIdade = (somaIdades / Passenger.passengers.length).toFixed(2);

		// console.log(`A média de idade é ${mediaIdade}`);
	}
}