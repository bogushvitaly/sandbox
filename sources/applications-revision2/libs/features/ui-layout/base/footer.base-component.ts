import { BaseComponent } from "@applications/core";

const ITEMS: any[] = [
  {
    link: "",
    src: "",
    alt: "Link 1"
  },
  {
    link: "",
    src: "",
    alt: "Link 2"
  }
];

export abstract class FooterBaseComponent extends BaseComponent {
  items: any[] = ITEMS;

  constructor() {
    super();
  }
}
