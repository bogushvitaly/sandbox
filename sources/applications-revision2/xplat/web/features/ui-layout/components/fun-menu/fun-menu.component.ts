import { Component } from "@angular/core";

import { FunMenuBaseComponent } from "@applications/features";

@Component({
  selector: "app-fun-menu",
  templateUrl: "fun-menu.component.html"
})
export class FunMenuComponent extends FunMenuBaseComponent {
  options = {
    font: "sans-serif",
    defaultOpen: false, // Open menu automatically on load.
    defaultPosition: "bottomLeft", // The menu default position
    radius: 200, // The radius of the menu wings from the center of the button.
    angle: 30, // The angle at which each wing will open
    offset: 25, // The gap between the menu button and the menu item wings.
    showIcons: true, // A flag that determines whether to show icon.
    onlyIcons: false, // A flag that determines whether only show all icons and hide the wing title
    spinable: false, // A flag that determines whether the menu could be spin.
    wingFontSize: 16,
    wingFontWeight: 600,
    wingFontColor: "#ffffff",
    wingIconSize: 35,
    buttonWidth: 60,
    buttonBackgroundColor: "#444",
    buttonFontColor: "#ffffff",
    buttonFontWeight: 700,
    buttonFontSize: 14,
    buttonCrossImgSize: "50%",
    buttonOpacity: 0.7
  };
  wings = [
    {
      title: "Item A",
      color: "#ea2a29",
      icon: { name: "looks_one" }
    },
    {
      title: "Item B",
      color: "#f16729",
      icon: { name: "looks_two" }
    },
    {
      title: "Item C",
      color: "#f89322",
      icon: { name: "looks_3" }
    },
    {
      title: "Item D",
      color: "#ffcf14",
      icon: { name: "looks_4" }
    }
  ];

  gutter = {
    top: 30
  };

  startAngles = {
    topLeft: -20
  };

  constructor() {
    super();
  }
}
