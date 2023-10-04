// na herança a classe filha primeiro vai olhar pra dentro de si mesma. Por isso, conseguimos sobreescrever, dá preferencia pro que tem primeiro dentro da propria classe.
class Person {
  name;
  age;

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}
}

class User extends Person {
  email;
  password;

  constructor(name, age, email, password) {
    super(name, age); //passa os parametros que sao pedidos no construtor mãe. no construtor sempre tem que ser a primeira coisa. Precisa passar name e age pra fazer associação da função da mãe. Não é usado para atributo (super)
    this.email = email;
    this.password = password;
  }

  //sobreescrevendo o método
  speak(){
    console.log(`A usuária ${this.name} está falando`) //por completo
  }

  //utilizar o que a classe mae ja faz e quero colocar algo a mais
  speak(){
    super.speak() //super com o nome do metedo pro programa pegar na classe mae, executar e depois voltar pra ca. Se tiver parametro no metodo, tb tenho que passar aqui, pq são funções.
    console.log(`Essa pessoa é uma usuária.`)

    // o super nao precisa vir antes, mas inverte a ordem do texto se estiver depois
    // dentro de outro metodo, posso chamar um metodo diferente sem ser do mesmo nome, se fizer sentido.
  }
}

const user1 = new User('Luara', 28, 'luara@email.com', 123);
console.log(user1)
user1.speak();
