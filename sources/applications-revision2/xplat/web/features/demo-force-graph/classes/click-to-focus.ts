export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    const Graph = engine
      .jsonUrl("/assets/force-graph/miserables.json")
      .nodeLabel("id")
      .nodeAutoColorBy("group")
      .onNodeHover(node => (element.style.cursor = node ? "pointer" : null))
      .onNodeClick(node => {
        // Aim at node from outside it
        const distance = 40;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

        Graph.cameraPosition(
          {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio
          }, // new position
          node, // lookAt ({ x, y, z })
          3000 // ms transition duration
        );
      });
  }
}
