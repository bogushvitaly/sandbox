import * as THREE from "three";

export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    // Random tree
    const N = 30;
    const gData = {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
    };

    const graph = engine.graphData(gData);

    const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
    const planeMaterial = new THREE.MeshLambertMaterial({
      color: 0x6f6f6f,
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(planeGeometry, planeMaterial);
    mesh.position.set(0, -200, -100);
    mesh.rotation.set(0.5 * Math.PI, 0, 0);

    graph.scene().add(mesh);
  }
}
