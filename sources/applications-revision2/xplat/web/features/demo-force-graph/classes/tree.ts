import * as d3 from "d3";
import * as d3Dsv from "d3-dsv";

export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    // graph config
    const NODE_REL_SIZE = 1;

    var attractForce = d3
      .forceManyBody()
      .strength(80)
      .distanceMax(400)
      .distanceMin(80);
    var collisionForce = d3
      .forceCollide(12)
      .strength(1)
      .iterations(100);

    const graph = engine
      .dagMode("td")
      .dagLevelDistance(200)
      .linkColor(() => "rgba(255,255,255,0.8)")
      .nodeRelSize(NODE_REL_SIZE)
      .nodeId("path")
      .nodeVal("size")
      .nodeLabel(node => `<span style="color: #2b2b2b">${node.path}</span>`)
      .nodeAutoColorBy("module")
      .nodeOpacity(0.9)
      .linkDirectionalParticles(2)
      .linkDirectionalParticleWidth(0.8)
      .linkDirectionalParticleSpeed(0.006)
      .d3Force(
        "collision",
        d3.forceCollide(node => Math.cbrt((node as any).size) * NODE_REL_SIZE)
      )
      .d3VelocityDecay(0.3);

    fetch("/assets/force-graph/d3-dependencies.csv")
      .then(r => r.text())
      .then((d3Dsv as any).csvParse)
      .then(data => {
        const nodes = [],
          links = [];
        (data as any).forEach(({ size, path }) => {
          const levels = path.split("/"),
            level = levels.length - 1,
            module = level > 0 ? levels[1] : null,
            leaf = levels.pop(),
            parent = levels.join("/");

          const node = {
            path,
            leaf,
            module,
            size: +size || 20,
            level
          };

          nodes.push(node);

          if (parent) {
            links.push({ source: parent, target: path, targetNode: node });
          }
        });

        engine.graphData({ nodes, links });
      });
  }
}
