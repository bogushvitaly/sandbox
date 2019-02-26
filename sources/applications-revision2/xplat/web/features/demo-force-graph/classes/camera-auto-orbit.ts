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

    const distance = 1000;

    engine
      .enableNodeDrag(false)
      .enableNavigationControls(false)
      .showNavInfo(false)
      .cameraPosition({ z: distance })
      .height("700")
      .graphData(gData);

    // camera orbit
    let angle = 0;
    setInterval(() => {
      const Graph = engine.cameraPosition({
        x: distance * Math.sin(angle),
        z: distance * Math.cos(angle)
      });
      angle += Math.PI / 300;
    }, 10);
  }
}
