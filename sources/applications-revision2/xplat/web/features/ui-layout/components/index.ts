import { FooterComponent } from "./footer/footer.component";
import { FunMenuComponent } from "./fun-menu/fun-menu.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SliderComponent } from "./slider/slider.component";
import { ToolbarLangComponent } from "./toolbar/toolbar-lang/toolbar-lang.component";
import { ToolbarLogoComponent } from "./toolbar/toolbar-logo/toolbar-logo.component";
import { ToolbarMenuLeftComponent } from "./toolbar/toolbar-menu-left/toolbar-menu-left.component";
import { ToolbarMenuRightComponent } from "./toolbar/toolbar-menu-right/toolbar-menu-right.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { UiLayoutComponent } from "./ui-layout/ui-layout.component";
import { ShellComponent } from "./shell/shell.component";

export const UILAYOUT_COMPONENTS = [
  UiLayoutComponent,
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  ToolbarComponent,
  ToolbarLangComponent,
  ToolbarLogoComponent,
  ToolbarMenuLeftComponent,
  ToolbarMenuRightComponent,
  NotFoundComponent,
  SliderComponent,
  FunMenuComponent,
  NavigationComponent,
  ShellComponent
];

export * from "./ui-layout/ui-layout.component";
export * from "./footer/footer.component";
export * from "./header/header.component";
export * from "./sidebar/sidebar.component";
export * from "./toolbar/toolbar.component";
export * from "./toolbar/toolbar-lang/toolbar-lang.component";
export * from "./toolbar/toolbar-logo/toolbar-logo.component";
export * from "./toolbar/toolbar-menu-left/toolbar-menu-left.component";
export * from "./toolbar/toolbar-menu-right/toolbar-menu-right.component";
export * from "./not-found/not-found.component";
export * from "./slider/slider.component";
export * from "./fun-menu/fun-menu.component";
export * from "./navigation/navigation.component";
export * from "./shell/shell.component";
