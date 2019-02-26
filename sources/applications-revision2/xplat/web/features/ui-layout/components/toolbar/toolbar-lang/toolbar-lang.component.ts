import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";

import { Lang } from "@applications/core";

@Component({
  selector: "app-toolbar-lang",
  templateUrl: "./toolbar-lang.component.html",
  styleUrls: ["./toolbar-lang.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarLangComponent implements OnInit {
  @ViewChild("langMenu")
  langMenu: ElementRef;

  @Output()
  changeLanguage: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  langList: Lang[];

  @Input()
  currentLang: string;

  constructor() {}

  ngOnInit(): void {}
}
