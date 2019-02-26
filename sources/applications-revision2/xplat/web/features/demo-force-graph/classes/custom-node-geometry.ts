import * as THREE from "three";

export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    // Random tree
    const N = 100;
    const gData = {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
    };

    const Graph = engine
      .nodeThreeObject(
        ({ id }) =>
          new THREE.Mesh(
            [
              new THREE.BoxGeometry(
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20
              ),
              new THREE.ConeGeometry(Math.random() * 10, Math.random() * 20),
              new THREE.CylinderGeometry(
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 20
              ),
              new THREE.DodecahedronGeometry(Math.random() * 10),
              new THREE.SphereGeometry(Math.random() * 10),
              new THREE.TorusGeometry(Math.random() * 10, Math.random() * 2),
              new THREE.TorusKnotGeometry(Math.random() * 10, Math.random() * 2)
            ][id % 7],
            new THREE.MeshLambertMaterial({
              color: Math.round(Math.random() * Math.pow(2, 24)),
              transparent: true,
              opacity: 0.75
            })
          )
      )
      .graphData(gData);
  }
}
