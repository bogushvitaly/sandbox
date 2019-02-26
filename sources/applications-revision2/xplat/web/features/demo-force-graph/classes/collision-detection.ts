import * as d3 from "d3";

export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    const N = 50;
    const nodes = [...Array(N).keys()].map(() => ({
      // Initial velocity in random direction
      vx: Math.random(),
      vy: Math.random(),
      vz: Math.random()
    }));

    const Graph = engine;

    Graph.cooldownTime(Infinity)
      .d3AlphaDecay(0)
      .d3VelocityDecay(0)

      // Deactivate existing forces
      .d3Force("center", null)
      .d3Force("charge", null)

      // Add collision and bounding box forces
      .d3Force("collide", d3.forceCollide(Graph.nodeRelSize()))
      .d3Force("box", () => {
        const CUBE_HALF_SIDE = Graph.nodeRelSize() * N * 0.5;

        nodes.forEach(node => {
          const x = (node as any).x || 0,
            y = (node as any).y || 0,
            z = (node as any) || 0;

          // bounce on box walls
          if (Math.abs(x) > CUBE_HALF_SIDE) {
            node.vx *= -1;
          }
          if (Math.abs(y) > CUBE_HALF_SIDE) {
            node.vy *= -1;
          }
          if (Math.abs(z) > CUBE_HALF_SIDE) {
            node.vz *= -1;
          }
        });
      })

      // Add nodes
      .graphData({ nodes, links: [] });
  }
}