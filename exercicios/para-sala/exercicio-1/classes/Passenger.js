import { Driver } from "./Driver.js";

const idade = 18;
export class Passenger {
  name;
  age;
  password;
  amountSpent = 0;

  constructor(name, age, password) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  requestDrive(driver, amount, password){
    if(password !== this.password) {
      console.log('Senha inválida')
      return
    }

    if(!(driver instanceof Driver)){
      console.log('O parâmetro motorista é inválido')
      return
    }

    this.amountSpent -= amount
    driver.runDrive(amount)
  }
}

