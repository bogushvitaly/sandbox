export class Main {
  constructor() {}

  createScene(element: HTMLElement, engine: any): void {
    const Graph = engine
      .jsonUrl("/assets/force-graph/blocks.json")
      .nodeAutoColorBy("user")
      .nodeLabel(
        node =>
          `<span style="color: #2b2b2b">${`${node.user}: ${
            node.description
          }`}</span>`
      )
      .onNodeHover(node => (element.style.cursor = node ? "pointer" : null))
      .onNodeClick(node =>
        window.open(`https://bl.ocks.org/${node.user}/${node.id}`, "_blank")
      );
  }
}
