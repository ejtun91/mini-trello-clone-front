import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel.component';
import { CarouselItemDirective } from './components/carousel-item.directive';
import { CarouselItemElementDirective } from './components/carousel-item-element.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
  ],
  declarations: [
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
  ],
  providers: [],
})
export class CarouselModule {}
