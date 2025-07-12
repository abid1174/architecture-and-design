interface IFootballerRole {
  getRole(): string;
}

class Goalkeeper implements IFootballerRole {
  getRole(): string {
    return "goalkeeper";
  }
}

class Forward implements IFootballerRole {
  getRole(): string {
    return "forward";
  }
}

class Footballer {
  constructor(
    private name: string,
    private age: number,
    private role: IFootballerRole
  ) {}

  getFootballerRole() {
    return this.role.getRole();
  }
}

const kante11 = new Footballer("Ngolo Kante", 31, new Goalkeeper());
const hazard11 = new Footballer("Eden Hazard", 32, new Forward());

// add a new role

class Defender implements IFootballerRole {
  getRole(): string {
    return "defender";
  }
}
const alaba = new Footballer("Alaba", 25, new Defender());
