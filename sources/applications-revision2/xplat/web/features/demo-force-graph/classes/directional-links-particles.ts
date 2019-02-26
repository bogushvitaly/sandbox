export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    const Graph = engine
      .jsonUrl("/assets/force-graph/miserables.json")
      .nodeLabel(node => `<span style="color: #2b2b2b">${node.id}</span>`)
      .nodeAutoColorBy("group")
      .linkDirectionalParticles("value")
      .linkDirectionalParticleSpeed(d => d.value * 0.001);
  }
}
