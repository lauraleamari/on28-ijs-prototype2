export class Person {
  name;
	age;
  #amount = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get amount() { //agem como se fossem atributos - para o caso de super, ai não entra
		return this.#amount;
	}

	set amount(newAmount) { //agem como se fossem atributos - para o caso de super, ai não entra
		this.#amount = newAmount;
	}

  static numberOfPersons(persons) {
    return persons.length;
	}

  static ageAverage(persons) {
    const totalOfPersons = persons.length;

    if(totalOfPersons === 0) return 0;

    const ageSum = persons.reduce((total, person) => total + person.age, 0)
		const ageAverage = (ageSum / totalOfPersons).toFixed(2);
		return ageAverage;
	}
}