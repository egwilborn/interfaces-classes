// const oldCivic = {
//   name: "civi",
//   year: 2000,
//   broken: true,
// };
// function printVehicle(vehicle: {
//     name: string;
//     year: number;
//     broken: boolean;
// }): void {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken? ${vehicle.broken}`);
// }
// printVehicle(oldCivic);

//^^annotating all our functions this way is not very efficient
// so instead we can use interface
// the interface Vehicle is like a variable that contains the types

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civi",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};
function printVehicle(vehicle: Vehicle): void {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
}
printVehicle(oldCivic);
