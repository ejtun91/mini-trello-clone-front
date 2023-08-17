import { NgModule } from '@angular/core';
import { InlineFormComponent } from './components/inlineForm.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InlineFormComponent],
  declarations: [InlineFormComponent],
  providers: [],
})
export class InlineFormModule {}
