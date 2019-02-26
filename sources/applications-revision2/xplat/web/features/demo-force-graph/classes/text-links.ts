import * as THREE from "three";
import SpriteText from "three-spritetext";

export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    const Graph = engine
      .jsonUrl("/assets/force-graph/miserables.json")
      .nodeLabel(node => `<span style="color: #2b2b2b">${node.id}</span>`)
      .nodeAutoColorBy("group")
      .linkThreeObject(link => {
        // create line object
        const lineObj = new THREE.Line(
          new THREE.BufferGeometry(),
          new THREE.MeshLambertMaterial({
            color: "#797979",
            transparent: true,
            opacity: 0.2
          })
        );

        // add text sprite as child
        const sprite = new SpriteText(`${link.source} > ${link.target}`);
        sprite.color = "#797979";
        sprite.textHeight = 1.5;
        lineObj.add(sprite);

        return lineObj;
      })
      .linkPositionUpdate((obj, { start, end }) => {
        const middlePos = Object.assign(
          { x: start["x"] + (end["x"] - start["x"]) / 2 },
          { y: start["y"] + (end["y"] - start["y"]) / 2 },
          { z: start["z"] + (end["z"] - start["z"]) / 2 }
        );

        const textSprite = obj.children[0];

        // Position link text
        Object.assign(textSprite.position, middlePos);
      });

    // Spread nodes a little wider
    Graph.d3Force("charge").strength(-150);
  }
}
