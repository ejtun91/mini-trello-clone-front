import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './components/boards/boards.component';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../auth/services/authguard.service';
import { BoardsService } from '../shared/services/boards.service';
import { InlineFormModule } from '../shared/modules/inlineForm/inlineForm.module';
import { TopbarModule } from '../shared/modules/topbar/topbar.module';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InlineFormModule,
    TopbarModule,
  ],
  exports: [],
  declarations: [BoardsComponent],
  providers: [BoardsService],
})
export class BoardsModule {}
