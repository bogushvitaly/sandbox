import {
  SwiperComponent,
  SwiperConfigInterface,
  SwiperDirective,
  SwiperPaginationInterface,
  SwiperScrollbarInterface
} from "ngx-swiper-wrapper";

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild
} from "@angular/core";

import { SliderBaseComponent } from "@applications/features";

@Component({
  selector: "app-slider",
  templateUrl: "slider.component.html",
  styleUrls: ["slider.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent extends SliderBaseComponent implements OnInit {
  constructor() {
    super();
  }

  show = true;
  slides = [
    "First slide",
    "Second slide",
    "Third slide",
    "Fourth slide",
    "Fifth slide",
    "Sixth slide"
  ];

  type = "component";

  disabled = false;

  config: SwiperConfigInterface = {
    a11y: true,
    direction: "horizontal",
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: ".swiper-pagination",
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent)
  componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective)
  directiveRef?: SwiperDirective;

  ngOnInit() {}

  toggleType(): void {
    this.type = this.type === "component" ? "directive" : "component";
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  toggleDirection(): void {
    this.config.direction =
      this.config.direction === "horizontal" ? "vertical" : "horizontal";
  }

  toggleSlidesPerView(): void {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  toggleOverlayControls(): void {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      this.config.navigation = false;

      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;

      this.config.navigation = true;
    }

    if (this.type === "directive" && this.directiveRef) {
      this.directiveRef.setIndex(0);
    } else if (
      this.type === "component" &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  toggleKeyboardControl(): void {
    this.config.keyboard = !this.config.keyboard;
  }

  toggleMouseWheelControl(): void {
    this.config.mousewheel = !this.config.mousewheel;
  }

  onIndexChange(index: number): void {
    console.log("Swiper index: ", index);
  }

  onSwiperEvent(event: string): void {
    console.log("Swiper event: ", event);
  }
}
