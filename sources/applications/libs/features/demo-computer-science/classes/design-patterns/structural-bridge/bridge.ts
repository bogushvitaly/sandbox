/**
 * Bridge pattern is about preferring composition over inheritance.
 * Implementation details are pushed from a hierarchy to another object with a separate hierarchy.
 */

class Commander {
  executeObject: Executive;

  constructor(executeObject: Executive) {
    this.executeObject = executeObject;
  }

  order(): void {
    this.executeObject.operate();
  }
}

class AirForceCommander extends Commander {
  order(): void {
    console.log('Air Force commander make order');
    // extra logics here
    super.order();
  }
}

class SpecialForceCommander extends Commander {
  order(): void {
    console.log('Special Force commander make order');
    // extra logics here
    super.order();
  }
}

interface Executive {
  operate(): void;
}

class PilotExecutive implements Executive {
  operate(): void {
    console.log('Fly');
  }
}

class SoldierExecutive implements Executive {
  operate(): void {
    console.log('Shoot');
  }
}

(function main() {
  const commanderA = new AirForceCommander(new PilotExecutive());
  const commanderB = new SpecialForceCommander(new SoldierExecutive());

  commanderA.order();
  commanderB.order();
})();
