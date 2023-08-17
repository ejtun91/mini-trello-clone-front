import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TopbarComponent } from './components/topbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [TopbarComponent],
  declarations: [TopbarComponent],
  providers: [],
})
export class TopbarModule {}
