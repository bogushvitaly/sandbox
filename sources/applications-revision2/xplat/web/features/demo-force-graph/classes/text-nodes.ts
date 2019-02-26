import * as THREE from "three";
import SpriteText from "three-spritetext";

export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    engine
      .jsonUrl("/assets/force-graph/miserables.json")
      .nodeAutoColorBy("group")
      .nodeThreeObject(node => {
        // use a sphere as a drag handle
        const obj = new THREE.Mesh(
          new THREE.SphereGeometry(10),
          new THREE.MeshBasicMaterial({
            depthWrite: false,
            transparent: true,
            opacity: 0
          })
        );

        // add text sprite as child
        const sprite = new SpriteText(node.id);
        sprite.color = node.color;
        sprite.textHeight = 8;
        obj.add(sprite);

        return obj;
      });

    // Spread nodes a little wider
    engine.d3Force("charge").strength(-1500);
  }
}
