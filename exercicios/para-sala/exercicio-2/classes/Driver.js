export class Driver {
	name;
	age;
	numberOfRides = 0;
	amountEarned = 0;

	static drivers =[]

	constructor(name, age) {
		if (age < 18) {
			return new Error(
				'É necessário ter mais de 18 anos para ser um motorista'
			);
		}
		this.name = name;
		this.age = age;
		this.constructor.drivers.push({ name, age });
		// Driver.drivers.push({ name, age }); tb pode ser assim
	}

	runDrive(amount) {
		this.amountEarned += amount;
		this.numberOfRides++;
	}

	static numberOfDrivers(){
		console.log(`Quantidade de motoristas é ${Driver.drivers.length}`)
		// console.log(`Quantidade de motoristas é ${this.drivers.length}`) tb dá pra se referir assim
	}

	static ageAverage(){
		// da profa
		const totalOfDrivers = Driver.drivers.length;
		if(totalOfDrivers === 0) return;
		const sumOfAges = Driver.drivers.reduce((total, driver) => total + driver.age, 0)
		const ageAverage = (sumOfAges / totalOfDrivers).toFixed(2);
		console.log(`A média de idade das motoristas é ${ageAverage}`);


		// let somaIdades = 0;

		// for (let i = 0; i < Driver.drivers.length; i++) {
		// 	somaIdades += Driver.drivers[i].age;
		// }

		// const mediaIdade = (somaIdades / Driver.drivers.length).toFixed(2);

		// console.log(`A média de idade é ${mediaIdade}`);
	}
}