const idade = 18;
export class Driver {
  name;
  age;
  numberOfRides = 0;
  amountEarned = 0;

  constructor(name, age) {
    if(age >= idade) {
      this.name = name;
      this.age = age;
    } else {
      // console.log('Idade não suficiente');
      throw "Você precisa ter 18 anos ou mais para ser motorista."
    }
  }
  runDrive(amount) {
    // this.numberOfRides += amount;
    this.numberOfRides++
    this.amountEarned += amount
  }

}

