/**
 * Using the proxy pattern, a class represents the functionality of another class.
 */

interface IResource {
  fetch(): void;
}

class Resource implements IResource {
  fetch(): void {
    console.log('fetch resource');
  }
}

class ResourceProxy implements IResource {
  private resource: Resource;

  constructor() {
    this.resource = new Resource();
  }

  fetch(): void {
    console.log('invoke resource fetch method');
    this.resource.fetch();
  }
}

(function main() {
  const proxy = new ResourceProxy();
  proxy.fetch();
})();
