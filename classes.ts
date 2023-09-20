class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep");
  }
}
const vehicle = new Vehicle("orange");
console.log(vehicle.color);

// class car will inherit all the same functions of Vehicle
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // you can override the methods in the child class
  //adding private keyword only allows you to call the drive method within this class
  private drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
