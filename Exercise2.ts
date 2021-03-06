class Car {
    name : string;
    acceleration : number = 0;

    constructor(name:string) {
        this.name = name;
        this.acceleration = 0;
    }

    honk() {
        console.log(`${this.name} is saying: Tooooooooot!`)
    };
    accelerate (speed : number) {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);