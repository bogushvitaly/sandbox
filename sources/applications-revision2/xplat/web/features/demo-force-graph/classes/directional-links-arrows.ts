export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    // Random tree
    const N = 40;
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
      .graphData(gData)
      .linkDirectionalArrowLength(3.5)
      .linkDirectionalArrowRelPos(1)
      .linkCurvature(0.25);
  }
}
