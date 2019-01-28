import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { SwiperComponent } from './swiper/swiper.component';
import { WrapperComponent } from './wrapper/wrapper.component';

export const NOTFOUND_COMPONENTS = [
  NotFoundComponent,
  WrapperComponent, 
  FooterComponent,
  SwiperComponent
];

export * from './not-found/not-found.component';
export * from './wrapper/wrapper.component'; 
export * from './footer/footer.component';
export * from './swiper/swiper.component';
