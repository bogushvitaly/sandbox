/**
 * Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
 */

interface Adapter {
  request(newParam: string): void;
}

class OldInterface {
  requestInOldWay(oldParam: any): void {}
}

class InterfaceAdapter implements Adapter {
  request(newParam: string): void {
    const old = new OldInterface();
    old.requestInOldWay({});
  }
}

(function main() {
  const adapter = new InterfaceAdapter();
  adapter.request('param');
})();
