class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }
  honk(): void {
    console.log("beep");
  }
}
// class car will inherit all the same functions of Vehicle
class Car extends Vehicle {
  // you can override the methods in the child class
  drive(): void {
    console.log("vroom");
  }
}

const car = new Car();
car.drive();
car.honk();
