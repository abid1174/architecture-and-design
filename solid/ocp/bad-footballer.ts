class BadFootballer {
  private name: string;
  private age: number;
  private role: string;

  constructor(name: string, age: number, role: string) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  getFootballerRole() {
    switch (this.role) {
      case "goalkeeper":
        console.log(`The footballer, ${this.name} ${this.age} is a goalkeeper`);
        break;
      case "defender":
        console.log(`The footballer, ${this.name} ${this.age} is a defender`);
        break;
      case "midfielder":
        console.log(`The footballer, ${this.name} ${this.age} is a midfielder`);
        break;
      case "forward":
        console.log(
          `The footballer, ${this.name} ${this.age} plays in the forward line`
        );
        break;
      default:
        throw new Error(`Unsupported footballer role: ${this.role}`);
    }
  }
}

const kante = new BadFootballer("Ngolo Kante", 31, "midfielder");
const hazard = new BadFootballer("Eden Hazard", 32, "forward");

kante.getFootballerRole(); // The footballer, Ngolo Kante is a midfielder
hazard.getFootballerRole(); // The footballer, Eden Hazard plays in the forward line

// Problem:
// 1. If we want to add a new role, we need to modify the Footballer class
