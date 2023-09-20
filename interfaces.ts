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

interface Reportable {
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

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} g of sugar`;
  },
};
function printSummary(item: Reportable): void {
  console.log(item.summary());
}
printSummary(oldCivic);
printSummary(drink);

//typescript checks to see if the vehicle passed into the printVehicle function has more properties than whats defined in the interface, typescript won't recognize this as a problem
