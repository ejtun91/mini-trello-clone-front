import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from '../shared/modules/carousel/carousel.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), CarouselModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
