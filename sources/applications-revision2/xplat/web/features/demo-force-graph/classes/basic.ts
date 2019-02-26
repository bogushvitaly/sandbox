export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    // Random tree
    const N = 300;
    const gData = {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
    };

    const Graph = engine.graphData(gData);
  }
}
