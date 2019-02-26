export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    const Graph = engine
      .jsonUrl("assets/force-graph/miserables.json")
      .nodeLabel("id")
      .nodeAutoColorBy("group");
  }
}
