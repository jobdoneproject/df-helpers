class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return this.greeting;
	}
}

export function sayHello() {
    var greeter = new Greeter("hi");
    return greeter.greet();
}
export function sayGoodbye() {
    var greeter = new Greeter("goodbye");
    return greeter.greet();
}

