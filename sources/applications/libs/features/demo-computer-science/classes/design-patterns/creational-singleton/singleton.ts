/**
 * Ensures that only one object of a particular class is ever created.
 */

class Singleton {
  private static instance: Singleton;

  constructor() {}

  static get sharedInstance() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    return new Singleton();
  }
}
